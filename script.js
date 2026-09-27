// Layouts work in CSS. JavaScript only opens the optional photo viewer.
const photoDialog = document.querySelector(".photo-dialog");

if (photoDialog) {
  const image = photoDialog.querySelector(".dialog-image");
  const title = photoDialog.querySelector("#photo-title");
  const caption = photoDialog.querySelector("#photo-caption");

  document.querySelectorAll("[data-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      image.src = button.dataset.photo;
      image.alt = button.querySelector("img")?.alt || button.dataset.title;
      title.textContent = button.dataset.title;
      caption.textContent = button.dataset.caption;
      photoDialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });

  photoDialog.querySelector(".dialog-close").addEventListener("click", () => {
    photoDialog.close();
  });

  // Clicking the backdrop closes the viewer; clicking its content does not.
  photoDialog.addEventListener("click", (event) => {
    const bounds = photoDialog.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (event.target === photoDialog && outside) photoDialog.close();
  });

  photoDialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });
}
