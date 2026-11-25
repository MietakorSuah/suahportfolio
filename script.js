// WhatsApp requires the international number without a leading plus sign.
var WHATSAPP_NUMBER = "231774997717";

function waUrl(text) {
  return "https://wa.me/" + WHATSAPP_NUMBER + (text ? "?text=" + encodeURIComponent(text) : "");
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".portfolio-image, .portrait-image").forEach(function (image) {
  function showImage() {
    var isPortrait = image.classList.contains("portrait-image");
    var frame = image.closest(isPortrait ? ".portrait-frame" : ".cover");
    frame.style.aspectRatio = image.naturalWidth + " / " + image.naturalHeight;
    frame.classList.add(isPortrait ? "has-portrait" : "has-image");
  }
  image.addEventListener("load", showImage);
  if (image.complete) {
    if (image.naturalWidth) showImage();
  }
});

var filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (item) {
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
    document.querySelectorAll(".work").forEach(function (project) {
      project.hidden = !(button.dataset.f === "all" || project.dataset.cat === button.dataset.f);
    });
  });
});

document.querySelectorAll(".wa-link").forEach(function (link) {
  link.href = waUrl("Hi Mietakor, I saw your portfolio and I’d like to talk about a project.");
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
