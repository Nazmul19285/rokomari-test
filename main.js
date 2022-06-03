const video = document.querySelector('.video');
const backgroundVideo = video.querySelector('#background-video')
const playButton = video.querySelector('.play-button');

playButton.addEventListener('click', (e) => {
    if (backgroundVideo.paused) {
        backgroundVideo.play();
    }
    else {
        backgroundVideo.pause();
    }
})
