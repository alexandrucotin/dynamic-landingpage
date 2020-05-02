const navbarLinks = document.querySelectorAll(".scroll");

navbarLinks.forEach((element) =>
  element.addEventListener("click", navbarClick)
);

function navbarClick(event) {
  smoothScroll(event);
}
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  targetId.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
