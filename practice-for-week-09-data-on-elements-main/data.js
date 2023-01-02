// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("add");
  const ul = document.getElementById("shopping-list");
  const input = document.getElementById("name");
  const select = document.getElementById("type");

  button.addEventListener("click", (event) => {
    let text = input.value;
    let li_el = document.createElement("li");
    li_el.setAttribute("data-type", select.value);
    li_el.innerText = text;
    // console.log(li_el.dataset.type);
    ul.appendChild(li_el);
    input.value = "";
    event.preventDefault();
  });
});
