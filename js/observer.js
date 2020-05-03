// The code was taken  from the MDN web docs
// Link: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

const config = { childList: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A section was added!");
      //if a section was added this list2 is the updated list of <li> items
      let list2 = document.querySelector("#link-list");
      scroll(list2);
      wheel(list2);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(list, config);
