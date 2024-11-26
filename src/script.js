const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel-item");
const currentSong = document.getElementById("currentSong");
const progressedBarSmallerDevices = document.getElementById(
  "progressedBarSmallerDevices"
);
let mainContent = document.getElementById("main");
let currentIndex = 0;
let isMusicPlayerVisible = false;
let isSliderVisible = false;
let music = document.getElementById("music");
let progressedBar = document.getElementById("progressedBar");
let volume = document.getElementById("slider");
let volumeValue = document.getElementById("sliderValue");
let playPause = document.getElementById("playPause");
let isAudioPlaying = false;
let p_songTitle = document.getElementById("p-songTitle");
let p_artistName = document.getElementById("p-artistName");
let p_songImage = document.getElementById("p-songImage");
let songDuration = document.getElementById("songDuration");
let songList = document.getElementById("songList");
let currentPlayingItem = null;
let isShuffle = false;
let searchInput = document.getElementById("search");
let suggestionsList = document.getElementById("suggestions");
let songs = [
  {
    name: "Brown Rang",
    artist: "Yo Yo Honey Singh",
    location: "./Songs/Brown Rang.mp3",

    songImage: "./images/Song Images/BR.jpeg",
    artistImage: "./images/Artist Images/Honey Singh.jpeg",
    lyrics: `ਕੁੜੀਏ ਨੀ ਤੇਰੇ brown ਰੰਗ ਨੇ <br>
ਮੁੰਡੇ ਪੱਟ ਤੇ ਨੀ ਸਾਰੇ ਮੇਰੇ town ਦੇ <br>
ਕੁੜੀਏ ਨੀ ਤੇਰੇ brown ਰੰਗ ਨੇ <br>
ਮੁੰਡੇ ਪੱਟ ਤੇ ਨੀ ਸਾਰੇ ਮੇਰੇ town ਦੇ <br>
ਕੋਈ ਕੰਮ ਉਤੇ ਜਾਵੇ ਨਾ, ਰੋਟੀ ਪਾਣੀ ਖਾਵੇ ਨਾ <br>
ਗੋਰੀ-ਗੋਰੀ ਕੁੜੀਆਂ ਨੂੰ ਕੋਈ ਮੂੰਹ ਲਾਵੇ ਨਾ <br>
ਕੰਮ ਉਤੇ ਜਾਵੇ ਨਾ, ਰੋਟੀ-ਪਾਣੀ ਖਾਵੇ ਨਾ <br>
ਗੋਰੀ-ਗੋਰੀ ਕੁੜੀਆਂ ਨੂੰ ਕੋਈ ਮੂੰਹ ਲਾਵੇ ਨਾ <br>
ਕੁੜੀਏ ਨੀ ਤੇਰੇ b-b-brown ਰੰਗ ਨੇ <br>
ਮੁੰਡੇ ਪੱਟ ਤੇ ਨੀ ਸਾਰੇ ਮੇਰੇ town ਦੇ <br>
ਮੇਰੇ town ਦੇ, ਮੇਰੇ town ਦੇ <br>
ਮੇਰੇ town ਦੇ, ਬਿੱਲੋ, ਮੇਰੇ town ਦੇ <br>
ਮੇਰੇ town ਦੇ, ਮੇਰੇ town ਦੇ <br>
Excuse me, miss <br>
ਕਿਸ-ਕਿਸ-ਕਿਸ <br>
ਕਿਸ ਸੇ ਤੂੰ ਭਾਗੇਗੀ, ਹੁਣ ਬੱਚ-ਬੱਚ ਕੇ? <br>
ਤੈਨੂੰ ਰੱਬ ਨੇ ਹੁਸਣ ਦਿੱਤਾ ਰੱਜ-ਰੱਜ ਕੇ <br>
ਮੈਂ ਕਿਆ ਕਾਲੀ ਤੇਰੀ Gucci, ਤੇ Prada ਤੇਰਾ ਲਾਲ <br>
ਕਿੱਥੇ ਚੱਲੇ ਓ, ਸੋਹਣੀਓ ਸੱਜ ਧਜ ਕੇ <br>
ਤੇਰੇ ਵਰਗੀ ਨਾਰ ਨੀ ਹੋਣੀ, ਮੈਂਨੂੰ ਮੁੰਡੇ ਕਹਿੰਦੇ ਸੀ <br>
ਹੋ ਗਏ ਨੀ ਤੇਰੇ ਚਰਚੇ Star News to BBC <br>
ਓ brown, brown skin ਵਾਲੀ <br>
Let me tell you one thing <br>
ਰੱਬ ਦੀ ਸੌਂਹ, you so sexy <br>
ਕੁੜੀਏ ਨੀ ਤੇਰੇ brown ਰੰਗ ਨੇ <br>
ਮੁੰਡੇ ਪੱਟ ਤੇ ਨੀ ਸਾਰੇ ਮੇਰੇ town ਦੇ <br>
ਕੋਈ ਕੰਮ ਉਤੇ ਜਾਵੇ ਨਾ, ਰੋਟੀ-ਪਾਣੀ ਖਾਵੇ ਨਾ <br>
ਗੋਰੀ-ਗੋਰੀ ਕੁੜੀਆਂ ਨੂੰ ਕੋਈ ਮੂੰਹ ਲਾਵੇ ਨਾ <br>
ਕੁੜੀਏ ਨੀ ਤੇਰੇ brown ਰੰਗ ਨੇ <br>
ਮੁੰਡੇ ਪੱਟ ਤੇ ਨੀ ਸਾਰੇ ਮੇਰੇ town ਦੇ <br>
ਮੇਰੇ town ਦੇ, ਮੇਰੇ town ਦੇ <br>
ਮੇਰੇ town ਦੇ, ਬਿੱਲੋ, ਮੇਰੇ town ਦੇ (yeah) <br>
ਉਰੇ ਆ, ਤੈਨੂੰ ਇਕ ਗੱਲ ਸਮਜਾਵਾv
ਮਾੜੇ ਪੁਰਜ਼ੇ ਨੂੰ ਕਦੀ ਹੱਥ ਮੈ ਨਾ ਪਾਵਾਂ, ਆਂਹ! <br>
ਵੈਸੇ ਤਾਂ ਮਿੱਤਰਾਂ ਦਾ ਬਹ ਵੱਡਾ score <br>
But white chicks, na <br>
I don't like them anymore <br>
ਬਣ ਮਿੱਤਰਾਂ ਦੀ whore <br>
I mean, ਮਿੱਤਰਾਂ ਦੀ whore <br>
ਤੂੰ ਵੀ ਟੇਡਾ-ਟੇਡਾ ਤੱਕੇ ਸਾਨੂੰ, I know <br>
Now, don't say, "no, no" <br>
ਮੈਂ ਤਾਂ ਤੇਰਾ Yo Yo <br>
ਤੂੰ ਹਾਂ ਤਾ ਕਰ, ਸਾਂਭ ਲੂਂ ਮੈ ਤੇਰਾ ਪਿਓ <br>
ਕੁੜੀਏ ਨੀ ਤੇਰੇ brown ਰੰਗ ਨੇ <br>
ਮੁੰਡੇ ਪੱਟ ਤੇ ਨੀ ਸਾਰੇ ਮੇਰੇ town ਦੇ <br>
ਕੋਈ ਕੰਮ ਉਤੇ ਜਾਵੇ ਨਾ, ਰੋਟੀ-ਪਾਣੀ ਖਾਵੇ ਨਾ <br>
ਗੋਰੀ-ਗੋਰੀ ਕੁੜੀਆਂ ਨੂੰ ਕੋਈ ਮੂੰਹ ਲਾਵੇ ਨਾ <br>
ਕੋਈ ਕੰਮ ਉਤੇ ਜਾਵੇ ਨਾ, ਰੋਟੀ ਪਾਣੀ ਖਾਵੇ ਨਾ <br>
ਗੋਰੀ-ਗੋਰੀ ਕੁੜੀਆਂ ਨੂੰ ਕੋਈ ਮੂੰਹ ਲਾਵੇ ਨਾ <br>
ਕੁੜੀਏ ਨੀ ਤੇਰੇ brown ਰੰਗ ਨੇ <br>
ਮੁੰਡੇ ਪੱਟ ਤੇ ਨੀ ਸਾਰੇ ਮੇਰੇ town ਦੇ <br>
ਕੋਈ ਕੰਮ ਉਤੇ ਜਾਵੇ ਨਾ, ਰੋਟੀ-ਪਾਣੀ ਖਾਵੇ ਨਾ <br>
ਗੋਰੀ-ਗੋਰੀ ਕੁੜੀਆਂ ਨੂੰ ਕੋਈ ਮੂੰਹ ਲਾਵੇ ਨਾ <br>
Yo Yo Honey Singh <br>
Yo Yo Honey Singh <br>
`,
  },
  {
    name: "Sky full of stars",
    artist: "ColdPlay",
    location: "./Songs/Sky full of stars.mp3",

    songImage: "./images/Song Images/SFOS.jpeg",
    artistImage: "./images/Artist Images/Coldplay.jpeg",
    lyrics: `'Cause you're a sky, 'cause you're a sky full of stars <br>
I'm gonna give you my heart <br>
'Cause you're a sky, 'cause you're a sky full of stars <br>
'Cause you light up the path <br>
I don't care, go on and tear me apart <br>
I don't care if you do, ooh-ooh, ooh <br>
'Cause in a sky, 'cause in a sky full of stars <br>
I think I saw you <br>
'Cause you're a sky, 'cause you're a sky full of stars <br>
I wanna die in your arms, oh, oh-oh <br>
'Cause you get lighter the more it gets dark <br>
I'm gonna give you my heart, oh <br>
I don't care, go on and tear me apart <br>
I don't care if you do, ooh-ooh, ooh <br>
'Cause in a sky, 'cause in a sky full of stars <br>
I think I see you <br>
I think I see you <br>
'Cause you're a sky, you're a sky full of stars <br>
Such a heavenly view <br>
You're such a heavenly view <br>
Yeah, yeah, yeah, ooh`,
  },
  {
    name: "Beauty and a beat",
    artist: "Justin Bieber",
    location: "./Songs/Beauty and a beat.mp3",

    songImage: "./images/Song Images/BAAB.jpeg",
    artistImage: "./images/Artist Images/justin bieber.jpeg",
    lyrics: `Yeah <br>
Young Money <br>
Nicki Minaj, Justin <br>
Show you off, tonight I wanna show you off (aye-aye-aye) <br>
What you got, a billion could've never bought (aye-aye-aye) <br>
We gonna party like it's 3012 tonight <br>
I wanna show you all the finer things in life <br>
So just forget about the world, we young tonight <br>
I'm coming for ya, I'm coming for ya <br>
'Cause all I need <br>
Is a beauty and a beat <br>
Who can make my life complete <br>
It's all 'bout you <br>
When the music makes you move <br>
Baby, do it like you do <br>
'Cause you <br>
Body rock <br>
Girl, I can feel your body rock (aye-aye-aye) <br>
Take a bow <br>
You on the hottest ticket now (aye-aye-aye) <br>
We gonna party like it's 3012 tonight <br>
I wanna show you all the finer things in life <br>
So just forget about the world, we young tonight <br>
I'm coming for ya, I'm coming for ya <br>
'Cause all I need <br>
Is a beauty and a beat <br>
Who can make my life complete <br>
It's all 'bout you <br>
When the music makes you move <br>
Baby, do it like you do (uh, uh) <br>
'Cause you <br>
In time, ink lines <br>
Bitches couldn't get on my incline <br>
World tours, it's mine <br>
Ten little letters on a big sign <br>
Justin Bieber <br>
You know Imma hit 'em with the ether <br>
Buns out, weiner <br>
But I gotta keep an eye out for Selener <br>
Beauty, beauty and the beast <br>
Beauty from the East <br>
Beautiful confessions of the priest <br>
Beast, beauty from the streets, beat'll get deceased <br>
Every time Beauty on the beats eats <br> 
Body rock, oh (yeah, yeah, yeah) <br>
I wanna feel your body rock (yeah, let's go, let's go) <br>
'Cause all I need (all I need is love) <br>
Is a beauty and a beat <br>
Who can make my life complete (oh, whoa) <br>
It's all 'bout you (all I need is you) <br>
When the music makes you move <br>
Baby, do it like you do <br>
'Cause you <br>`,
  },
  {
    name: "Closer",
    artist: "The Chainsmokers ft PJ",
    location: "./Songs/Closer.mp3",

    songImage: "./images/Song Images/CLOSER.jpeg",
    artistImage: "./images/Artist Images/The Chainsmokers.jpeg",
    lyrics: `Hey, I was doing just fine before I met you <br>
I drink too much and that's an issue, but I'm okay <br>
Hey, you tell your friends it was nice to meet them <br>
But I hope I never see them again <br>
I know it breaks your heart <br> 
Moved to the city in a broke-down car, and <br>
Four years, no calls <br>
Now you're looking pretty in a hotel bar <br>
And I, I, I, I, I can't stop <br>
No, I, I, I, I, I can't stop <br>
So, baby, pull me closer <br>
In the back seat of your Rover <br>
That I know you can't afford <br>
Bite that tattoo on your shoulder <br>
Pull the sheets right off the corner <br>
Of that mattress that you stole <br>
From your roommate back in Boulder <br>
We ain't ever getting older <br>
We ain't ever getting older <br>
We ain't ever getting older <br>
You look as good as the day I met you <br>
I forget just why I left you, I was insane <br>
Stay and play that Blink-182 song <br>
That we beat to death in Tucson, okay <br>
I know it breaks your heart <br>
Moved to the city in a broke-down car, and <br>
Four years, no call <br>
Now I'm looking pretty in a hotel bar <br>
And I, I, I, I, I can't stop <br>
No, I, I, I, I, I can't stop <br>
So, baby, pull me closer <br>
In the back seat of your Rover <br>
That I know you can't afford <br>
Bite that tattoo on your shoulder <br>
Pull the sheets right off the corner <br>
Of that mattress that you stole <br>
From your roommate back in Boulder <br>
We ain't ever getting older <br>
We ain't ever getting older <br>
We ain't ever getting older`,
  },
  {
    name: "Cruel Summer",
    artist: "Taylor Swift",
    location: "./Songs/Cruel Summer.mp3",

    songImage: "./images/Song Images/CS.jpeg",
    artistImage: "./images/Artist Images/Taylor Swift.jpeg",
    lyrics: `Fever dream high in the quiet of the night <br>
You know that I caught it (oh yeah, you're right, I want it) <br>
Bad, bad boy, shiny toy with a price <br>
You know that I bought it (oh yeah, you're right, I want it) <br>
Killing me slow, out the window <br>
I'm always waiting for you to be waiting below <br>
Devils roll the dice, angels roll their eyes <br>
What doesn't kill me makes me want you more <br>
And it's new, the shape of your body <br>
It's blue, the feeling I've got <br>
And it's ooh, whoa-oh <br>
It's a cruel summer <br>
"It's cool, " that's what I tell 'em <br>
No rules in breakable heaven <br>
But ooh, whoa-oh <br>
It's a cruel summer with you (yeah, yeah) <br>
Hang your head low in the glow of the vending machine <br>
I'm not dying (oh yeah, you're right, I want it) <br>
You say that we'll just screw it up in these trying times <br>
We're not trying (oh yeah, you're right, I want it) <br>
So cut the headlights, summer's a knife <br>
I'm always waiting for you just to cut to the bone <br>
Devils roll the dice, angels roll their eyes <br>
And if I bleed, you'll be the last to know, oh <br>
It's new, the shape of your body <br>
It's blue, the feeling I've got <br>
And it's ooh, whoa-oh <br>
It's a cruel summer <br>
"It's cool, " that's what I tell 'em <br>
No rules in breakable heaven <br>
But ooh, whoa-oh <br>
It's a cruel summer with you <br>
I'm drunk in the back of the car <br>
And I cried like a baby coming home from the bar (oh) <br>
Said, "I'm fine, " but it wasn't true <br>
I don't wanna keep secrets just to keep you <br>
And I snuck in through the garden gate <br>
Every night that summer, just to seal my fate (oh) <br>
And I screamed, "For whatever it's worth <br>
I love you, ain't that the worst thing you ever heard?" <br>
He looks up, grinnin' like a devil <br>
It's new, the shape of your body <br>
It's blue, the feeling I've got <br>
And it's ooh, whoa-oh <br>
It's a cruel summer <br>
"It's cool, " that's what I tell 'em <br>
No rules in breakable heaven <br>
But ooh, whoa-oh <br>
It's a cruel summer with you <br>
I'm drunk in the back of the car <br>
And I cried like a baby coming home from the bar (oh) <br>
Said, "I'm fine, " but it wasn't true <br>
I don't wanna keep secrets just to keep you <br>
And I snuck in through the garden gate <br>
Every night that summer, just to seal my fate (oh) <br>
And I screamed, "For whatever it's worth <br>
I love you, ain't that the worst thing you ever heard?" <br>
(Yeah, yeah, yeah, yeah)`,
  },
  {
    name: "Night Changes",
    artist: "One Direction",
    location: "./Songs/Night Changes.mp3",

    songImage: "./images/Song Images/NC.jpeg",
    artistImage: "./images/Artist Images/One Direction.jpeg",
    lyrics: `Going out tonight, changes into something red <br>
Her mother doesn't like that kind of dress <br>
Everything she never had, she's showing off <br>
 <br>
Driving too fast, Moon is breaking through her hair <br>
She's heading for something that she won't forget <br>
Having no regrets is all that she really wants <br>
 <br>
We're only getting older, baby <br>
And I've been thinking about it lately <br>
Does it ever drive you crazy <br>
Just how fast the night changes? <br>
 <br>
Everything that you've ever dreamed of <br>
Disappearing when you wake up <br>
But there's nothing to be afraid of <br>
Even when the night changes <br>
It will never change me and you <br>
 <br>
Chasing it tonight, doubts are running 'round her head <br>
He's waiting, hides behind his cigarette <br>
Heart is beating loud and she doesn't want it to stop <br>
 <br>
Moving too fast, Moon is lighting up her skin <br>
She's falling, doesn't even know it yet <br>
Having no regrets is all that she really wants <br>
 <br>
We're only getting older, baby <br>
And I've been thinking about it lately <br>
Does it ever drive you crazy <br>
Just how fast the night changes? <br>
 <br>
Everything that you've ever dreamed of <br>
Disappearing when you wake up <br>
But there's nothing to be afraid of <br>
Even when the night changes <br>
It will never change me and you <br>
 <br>
Ooh, ooh, ooh <br>
Ooh, ooh, ooh, ooh, ooh <br>
Ooh, ooh, ooh, ooh, ooh, ooh <br>
 <br>
Going out tonight, changes into something red <br>
Her mother doesn't like that kind of dress <br>
Reminds her of the missing piece of innocence she lost <br>
 <br>
We're only getting older, baby <br>
And I've been thinking about it lately <br>
Does it ever drive you crazy <br>
Just how fast the night changes? <br>
 <br>
Everything that you've ever dreamed of <br>
Disappearing when you wake up <br>
But there's nothing to be afraid of <br>
Even when the night changes <br>
 <br>
Everything that you've ever dreamed of <br>
Disappearing when you wake up <br>
But there's nothing to be afraid of <br>
Even when the night changes <br>
It will never change, baby <br>
It will never change, baby <br>
It will never change me and you  <br>`,
  },
  {
    name: "Payphone",
    artist: "Maroon 5",
    location: "./Songs/Payphone.mp3",

    songImage: "./images/Maroon 5 - [Album] Overexposed.jpeg",
    artistImage: "./images/Artist Images/Maroon 5.jpeg",
    lyrics: `I'm at a payphone, trying to call home <br>
All of my change, I spent on you <br>
Where have the times gone? Baby, it's all wrong <br>
Where are the plans we made for two? <br>
Yeah, I, I know it's hard to remember the people we used to be <br>
It's even harder to picture that you're not here next to me <br>
You say it's too late to make it, but is it too late to try? <br>
And in our time that you wasted, all of our bridges burned down <br>
I've wasted my nights, you turned out the lights <br>
Now I'm paralyzed <br>
Still stuck in that time when we called it "love" <br>
But even the sun sets in paradise <br>
I'm at a payphone, trying to call home <br>
All of my change, I spent on you <br>
Where have the times gone? Baby, it's all wrong <br>
Where are the plans we made for two? <br>
If happy-ever-afters did exist <br>
I would still be holding you like this <br>
All those fairy tales are full of shit <br>
One more fucking love song, I'll be sick, oh, yeah <br>
You turned your back on tomorrow 'cause you forgot yesterday <br>
I gave you my love to borrow, but you just gave it away <br>
You can't expect me to be fine (oh), I don't expect you to care (yeah) <br>
I know I said it before, but all of our bridges burned down <br>
I've wasted my nights, you turned out the lights <br>
Now I'm paralyzed <br>
Still stuck in that time when we called it "love" <br>
But even the sun sets in paradise <br>
I'm at a payphone, trying to call home <br>
All of my change, I spent on you (oh, oh) <br>
Where have the times gone? Baby, it's all wrong <br>
Where are the plans we made for two? (Yeah) <br>
If happy-ever-afters did exist <br>
I would still be holding you like this <br>
And all those fairy tales are full of shit <br>
One more fucking love song, I'll be sick (uh) <br>
Now I'm at a payphone <br>
Man, fuck that shit <br>
I'll be out, spendin' all this money while you sittin' 'round <br>
Wondering why it wasn't you who came up from nothin' <br>
Made it from the bottom, now when you see me, I'm stuntin' <br>
And all of my cars start with the push of a button <br>
Telling me I changed since I blew up, or whatever you call it <br>
Switched the number to my phone so you never could call it <br>
Don't need my name on my shirt, you can tell that I'm ballin' <br>
Swish, what a shame, coulda got picked <br>
Had a really good game, but you missed your last shot <br>
So you talk about who you see at the top <br>
Or what you could've saw, but sad to say, it's over for <br>
Phantom pulled up, valet opened doors <br>
Wished I'd go away, got what you was looking for <br>
Now it's me who they want <br>
So you can go and take that little piece of shit with you (yeah) <br>
I'm at a payphone, trying to call home <br>
All of my change, I spent on you (whoo) <br>
Where have the times gone? Baby, it's all wrong (yeah) <br>
Where are the plans we made for two? (Yeah, yeah) <br>
If happy-ever-afters did exist (oh) <br>
I would still be holding you like this <br>
And all these fairy tales are full of shit (yeah) <br>
One more fucking love song, I'll be sick (yeah) <br>
Now I'm at a payphone <br>`,
  },
];
let songIndex = 0;
let artistImage = songs[songIndex].artistImage;
p_songImage.src = songs[songIndex].songImage;
p_artistName.innerText = songs[songIndex].artist;
p_songTitle.innerText = songs[songIndex].name;
music.src = songs[songIndex].location;

const handleSwipe = (direction) => {
  if (direction === "right") {
    nextButton(); // Call nextButton on right swipe
  } else if (direction === "left") {
    previousButton(); // Call previousButton on left swipe
  }
};

// Variables to store the start and end positions
let startX = 0;

// Function to handle touch start
currentSong.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX; // Store the starting X position
});

// Function to handle touch end
currentSong.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX; // Get the ending X position

  // Determine the swipe direction
  if (startX - endX > 50) {
    // Swipe left
    console.log("Swiped left");
    handleSwipe("left");
    previousButton();
  } else if (endX - startX > 50) {
    // Swipe right
    console.log("Swiped right");
    handleSwipe("right");
    nextButton();
  }
});

function displaySuggestions(filteredSongs) {
  // Clear the previous suggestions
  suggestionsList.innerHTML = "";

  // If there are no matching songs, show no results
  if (filteredSongs.length === 0 && searchInput.value !== "") {
    suggestionsList.innerHTML = "<li>No songs found</li>";
    return;
  }

  // Loop through filtered songs and display each as a suggestion
  filteredSongs.forEach((song, index) => {
    const suggestionItem = document.createElement("li");
    suggestionItem.className =
      "p-2 rounded-lg text-white custom-cursor-pointer hover:bg-gray-700";
    suggestionItem.textContent = `${song.name} - ${song.artist}`;

    // Add click event to play the song when clicked
    suggestionItem.addEventListener("click", function () {
      playSong(index);
      searchInput.value = ""; // Clear search input
      suggestionsList.innerHTML = ""; // Clear suggestions after selection
    });

    // Append the suggestion item to the suggestions list
    suggestionsList.appendChild(suggestionItem);
  });
}

searchInput.addEventListener("input", function () {
  let searchTerm = searchInput.value;
  const filteredSongs = songs.filter(
    (song) =>
      song.name.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm)
  );
  displaySuggestions(filteredSongs);
});

document
  .getElementById("shuffleButton")
  .addEventListener("click", toggleShuffle);

function toggleShuffle() {
  isShuffle = !isShuffle;
  document
    .getElementById("shuffleButton")
    .classList.toggle("text-yellow-400", isShuffle); // Change text color when active
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
  const songList = document.getElementById("songList");
  songList.innerHTML = songs
    .map(
      (song, index) =>
        `<li class="p-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-[#FFD43B] hover:text-black hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.4)] text-white custom-cursor-pointer hover:font-bold ${
          index === songIndex ? "highlight" : ""
        }" data-index="${index}">
            ${song.name}
        </li>`
    )
    .join("");

  const songItems = songList.querySelectorAll("li");
  songItems.forEach((item) => {
    item.addEventListener("click", function () {
      const songIndex = this.getAttribute("data-index");
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
  //Forwards Songs
  if (music) {
    music.currentTime += seconds;
  }
}
function rewind(seconds) {
  //Rewinds Songs
  if (music) {
    music.currentTime -= seconds;
  }
}

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    skipForward(5);
  }
});
window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    rewind(5);
  }
});
window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp" && volume.value < 100) {
    volume.value++;
    volumeUpdate();
  }
  if (event.key === "ArrowDown" && volume.value > 0) {
    volume.value--;
    volumeUpdate();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();
    audioPlay();
  }
});

function updatePlaybackTime() {
  var currentTime = music.currentTime;
  var minutes = Math.floor(currentTime / 60);
  var seconds = Math.floor(currentTime % 60);
  document.getElementById("completedDuration").textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

window.addEventListener("load", function () {
  updatePlaybackTime();
  music.addEventListener("timeupdate", updatePlaybackTime);
});

window.addEventListener("load", function () {
  var minutes = 0;
  var seconds = 0;

  music.addEventListener("loadedmetadata", function () {
    var duration = music.duration;
    minutes = Math.floor(duration / 60);
    seconds = Math.floor(duration % 60);
    songDuration.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    music.play();
  });
});

document.getElementById("nextButton").addEventListener("click", nextButton);

function nextButton() {
    songIndex = getNextSongIndex();
    musicDisplay();
    playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    music.play();
    // Start transition: fade-out
    currentSong.classList.add("hidden");

    setTimeout(() => {
        // End transition: fade-in
        currentSong.classList.remove("hidden");
    }, 500); // Match the duration of the CSS transition (0.5s)

    
}
function previousButton() {
  songIndex = getPreviousSongIndex();
  musicDisplay();
  playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  music.play();
  currentSong.classList.add("hidden");

  setTimeout(() => {
    // End transition: fade-in
    currentSong.classList.remove("hidden");
  }, 500); // Match the duration of the CSS transition (0.5s)
}
function musicDisplay() {
  music.src = songs[songIndex].location;
  p_songTitle.innerText = songs[songIndex].name;
  p_artistName.innerText = songs[songIndex].artist;
  p_songImage.src = songs[songIndex].songImage;
  coverImage.style.backgroundImage = `url(${songs[songIndex].artistImage})`;
}

function audioPlay() {
  if (!isAudioPlaying) {
    // Audio is currently paused, so play it
    music.play();
    playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    isAudioPlaying = true;
  } else {
    // Audio is playing, so pause it
    music.pause();
    playPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
    isAudioPlaying = false;
  }
}

playPause.addEventListener("click", audioPlay);

function volumeUpdate() {
  volumeValue.innerText = volume.value;
  music.volume = volume.value / 100;
}

function updateCarousel() {
  const itemWidth = carousel.clientWidth;
  carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

updateCarousel();

document
  .getElementById("currentSong")
  .addEventListener("click", toggleMusicPlayer);
slider.addEventListener("input", volumeUpdate);
volume.addEventListener("input", volumeUpdate);
volumeUpdate();

function displayVolumeSlider() {
  let sliderParent = document.getElementById("sliderParent");
  if (isSliderVisible) {
    sliderParent.style.display = "none";
    isSliderVisible = false;
  } else {
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
function loadingBarSmallerDevices() {
  let musicWidth = (music.currentTime / music.duration) * 100;
  progressedBarSmallerDevices.style.width = musicWidth + "%";
  if (musicWidth === 100) {
    nextButton();
    playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  }
}

music.addEventListener("timeupdate", loadingBar);
music.addEventListener("timeupdate", loadingBarSmallerDevices);

function toggleMusicPlayer() {
 
  if (isMusicPlayerVisible) {
    mainContent.innerHTML = `<div
        class="sm:w-[65vw] w-[100vw] sm:h-[90vh] sm:ml-[20vw] p-10 overflow-auto scrollbar-hide">
        <div class="text-white sm:w-[60%] w-[100%] flex gap-5 items-center">
          <div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="    Search..."
              class="w-[90%] rounded-full p-1 text-black"
            />
            <ul id="suggestions"></ul>
          </div>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="mt-10">
          <div class="relative overflow-hidden">
            <div id="carousel" class="flex">
              <!-- Carousel items -->
              <div
                class="carousel-item bg-cover bg-center h-[150px] flex items-center justify-center relative"
                style="
                  background-image: url('https://picsum.photos/800/500?random=1');
                "
              >
                <div
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <p class="text-white text-3xl font-bold">The Weeknd</p>
                </div>
              </div>

              <div
                class="carousel-item bg-cover bg-center h-[150px] flex items-center justify-center relative"
                style="
                  background-image: url('https://picsum.photos/800/500?random=2');
                "
              >
                <div
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <p class="text-white text-3xl font-bold">Coldplay</p>
                </div>
              </div>

              <div
                class="carousel-item bg-cover bg-center h-[150px] flex items-center justify-center relative"
                style="
                  background-image: url('https://picsum.photos/800/500?random=3');
                "
              >
                <div
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <p class="text-white text-3xl font-bold">Taylor Swift</p>
                </div>
              </div>
            </div>

            <!-- Carousel controls -->
            <button
              id="prev"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
            >
              ⮜
            </button>
            <button
              id="next"
              class="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
            >
              ⮞
            </button>
          </div>
        </div>
        <div class="mt-8 text-white">
          <div class="flex justify-between">
            <p class="sm:text-base">Recommended Albums</p>
            <select
              name="Genre"
              id="Genre"
              class="text-black text-sm rounded-xl p-[2px]"
            >
              <option value="pop">EDM</option>
              <option value="pop" selected>POP</option>
              <option value="pop">Country</option>
              <option value="pop">Jazz</option>
            </select>
          </div>
          <div
            class="flex gap-5 mt-5 flex-wrap sm:text-base text-xs sm:justify-normal justify-between"
          >
            <div
              class="bg-[#2E2E2E] sm:h-[150px] sm:w-auto w-[27%] h-fit transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            >
              <img
                src="./images/Harry Styles Vinyl.jpeg"
                alt=""
                class="h-[70%] w-auto"
              />
              <p class="ml-2 mt-2 sm:mt-0">Fine Line</p>
              <p class="text-[10px] ml-2 text-gray-400">Harry Styles</p>
            </div>
            <div
              class="bg-[#2E2E2E] sm:h-[150px] sm:w-auto w-[27%] h-fit transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            >
              <img
                src="./images/Reputation album cover in Color😮😮.jpeg"
                alt=""
                class="h-[70%] w-auto"
              />
              <p class="ml-2 mt-2 sm:mt-0">Reputation</p>
              <p class="text-[10px] ml-2 text-gray-400">Taylor Swift</p>
            </div>
            <div
              class="bg-[#2E2E2E] sm:h-[150px] sm:w-auto w-[27%] h-fit transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            >
              <img
                src="./images/AFTER HOURS - THE WEEKND _ ALBUM COVER.jpeg"
                alt=""
                class="h-[70%] w-auto"
              />
              <p class="ml-2 mt-2 sm:mt-0">After Hours</p>
              <p class="text-[10px] ml-2 text-gray-400">The Weeknd</p>
            </div>
            <div
              class="bg-[#2E2E2E] sm:h-[150px] sm:w-auto w-[27%] h-fit transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            >
              <img
                src="./images/olivia rodrigo.jpeg"
                alt=""
                class="h-[70%] w-auto"
              />
              <p class="ml-2">Sour</p>
              <p class="text-[10px] ml-2 text-gray-400">Olivia Rodrigo</p>
            </div>
            <div
              class="bg-[#2E2E2E] sm:h-[150px] sm:w-auto w-[27%] h-fit transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            >
              <img
                src="./images/One direction Four Album cover b&w.jpeg"
                alt=""
                class="h-[70%] w-auto"
              />
              <p class="ml-2">Four</p>
              <p class="text-[10px] ml-2 text-gray-400">One Direction</p>
            </div>
            <div
              class="bg-[#2E2E2E] sm:h-[150px] sm:w-auto w-[27%] h-fit transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            >
              <img
                src="./images/positions dlx album cover.jpeg"
                alt=""
                class="h-[70%] w-auto"
              />
              <p class="ml-2">Positions</p>
              <p class="text-[10px] ml-2 text-gray-400">Ariana Grande</p>
            </div>
            <div
              class="bg-[#2E2E2E] sm:h-[150px] sm:w-auto w-[27%] h-fit transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            >
              <img
                src="./images/Happier Than Ever.jpeg"
                alt=""
                class="h-[70%] w-auto"
              />
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
          <div class="flex gap-8 mt-5 text-center flex-wrap">
            <div
              class="sm:h-[130px] sm:w-auto h-auto w-[25%] sm:text-base text-xs"
            >
              <img
                src="./images/taylor swift.jpeg"
                alt=""
                class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
              />

              <p class="mt-2">Taylor Swift</p>
            </div>
            <div
              class="sm:h-[130px] sm:w-auto h-auto w-[25%] sm:text-base text-xs"
            >
              <img
                src="./images/Future.jpeg"
                alt=""
                class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
              />

              <p class="mt-2">Future</p>
            </div>
            <div
              class="sm:h-[130px] sm:w-auto h-auto w-[25%] sm:text-base text-xs"
            >
              <img
                src="./images/SZA.jpeg"
                alt=""
                class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
              />

              <p class="mt-2">SZA</p>
            </div>
            <div
              class="sm:h-[130px] sm:w-auto h-auto w-[25%] sm:text-base text-xs"
            >
              <img
                src="./images/eminem.jpeg"
                alt=""
                class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
              />

              <p class="mt-2">Eminem</p>
            </div>
            <div class="sm:h-[130px] sm:w-auto h-auto w-[25%] sm:text-base
            text-xs"">
            <img
              src="./images/justin bieber.jpeg"
              alt=""
              class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            />

            <p class="mt-2">Justin Bieber</p>
          </div>
          <div
            class="sm:h-[130px] sm:w-auto h-auto w-[25%] sm:text-base text-xs"
          >
            <img
              src="./images/shawn mendes.jpeg"
              alt=""
              class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            />

            <p class="mt-2">Shawn Mendes</p>
          </div>
          <div
            class="sm:h-[130px] sm:w-auto h-auto w-[25%] sm:text-base text-xs"
          >
            <img
              src="./images/charlie puth.jpeg"
              alt=""
              class="h-[70%] w-auto rounded-full transition-transform duration-50 ease-in-out transform hover:scale-125 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.7)] custom-cursor-pointer"
            />

            <p class="mt-2">Charlie Puth</p>
          </div>
        </div>
      </div>`;
    isMusicPlayerVisible = false;
  } else {
    mainContent.innerHTML = `
    <div class=" sm:w-[65vw] h-[90vh] w-[100vw] sm:ml-[20vw] p-10 overflow-auto scrollbar-hide">
       <div class=" sm:h-full sm:w-full relative w-full  p-10" id="artistImage" style="background: url('${songs[songIndex].artistImage}'); background-repeat: no-repeat; background-size: cover; background-position: center;">
                <div class="absolute inset-0 sm:h-full sm:w-full bg-white opacity-40 z-10"></div>
                <div class="bg-black bg-opacity-50 border-black border-[3px] sm:h-full sm:w-full flex justify-around sm:p-10 p-5 z-20 relative rounded-3xl w-full">
                    <div class=" sm:h-full bg-white text-center rounded-xl w-full sm:w-auto">
                        <img src="${p_songImage.src}" alt="" class="h-[70%] w-full">
                        <div class="p-2">
                        <p class="sm:text-5xl text-sm" >${p_songTitle.innerText}</p>
                        <p class="sm:text-2xl sm:mt-4 text-xs mt-0" >${p_artistName.innerText}</p>
                        </div>
                    </div>
                    <div class="bg-[#2e2d2d] border-white border-2 w-[40%] text-white p-3 overflow-auto scrollbar-hide rounded-xl sm:block  hidden">
                        <p class="text-4xl">Lyrics</p>
                        <p class="mt-4 overflow-auto  h-[85%] w-full scrollbar-hide" >${songs[songIndex].lyrics}</p>
                    </div>
                </div>
            </div>
          <div class="bg-[#2e2d2d] w-[100%] mt-5 h-[60vh] text-white p-3 overflow-auto scrollbar-hide rounded-xl sm:hidden ">
                    <p class="text-4xl">Lyrics</p>
                    <p class="mt-4 overflow-auto  h-[85%] w-full scrollbar-hide" >${songs[songIndex].lyrics}</p>
                </div> 
    </div>
    `;
    isMusicPlayerVisible = true;
  }
}
