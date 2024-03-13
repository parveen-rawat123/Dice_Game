let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let one = document.querySelector(".first");
  let two = document.querySelector(".second");
  let three = document.querySelector(".thired");
  let four = document.querySelector(".fourth");
  let five = document.querySelector(".fivth");
  let six = document.querySelector(".sixth");
  let seven = document.querySelector(".seventh");

  one.style.backgroundColor = "white";
  two.style.backgroundColor = "white";
  three.style.backgroundColor = "white";
  four.style.backgroundColor = "white";
  five.style.backgroundColor = "white";
  six.style.backgroundColor = "white";
  seven.style.backgroundColor = "white";

  let rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
  if (rand == 1) {
    one.style.backgroundColor = "red";
    two.style.backgroundColor = "red";
    three.style.backgroundColor = "red";
    five.style.backgroundColor = "red";
    six.style.backgroundColor = "red";
    seven.style.backgroundColor = "red";
  } else if (rand == 2) {
    two.style.backgroundColor = "red";
    three.style.backgroundColor = "red";
    four.style.backgroundColor = "red";
    five.style.backgroundColor = "red";
    six.style.backgroundColor = "red";
  } else if (rand == 3) {
    two.style.backgroundColor = "red";
    three.style.backgroundColor = "red";
    five.style.backgroundColor = "red";
    six.style.backgroundColor = "red";
  } else if (rand == 4) {
    two.style.backgroundColor = "red";
    four.style.backgroundColor = "red";
    six.style.backgroundColor = "red";
  } else if (rand == 5) {
    two.style.backgroundColor = "red";
    six.style.backgroundColor = "red";
  } else if (rand == 6) {
    four.style.backgroundColor = "red";
  }
});
