document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".clients__video");

  videoContainers.forEach((videoContainer) => {
    const video = videoContainer.querySelector(".video");

    video.controls = false; // Приховати панель контролю відео

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });

    video.addEventListener("ended", () => {
      // Відобразити кнопку play при завершенні відтворення
      videoContainer.querySelector(".clients__play").style.display = "block";
    });

    video.addEventListener("play", () => {
      videoContainer.querySelector(".clients__play").style.display = "none";
    });

    video.addEventListener("pause", () => {
      if (!video.ended) {
        videoContainer.querySelector(".clients__play").style.display = "block";
      }
    });
  });
});
