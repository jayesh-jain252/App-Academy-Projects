/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    let breed = url.split("breeds/")[1].split("/")[0];
    // console.log(breed);

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    let ul = document.querySelector("ul");
    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
    let newEle = document.createElement("li");
    newEle.innerHTML = `<figure>
        <img src=${url} />
        <figcaption>${breed}</figcaption>
      </figure>`;
    ul.appendChild(newEle);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  let firstli = document.querySelectorAll("li")[0];
  firstli.remove();

  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  let li = document.querySelectorAll("li");
  let lastli = document.querySelectorAll("li")[li.length - 1];
  lastli.remove();
});
