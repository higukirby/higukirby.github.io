// Simple Lightbox
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  lightbox.appendChild(img);

  images.forEach(image => {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");
      img.src = image.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
});
