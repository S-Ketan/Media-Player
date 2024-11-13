# Media Player

This is a simple media player web application that allows users to play, shuffle, and search for songs. The application is built using HTML, CSS, and JavaScript.

## Features

- Play and pause songs
- Shuffle mode
- Search for songs by name or artist
- Display song suggestions
- Skip forward and rewind
- Volume control
- Carousel for artist images

## Project Structure

```
images/
    Artist Images/
    Song Images/
index.html
Music/
package.json
Songs/
src/
    input.css
    output.css
    script.js
tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/media-player.git
    cd media-player
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Build the CSS using Tailwind:
    ```sh
    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
    ```

### Running the Application

Open `index.html` in your web browser to run the application.

## Usage

- Use the search bar to find songs by name or artist.
- Click on the shuffle button to toggle shuffle mode.
- Use the play/pause button to control playback.
- Use the next and previous buttons to skip songs.
- Adjust the volume using the volume slider.
- Click on the carousel items to view artist images.

## Code Overview

### HTML

The main HTML file is `index.html`, which includes the structure of the media player and links to the CSS and JavaScript files.

### CSS

The CSS is built using Tailwind CSS. The input CSS file is `input.css`, and the output CSS file is `output.css`.

### JavaScript

The main JavaScript file is `script.js`, which includes the functionality for playing songs, shuffling, searching, and updating the UI.

#### Key functions in `script.js`:

- `toggleShuffle()`: Toggles shuffle mode.
- `getNextSongIndex()`: Gets the next song index based on shuffle mode.
- `getPreviousSongIndex()`: Gets the previous song index based on shuffle mode.
- `displaySuggestions(filteredSongs)`: Displays song suggestions based on the search term.
- `playSong(index)`: Plays the selected song.
- `skipForward(seconds)`: Skips forward by a specified number of seconds.
- `rewind(seconds)`: Rewinds by a specified number of seconds.
- `volumeUpdate()`: Updates the volume based on the slider value.
- `updateCarousel()`: Updates the carousel for artist images.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- Tailwind CSS
- Font Awesome
