function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
array = ["red", "yellow", "blue", "green"];
let head = document.getElementById("heading");
var time = 0;
var score = 0;
function randamize() {
  textcolor = getRandomElement(array);
  head.style.color = textcolor;
  head.innerText = getRandomElement(array);
  performance.mark("startTime");
}
randamize();
function button(color) {
  if (array[color] === textcolor) {
    performance.mark("endTime");

    const measures = performance.measure("duration", "startTime", "endTime");
    time = time + measures.duration;
    randamize();

    score++;
  } else {
    score++;
    alert(
      `you  lost your score is ${score}per click  time is ${
        time / 1000 / score
      }`
    );
    console.log(score, time);
  }
}
