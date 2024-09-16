const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let isMusicPlayerVisible = false;
let isSliderVisible = false;
let music = document.getElementById('music');
let progressedBar = document.getElementById('progressedBar');
let volume = document.getElementById('slider');
let volumeValue = document.getElementById('sliderValue');
let playPause = document.getElementById('playPause')
let isAudioPlaying = false;
let p_songTitle = document.getElementById('p-songTitle')
let p_artistName = document.getElementById('p-artistName')
let p_songImage = document.getElementById('p-songImage')
let songDuration = document.getElementById('songDuration')
let songList = document.getElementById("songList");
let currentPlayingItem = null;
let isShuffle = false;
let songs = [
    {
        name: "Brown Rang",
        artist: "Yo Yo Honey Singh",
        location: "./Songs/Brown Rang.mp3",

        songImage: "./images/Song Images/BR.jpeg",
        artistImage: "./images/Artist Images/Honey Singh.jpeg",
    },
    {
        name: "Sky full of stars",
        artist: "ColdPlay",
        location: "./Songs/Sky full of stars.mp3",

        songImage: "./images/Song Images/SFOS.jpeg",
        artistImage: "./images/Artist Images/Coldplay.jpeg",
    },
    {
        name: "Beauty and a beat",
        artist: "Justin Bieber",
        location: "./Songs/Beauty and a beat.mp3",

        songImage: "./images/Song Images/BAAB.jpeg",
        artistImage: "./images/Artist Images/justin bieber.jpeg",
    },
    {
        name: "Closer",
        artist: "The Chainsmokers ft PJ",
        location: "./Songs/Closer.mp3",

        songImage: "./images/Song Images/CLOSER.jpeg",
        artistImage: "./images/Artist Images/The Chainsmokers.jpeg",
    },
    {
        name: "Cruel Summer",
        artist: "Taylor Swift",
        location: "./Songs/Cruel Summer.mp3",

        songImage: "./images/Song Images/CS.jpeg",
        artistImage: "./images/Artist Images/Taylor Swift.jpeg",
    },
    {
        name: "Night Changes",
        artist: "One Direction",
        location: "./Songs/Night Changes.mp3",

        songImage: "./images/Song Images/NC.jpeg",
        artistImage: "./images/Artist Images/One Direction.jpeg",
    },
    {
        name: "Payphone",
        artist: "Maroon 5",
        location: "./Songs/Payphone.mp3",

        songImage: "./images/Maroon 5 - [Album] Overexposed.jpeg",
        artistImage: "./images/Artist Images/Maroon 5.jpeg",
    },
];
let songIndex = 0;
let artistImage = songs[songIndex].artistImage;
p_songImage.src = songs[songIndex].songImage;
p_artistName.innerText = songs[songIndex].artist;
p_songTitle.innerText = songs[songIndex].name;
music.src = songs[songIndex].location;

document.getElementById('shuffleButton').addEventListener('click', toggleShuffle);

function toggleShuffle() {
    isShuffle = !isShuffle;
    document.getElementById('shuffleButton').classList.toggle('text-yellow-400', isShuffle); // Change text color when active
}

function getNextSongIndex() {
    if (isShuffle) {
        // Shuffle mode is enabled
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === songIndex); // Ensure the new song is not the current song
        return newIndex;
    } else {
        // Regular mode
        return (songIndex + 1) % songs.length;
    }
}
function getPreviousSongIndex() {
    if (isShuffle) {
        // Shuffle mode is enabled
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === songIndex); // Ensure the new song is not the current song
        return newIndex;
    } else {
        // Regular mode
        return (songIndex - 1 + songs.length) % songs.length;
    }
}

function displaySongList() {
    const songList = document.getElementById('songList');
    songList.innerHTML = songs.map((song, index) =>
        `<li class="p-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-[#FFD43B] hover:text-black hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.4)] text-white custom-cursor-pointer hover:font-bold ${index === songIndex ? 'highlight' : ''}" data-index="${index}">
            ${song.name}
        </li>`
    ).join('');

    const songItems = songList.querySelectorAll('li');
    songItems.forEach(item => {
        item.addEventListener('click', function () {
            const songIndex = this.getAttribute('data-index'); 
            playSong(songIndex); 
        });
    });
}


function playSong(index) {
    // Update UI elements
    const selectedSong = songs[index];
    p_songTitle.innerText = selectedSong.name;
    p_artistName.innerText = selectedSong.artist;
    p_songImage.src = selectedSong.songImage;
    music.src = selectedSong.location;
    music.play();
    playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    isAudioPlaying = true;

    // Update the song index and display song list
    songIndex = index;
    displaySongList(); // Ensure the song list is updated to reflect changes
}



displaySongList();

function skipForward(seconds) {
    if (music) {
        music.currentTime += seconds;
    }
}
function rewind(seconds) {
    if (music) {
        music.currentTime -= seconds;
    }
}


window.addEventListener('keydown', function (event) {

    if (event.key === 'ArrowRight') {
        skipForward(5);
    }
});
window.addEventListener('keydown', function (event) {

    if (event.key === 'ArrowLeft') {
        rewind(5);
    }
});
window.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' && volume.value < 100) {
        volume.value++;
        volumeUpdate();
    }
    if (event.key === 'ArrowDown' && volume.value > 0) {
        volume.value--;
        volumeUpdate();
    }
});

window.addEventListener('keydown', function (event) {
    
    if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault(); 
        audioPlay(); 
    }
})


function updatePlaybackTime() {
    var currentTime = music.currentTime;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    document.getElementById('completedDuration').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

window.addEventListener('load', function () {
    updatePlaybackTime();
    music.addEventListener('timeupdate', updatePlaybackTime);
});

window.addEventListener('load', function () {
    var minutes = 0;
    var seconds = 0;

    music.addEventListener('loadedmetadata', function () {

        var duration = music.duration;
        minutes = Math.floor(duration / 60);
        seconds = Math.floor(duration % 60);
        songDuration.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        music.play()
    });
});

document.getElementById('nextButton').addEventListener('click', nextButton);

function nextButton() {
    songIndex = getNextSongIndex();
    musicDisplay();
    playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    music.play();
}
function previousButton() {
    songIndex = getPreviousSongIndex();
    musicDisplay();
    playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    music.play();
}
function musicDisplay() {
    music.src = songs[songIndex].location;
    p_songTitle.innerText = songs[songIndex].name;
    p_artistName.innerText = songs[songIndex].artist;
    p_songImage.src = songs[songIndex].songImage;
    coverImage.style.backgroundImage = `url(${songs[songIndex].artistImage})`;

}





function audioPlay() {
    if (!isAudioPlaying) { // Audio is currently paused, so play it
        music.play();
        playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        isAudioPlaying = true;
    } else { // Audio is playing, so pause it
        music.pause();
        playPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
        isAudioPlaying = false;
    }
}

playPause.addEventListener('click', audioPlay)

function volumeUpdate() {

    volumeValue.innerText = volume.value;
    music.volume = volume.value / 100;

}

function updateCarousel() {
    const itemWidth = carousel.clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

updateCarousel();




document.getElementById('currentSong').addEventListener('click', toggleMusicPlayer);
slider.addEventListener('input', volumeUpdate);
volume.addEventListener('input', volumeUpdate);
volumeUpdate();

function displayVolumeSlider() {
    let sliderParent = document.getElementById('sliderParent');
    if (isSliderVisible) {
        sliderParent.style.display = "none";
        isSliderVisible = false;
    }
    else {
        sliderParent.style.display = "block";
        isSliderVisible = true;
    }

}



function loadingBar() {
    let musicWidth = (music.currentTime / music.duration) * 100;
    progressedBar.style.width = musicWidth + "%";
    if (musicWidth === 100) {
        nextButton();
        playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }
}

music.addEventListener('timeupdate', loadingBar)

function toggleMusicPlayer() {
    let mainContent = document.getElementById("main");
    if (isMusicPlayerVisible) {

        mainContent.innerHTML = `
     <div class=" w-[65vw] h-[90vh] ml-[20vw] p-10 overflow-auto scrollbar-hide">
    <div class="text-white w-[60%] flex gap-5 items-center">
        <input type="text" name="search" id="search" placeholder="    Search..."
            class="w-[90%] rounded-full p-1 text-black">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="mt-10">
        <div class="relative overflow-hidden">
            <div id="carousel" class="flex">
                <!-- Carousel items -->
                <div class="carousel-item bg-cover bg-center h-[150px] flex items-center justify-center relative"
                    style="background-image: url('https://picsum.photos/800/500?random=1');">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <p class="text-white text-3xl font-bold">The Weeknd</p>
                    </div>
                </div>

                <div class="carousel-item bg-cover bg-center h-[150px] flex items-center justify-center relative"
                    style="background-image: url('https://picsum.photos/800/500?random=2');">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <p class="text-white text-3xl font-bold">Coldplay</p>
                    </div>
                </div>

                <div class="carousel-item bg-cover bg-center h-[150px] flex items-center justify-center relative"
                    style="background-image: url('https://picsum.photos/800/500?random=3');">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <p class="text-white text-3xl font-bold">Taylor Swift</p>
                    </div>
                </div>
            </div>

            <!-- Carousel controls -->
            <button id="prev"
                class="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">⮜</button>
            <button id="next"
                class="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">⮞</button>
        </div>




    </div>
    <div class="mt-8 text-white">
        <div class="flex justify-between">
            <p>Recommended Albums</p>
            <select name="Genre" id="Genre" class="text-black rounded-xl p-[2px]">
                <option value="pop">EDM</option>
                <option value="pop" selected>POP</option>
                <option value="pop">Country</option>
                <option value="pop">Jazz</option>
            </select>
        </div>
        <div class="flex gap-5 mt-5">
            <div
                class="bg-[#2E2E2E] h-[150px] transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">
                <img src="./images/Harry Styles Vinyl.jpeg" alt="" class="h-[70%] w-auto">
                <p class="ml-2">Fine Line</p>
                <p class="text-[10px] ml-2 text-gray-400">Harry Styles</p>
            </div>
            <div
                class="bg-[#2E2E2E] h-[150px] transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">
                <img src="./images/Reputation album cover in Color😮😮.jpeg" alt="" class="h-[70%] w-auto">
                <p class="ml-2">Reputation</p>
                <p class="text-[10px] ml-2 text-gray-400">Taylor Swift</p>
            </div>
            <div
                class="bg-[#2E2E2E] h-[150px] transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">
                <img src="./images/AFTER HOURS - THE WEEKND _ ALBUM COVER.jpeg" alt="" class="h-[70%] w-auto">
                <p class="ml-2">After Hours</p>
                <p class="text-[10px] ml-2 text-gray-400">The Weeknd</p>
            </div>
            <div
                class="bg-[#2E2E2E] h-[150px] transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">
                <img src="./images/olivia rodrigo.jpeg" alt="" class="h-[70%] w-auto">
                <p class="ml-2">Sour</p>
                <p class="text-[10px] ml-2 text-gray-400">Olivia Rodrigo</p>
            </div>
            <div
                class="bg-[#2E2E2E] h-[150px] transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">
                <img src="./images/One direction Four Album cover b&w.jpeg" alt="" class="h-[70%] w-auto">
                <p class="ml-2">Four</p>
                <p class="text-[10px] ml-2 text-gray-400">One Direction</p>
            </div>
            <div
                class="bg-[#2E2E2E] h-[150px] transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">
                <img src="./images/positions dlx album cover.jpeg" alt="" class="h-[70%] w-auto">
                <p class="ml-2">Positions</p>
                <p class="text-[10px] ml-2 text-gray-400">Ariana Grande</p>
            </div>
            <div
                class="bg-[#2E2E2E] h-[150px] transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">
                <img src="./images/Happier Than Ever.jpeg" alt="" class="h-[70%] w-auto">
                <p class="ml-2">HTE</p>
                <p class="text-[10px] ml-2 text-gray-400">Billie Eilish</p>
            </div>

        </div>
    </div>
    <div class="mt-8 text-white">
        <div class="flex justify-between">
            <p>Recommended Artists</p>
            <p class="text-gray-400">MORE</p>
        </div>
        <div class="flex gap-8 mt-5 text-center">
            <div class=" h-[150px]">
                <img src="./images/taylor swift.jpeg" alt=""
                    class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">

                <p class=" mt-2 ">Taylor Swift</p>
            </div>
            <div class=" h-[150px]">
                <img src="./images/Future.jpeg" alt=""
                    class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">

                <p class=" mt-2 ">Future</p>
            </div>
            <div class=" h-[150px]">
                <img src="./images/SZA.jpeg" alt=""
                    class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">

                <p class=" mt-2 ">SZA</p>
            </div>
            <div class=" h-[150px]">
                <img src="./images/eminem.jpeg" alt=""
                    class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">

                <p class=" mt-2 ">Eminem</p>
            </div>
            <div class=" h-[150px]">
                <img src="./images/justin bieber.jpeg" alt=""
                    class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">

                <p class=" mt-2 ">Justin Bieber</p>
            </div>
            <div class=" h-[150px]">
                <img src="./images/shawn mendes.jpeg" alt=""
                    class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">

                <p class=" mt-2 ">Shawn Mendes</p>
            </div>
            <div class=" h-[150px]">
                <img src="./images/charlie puth.jpeg" alt=""
                    class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] cursor-pointer">

                <p class=" mt-2 ">Charlie Puth</p>
            </div>

        </div>
    </div>

</div>
    `;
        isMusicPlayerVisible = false;
    } else {

        mainContent.innerHTML = `
    <div class=" w-[65vw] h-[90vh] ml-[20vw] p-10 overflow-auto scrollbar-hide">
        <div class=" h-full w-full relative  p-10" id="artistImage" style="background: url('${songs[songIndex].artistImage}'); background-repeat: no-repeat; background-size: cover; background-position: center;">
            <div class="absolute inset-0 h-full w-full bg-white opacity-40 z-10"></div>
            <div class="bg-black bg-opacity-50 border-black border-[3px] h-full w-full flex justify-around p-10 z-20 relative rounded-3xl">
                <div class=" h-full bg-white text-center rounded-xl">
                    <img src="${p_songImage.src}" alt="" class="h-[70%] w-full">
                    <div class="p-2">
                    <p class="text-5xl" >${p_songTitle.innerText}</p>
                    <p class="text-2xl mt-4 " >${p_artistName.innerText}</p>
                    </div>
                </div>
                <div class="bg-gray-800 border-white border-2 w-[40%] text-white p-3 overflow-auto scrollbar-hide rounded-xl">
                    <p class="text-4xl">Lyrics</p>
                    <p class="mt-4 overflow-auto  h-[85%] w-full scrollbar-hide" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit quae sint dolores totam aperiam rem sequi recusandae omnis? Illo, ipsum mollitia? Impedit ratione, nisi nesciunt harum placeat facere! Accusantium quisquam eum nihil molestias consequuntur beatae delectus cumque ducimus labore earum eos asperiores facilis nam temporibus quam tenetur, repudiandae illo. Odit, minima esse dolores fugit id velit error quae aperiam aliquam expedita eos quam doloribus similique voluptas quas eveniet, aspernatur suscipit itaque reprehenderit. Tempora tenetur ex delectus, perferendis nemo labore. Ad delectus voluptatum quaerat necessitatibus qui soluta illo consequatur obcaecati possimus minima inventore a at recusandae quibusdam, nobis eos quas exercitationem modi corporis quasi cumque? Quidem beatae eaque modi distinctio accusantium quam neque dolor delectus quis quos iure similique obcaecati officiis, minima cupiditate soluta sunt eos, accusamus harum, corporis deleniti aut illum recusandae? Odit, doloremque voluptatibus, ullam debitis magni facilis non quidem illo maiores reiciendis quibusdam. Explicabo quibusdam sunt sed?</p>
                </div>
            </div>
        </div>
    </div>
    `;
        isMusicPlayerVisible = true;
    }

}

