document.addEventListener("DOMContentLoaded", () => {
  const errorElements = document.querySelectorAll(".error");

  errorElements.forEach((error) => {
    error.addEventListener("click", (e) => {
      e.stopPropagation();

      error.classList.toggle("active");

      errorElements.forEach((otherError) => {
        if (otherError !== error) {
          otherError.classList.remove("active");
        }
      });
    });
  });

  document.addEventListener("click", () => {
    errorElements.forEach((error) => {
      error.classList.remove("active");
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const clickableImages = document.querySelectorAll('.clickable-image');
  const body = document.body;
  let expandedImage = null;

  clickableImages.forEach(image => {
    image.addEventListener('click', (event) => {
      if (image.classList.contains('expanded')) {
        image.classList.remove('expanded');
        body.classList.remove('image-expanded');
        expandedImage = null;
      } 
      else if (expandedImage) {
        expandedImage.classList.remove('expanded');
        image.classList.add('expanded');
        expandedImage = image;
      } 
      else {
        image.classList.add('expanded');
        body.classList.add('image-expanded');
        expandedImage = image;
      }
    });
  });

  body.addEventListener('click', (event) => {
    if (expandedImage && event.target !== expandedImage) {
      expandedImage.classList.remove('expanded');
      body.classList.remove('image-expanded');
      expandedImage = null;
    }
  });
});
