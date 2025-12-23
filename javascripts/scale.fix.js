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

const scrollTexts = document.querySelectorAll('.scroll-text');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.1 }); // trigger when 10% visible

scrollTexts.forEach(text => observer.observe(text));


const videos = document.querySelectorAll('.scroll-video');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // optional: autoplay video when visible
      if (entry.target.tagName === 'VIDEO') {
        entry.target.play();
      }

      observer.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.3 }); // trigger when 30% visible

videos.forEach(video => observer.observe(video));

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        // Ignore new tabs or modified clicks
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        e.preventDefault();
        const url = this.href;

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = url;
        }, 600); // must match CSS transition time
      });
    });
  });
</script>


