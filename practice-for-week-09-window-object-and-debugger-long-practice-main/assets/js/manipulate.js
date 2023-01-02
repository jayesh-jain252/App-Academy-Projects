export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  // Your code here
  window.document.title = "Jayesh's Portfolio";
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  // Your code here
  let div = document.body.children[0];
  let h1 = div.children[0];
  h1.innerText = "I am Jayesh Jain";
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  // Your code here
  let div = document.body.children[1];
  let p = div.children[1];
  p.innerText =
    "I am Jayesh Jain, learning Software development form app academy online open curriculum.";
}
