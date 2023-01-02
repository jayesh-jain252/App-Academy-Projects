let newHeading = document.createElement("h1");
newHeading.setAttribute("class", "name");
newHeading.innerText = "Jayesh Jain";

document.body.appendChild(newHeading);

let li_text = [
  "Learning Full stack Development",
  "Learning Python",
  "basic Knowledge of data Structures and algorithms",
  "knows Javascript",
];

let ul = document.createElement("ul");
ul.setAttribute("class", "my-details");

for (let i = 0; i < li_text.length; i++) {
  let text = li_text[i];
  let newli = document.createElement("li");
  newli.setAttribute("class", "detail");
  newli.innerText = text;
  ul.appendChild(newli);
}

document.body.appendChild(ul);

let clock = document.createElement("div");
clock.setAttribute("id", "clock");

document.body.appendChild(clock);

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerHTML = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
window.onload = currentTime;
