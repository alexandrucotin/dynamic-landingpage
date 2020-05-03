const navbarLinks = document.querySelectorAll(".scroll");
const list = document.querySelector("#link-list");
const burgerMenu = document.getElementById("burger-menu");
const arrow = document.getElementById("to-top");
//index is used to check what section are you viewing currently: 0 = welcome section 1=about this landingpage section
let index = 0;

function wheel(myList) {
  //smooth scrolling for the wheel event
  const length = myList.children.length;
  window.addEventListener("wheel", (e) => {
    //delta is the direction of the scroll
    //if delta>0 you scroll up
    //if delta<0 you scroll down
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

//Smooth scrolling for the navbar clicks
function smoothScroll(id) {
  //this function recieves an id for the section you want to scroll to
  const section = document.querySelector(id);
  section.scrollIntoView({
    behavior: "smooth",
  });
}

function scroll(links) {
  //this function recieves the list of the <li> that are inside the <ul> tag
  for (let i = 0; i < links.children.length; i++) {
    list.children[i].firstChild.addEventListener("click", (event) => {
      //here the function gets the value inside the href (which is also the section id) and it will be passed to the smoothscroll section.
      event.preventDefault();
      const id = event.currentTarget.getAttribute("href");
      smoothScroll(id);
    });
  }
}

//this function checks when to show the arrow button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 639) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
    arrow.classList.toggle("fade");
  }
}

//when the user clicks on the arrow button, it scrolls to the top of the page
arrow.addEventListener("click", (event) => {
  event.preventDefault();
  //using the smothscroll function with the id of the first section.
  smoothScroll("#welcome");
  index = 0;
});

function burger() {
  const linkList = document.getElementById("link-list");
  if (linkList.style.display === "flex") {
    linkList.style.display = "none";
  } else {
    linkList.style.display = "flex";
  }
}

//condition to show the burgermenu
if (window.screen.width < 599) {
  burgerMenu.addEventListener("click", (event) => {
    burger();
  });
}

wheel(list);
scroll(list);
