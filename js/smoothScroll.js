const navbarLinks = document.querySelectorAll(".scroll");
const list = document.querySelector("#link-list");

function scroll(links) {
  for (let i = 0; i < links.children.length; i++) {
    list.children[i].firstChild.addEventListener("click", (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute("href");
      console.log(id);
      smoothScroll(id);
    });
  }
}

function smoothScroll(id) {
  const section = document.querySelector(id);
  section.scrollIntoView({
    behavior: "smooth",
  });
}

scroll(list);
