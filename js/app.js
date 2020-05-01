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
  const idSection = title.textContent.replace(/ /g, '-')
  newSection.setAttribute("id",idSection);
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

function form() {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    if (title != "" && content != "" && !checkExisting(title)) {
      const newTitle = createTitle(title);
      const newContent = createContent(content);
      createSection(newTitle, newContent);
      navTitle = newTitle.textContent;
      updateNavbar(navTitle);
    } else {
      const form = document.querySelector("#form");
      const newP = document.createElement("p");
      newP.classList.add("white", "size-2");
      //add content text
      newP.textContent = "there is already a section with this name!";
      form.appendChild(newP);
    }
  });
}

function updateNavbar(link) {
  text = link.textContent;
  let present = false;
  const navItems = document.querySelectorAll(".navbar-item");
  for (let i = 0; i < navItems.length; ++i) {
    if (link === navItems[i]) {
      present = true;
    }
  }
  if (present) {
    console.log("there is already a section with this name!");
  } else {
    const newNavItem = document.createElement("li");
    newNavItem.textContent = link;
    newNavItem.classList.add("navbar-item");
    linkList.appendChild(newNavItem);
  }
}

function navbar() {
  const sections = document.querySelectorAll("section");
  for (let i = 0; i < sections.length; ++i) {
    const textItem = sections[i].firstElementChild.textContent;
    const newNavItem = document.createElement("li");
    newNavItem.textContent = textItem;
    newNavItem.classList.add("navbar-item");
    linkList.appendChild(newNavItem);
  }
}

navbar();
form();
