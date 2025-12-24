var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

  // Select all images in .image-container
  const images = document.querySelectorAll('.image-container img');

  // Function to check if image is in viewport
  function checkImages() {
    const triggerBottom = window.innerHeight * 0.9; // trigger slightly before fully visible

    images.forEach(img => {
      const imgTop = img.getBoundingClientRect().top;

      if (imgTop < triggerBottom) {
        img.classList.add('fade-in');
      }
    });
  }

  // Run on scroll and on page load
  window.addEventListener('scroll', checkImages);
  window.addEventListener('load', checkImages);


