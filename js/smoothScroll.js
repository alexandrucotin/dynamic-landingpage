const navbarLinks = document.querySelectorAll(".scroll");
const list = document.querySelector("#link-list");
const burgerMenu = document.getElementById("burger-menu")

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

burgerMenu.addEventListener("click", (event) => {
  myFunction();
})


function myFunction() {
  const linkList = document.getElementById("link-list");
  if (linkList.style.display === "block") {
    linkList.style.display = "none";
  } else {
    linkList.style.display = "block";
  }
}

scroll(list);
