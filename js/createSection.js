const submitButton = document.getElementById("submit");
const linkList = document.getElementById("link-list");

function createTitle(title) {
  //this function creates a new h1 element with some classes
  const newTitle = document.createElement("h1");
  newTitle.classList.add("title", "white", "size-5");
  newTitle.textContent = title;
  return newTitle;
}

function createContent(content) {
  //this function creates a new p element with some classes
  const newContent = document.createElement("p");
  newContent.classList.add("content", "white", "size-2");
  newContent.textContent = content;
  return newContent;
}

function createSection(title, content) {
  //this function creates a new section element with some classes and a new ID
  const newSection = document.createElement("section");
  newSection.classList.add("section", "dynamic");
  //replacing the " " with the "-"
  const idSection = title.textContent.replace(/ /g, "-");
  newSection.setAttribute("id", idSection);
  const pageContent = document.querySelector(".page-container");
  newSection.appendChild(title);
  newSection.appendChild(content);
  pageContent.appendChild(newSection);
}

function checkExisting(title) {
  //this function checks if there is another section with the same title
  //returns a boolean variable
  const sections = document.querySelectorAll("section");
  let exists = false;
  for (let i = 0; i < sections.length; ++i) {
    const textItem = sections[i].firstElementChild.textContent;
    if (title === textItem) {
      exists = true;
    }
  }
  return exists;
}

function formError() {
  //this function gives a warning
  const form = document.querySelector("#form");
  const newP = document.createElement("p");
  newP.classList.add("white", "size-2");
  newP.textContent = "The fields are empty or there is already a section with this name!";
  form.appendChild(newP);
  setTimeout(function () {
    // Make the warning fade after 1 sec.
    newP.style.WebkitTransition = "opacity 1s ease-in-out;";
    newP.style.opacity = "0";
    form.removeChild(newP);
  }, 1250);
}

function form() {
  // this function uses the value that you put into the form to create a new section.
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    //get the values from the form
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    // checks if the values are not empty and if there is already a section with this title
    if (title != "" && content != "" && !checkExisting(title)) {
      const newTitle = createTitle(title);
      const newContent = createContent(content);
      createSection(newTitle, newContent);
      navTitle = newTitle.textContent;
      updateNavbar(navTitle);
    } else {
      formError();
    }
  });
}

function updateNavbar(item) {
  // As you create a new section this function will update the list of the navbar items
  const newNavLink = document.createElement("a");
  const newNavItem = document.createElement("li");
  newNavLink.textContent = item;
  newNavLink.setAttribute("href", `#${item.toLowerCase().replace(/ /g, "-")}`);
  newNavItem.classList.add("navbar-item");
  newNavItem.appendChild(newNavLink);
  linkList.appendChild(newNavItem);
}

function navbar() {
  //this function will create the navbar-items for the sections that are already present when the page is loaded.
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const title = section.firstElementChild.textContent;
    const newNavLink = document.createElement("a");
    const newNavItem = document.createElement("li");
    newNavLink.classList.add("scroll");

    //inserting the title of the section inside the <a> tag
    newNavLink.textContent = title;
    newNavLink.setAttribute(
      "href",
      `#${title.toLowerCase().replace(/ /g, "-")}`
    );

    // adding class to the <li> tag
    newNavItem.classList.add("navbar-item");

    //append items to page
    newNavItem.appendChild(newNavLink);
    linkList.appendChild(newNavItem);
  });
}

navbar();
form();
