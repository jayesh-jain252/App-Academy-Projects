// Your code here

window.addEventListener("DOMContentLoaded", (event) => {
  //   window.alert("DOM Loaded");
  const input_el = document.getElementById("red-input");
  const submit_button = document.getElementById("add-item");
  const ul = document.getElementById("list");
  const color_select = document.getElementById("color-select");
  const section_to_change = document.getElementById("section-3");
  const removeListener = document.getElementById("remove-listeners");
  const hoveredDiv = document.getElementById("hover_div");

  function toRed(event) {
    if (event.target.value === "red") {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }

  function addItem() {
    let li_item = document.createElement("li");

    let list_input = document.getElementById("list-add").value;
    li_item.innerText = list_input;

    ul.appendChild(li_item);
  }

  function changeBackground() {
    section_to_change.style.backgroundColor = color_select.value;
  }

  function removeAllListener() {
    input_el.removeEventListener("input", toRed);

    submit_button.removeEventListener("click", addItem);

    color_select.removeEventListener("input", changeBackground);
  }

  function hoverTextOnEnter() {
    hoveredDiv.innerText = "This is hovered";
    hoveredDiv.style.backgroundColor = "violet";
  }

  function hoverTextOnLeave() {
    hoveredDiv.innerText = "";
    hoveredDiv.style.backgroundColor = "black";
  }

  input_el.addEventListener("input", toRed);

  submit_button.addEventListener("click", addItem);

  color_select.addEventListener("input", changeBackground);

  removeListener.addEventListener("click", removeAllListener);

  hoveredDiv.addEventListener("mouseenter", hoverTextOnEnter);

  hoveredDiv.addEventListener("mouseleave", hoverTextOnLeave);
});
