const audio = document.getElementById("background-audio");
        const button = document.getElementById("play-button");
        button.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                button.textContent = "Pause";
            } else {
                audio.pause();
                button.textContent = "Play";
            }
        });