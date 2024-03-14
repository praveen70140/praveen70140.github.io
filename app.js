function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

array = ["red", "yellow", "blue", "green"];
let head = document.getElementById("heading");
var time = 0;
var score = 0;
function randamizefirst() {
  textcolor = getRandomElement(array);
  head.style.color = textcolor;
  head.innerText = getRandomElement(array);
  const game = document.getElementById("game");
  game.style.display = "block";
  const playbuton = document.getElementById("playbuton");
  playbuton.style.display = "none";

  performance.mark("startTime");
}
function randamize() {
  textcolor = getRandomElement(array);
  head.style.color = textcolor;
  head.innerText = getRandomElement(array);

  performance.mark("startTime");
}

function button(color) {
  if (array[color] === textcolor) {
    performance.mark("endTime");

    const measures = performance.measure("duration", "startTime", "endTime");
    time = time + measures.duration;
    randamize();

    score++;
  } else {
    performance.mark("endTime");
    const measures = performance.measure("duration", "startTime", "endTime");
    time = time + measures.duration;
    score++;
    AddScoreToCookies(score, time / 1000 / score);
    alert(
      `you  lost your score is ${score}per click  time is ${
        time / 1000 / score
      }`
    );
    score = 0;
    time = 0;
    console.log(score, time);
    table(document.cookie);
  }
}

// add  scores to cookies
function AddScoreToCookies(score, duration) {
  document.cookie = `dash=${document.cookie.slice(5)}k${score}%${duration}`;
}
function table(cookie) {
  array = cookie.split("k");
  array.shift();
  i = 1;
  str = "";
  for (const element of array) {
    arr = element.split("%");
    str =
      str + `<tr>  <td>game${i}</td><td>${arr[0]}</td><td>${arr[1]}</td> </tr>`;
    i++;
  }
  const table = document.getElementById("table");
  table.innerHTML =
    "<th>game number</th><th>score</th><th>score per second</th>" + str;
  table.style.display = "block";
  const playbuton = document.getElementById("playbuton");
  playbuton.style.display = "none";
  const game = document.getElementById("game");
  game.style.display = "none";
}
