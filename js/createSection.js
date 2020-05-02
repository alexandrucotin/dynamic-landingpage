const submitButton = document.getElementById("submit");
const linkList = document.getElementById("link-list");

function createTitle(title) {
  //create h1 tag
  const newTitle = document.createElement("h1");
  //add classes to h1
  newTitle.classList.add("title", "white", "size-5");
  //add title text
  newTitle.textContent = title;
  return newTitle;
}

function createContent(content) {
  //create p tag
  const newContent = document.createElement("p");
  //add classes to h1
  newContent.classList.add("content", "white", "size-2");
  //add content text
  newContent.textContent = content;
  return newContent;
}

function createSection(title, content) {
  //create section tag
  const newSection = document.createElement("section");
  newSection.classList.add("section", "dynamic");
  const idSection = title.textContent.replace(/ /g, "-");
  newSection.setAttribute("id", idSection);
  //get last section
  const pageContent = document.querySelector(".page-container");
  //appen title and content to new section
  newSection.appendChild(title);
  newSection.appendChild(content);
  //appen section to page
  pageContent.appendChild(newSection);
}

function checkExisting(title) {
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
  const form = document.querySelector("#form");
  const newP = document.createElement("p");
  newP.classList.add("white", "size-2");
  //add content text
  newP.textContent = "there is already a section with this name!";
  form.appendChild(newP);
  setTimeout(function() {;
    // 1s - time of the animation duration
    // set transition property for webkit browsers only
    newP.style.WebkitTransition = 'opacity 1s ease-in-out;'
    newP.style.opacity = '0';
    form.removeChild(newP);
  }, 1250);
}

function form() {
  updated = false;
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    if (title != "" && content != "" && !checkExisting(title)) {
      const navLinks = document.querySelectorAll(".scroll");
      const newTitle = createTitle(title);
      const newContent = createContent(content);
      createSection(newTitle, newContent);
      navTitle = newTitle.textContent;
      updateNavbar(navTitle);
    }else{
      formError();
    }
  });
}

function updateNavbar(item) {
  const newNavLink = document.createElement("a");
  const newNavItem = document.createElement("li");
  //inserting the title of the section inside the <a> tag
  newNavLink.textContent = item;
  newNavLink.setAttribute("href", `#${item.toLowerCase().replace(/ /g, "-")}`);

  // adding class to the <li> tag
  newNavItem.classList.add("navbar-item");

  //append items to page
  newNavItem.appendChild(newNavLink);
  linkList.appendChild(newNavItem);
}

function navbar() {
  //get all static sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const title = section.firstElementChild.textContent;
    //creating <a> and <li> items
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
