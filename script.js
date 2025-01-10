// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Genre button functionality
    const genreButtons = document.querySelectorAll('.genre-btn');

    genreButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`You selected the genre: ${this.textContent}`);
        });
    });

    // Spotify-like player functionality
    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("playPause");
    const progressBar = document.getElementById("progress");

    playPauseButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Update to pause icon
        } else {
            audio.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Update to play icon
        }
    });

    audio.addEventListener("timeupdate", () => {
        const progressWidth = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressWidth}%`;
    });
});
