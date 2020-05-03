const navbarLinks = document.querySelectorAll(".scroll");
const list = document.querySelector("#link-list");
const burgerMenu = document.getElementById("burger-menu");
const arrow = document.getElementById("to-top");
let index = 0;

function wheel(myList) {
  const length = myList.children.length;
  window.addEventListener("wheel", (e) => {
    console.log(e);
    const delta = e.wheelDelta;
    if (delta < 0 && index <= length) {
      index++;
      for (let i = 0; i < myList.children.length; i++) {
        const elementList = myList.children[i].firstChild;
        if (i === index) {
          const id = elementList.getAttribute("href");
          smoothScroll(id);
        }
      }
    } else {
      index--;
      for (let i = 0; i < myList.children.length; i++) {
        const elementList = myList.children[i].firstChild;
        if (i === index) {
          const id = elementList.getAttribute("href");
          smoothScroll(id);
        }
      }
    }
  });
}

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
  console.log(id);
  const section = document.querySelector(id);
  section.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 639
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
    arrow.classList.toggle("fade");
  }
}

// When the user clicks on the button, scroll to the top of the document
arrow.addEventListener("click", (event) => {
  event.preventDefault();
  smoothScroll("#welcome");
  index=0;
});

// burger menu
if (window.screen.width < 599) {
  burgerMenu.addEventListener("click", (event) => {
    burger();
  });
}
function burger() {
  const linkList = document.getElementById("link-list");
  if (linkList.style.display === "flex") {
    linkList.style.display = "none";
  } else {
    linkList.style.display = "flex";
  }
}

wheel(list);
scroll(list);
window.onscroll = function () {
  scrollFunction();
};
