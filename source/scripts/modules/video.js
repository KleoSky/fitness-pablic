const playerButton = document.querySelector('.about__play-button');
const iframeContainer = document.querySelector('.about__iframe-container');
const previewPicture = document.querySelector('.about__video');
const videoSrc = 'http://www.youtube.com/embed/9TZXsZItgdw?si=-0rn2RyAriNlx1fp?autoplay=1';


const initVideo = () => {
  const renderIframe = () => {
    const iframe = document.createElement('iframe');
    iframe.src = videoSrc;
    iframe.width = '320px';
    iframe.height = '230px';
    iframe.allowFullscreen = true;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'origin-when-cross-origin';
    iframeContainer.appendChild(iframe);
  };

  playerButton.addEventListener('click', () => {
    previewPicture.style.display = 'none';
    playerButton.style.display = 'none';
    renderIframe();
  });
};

export {initVideo};
