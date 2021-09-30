const box = document.querySelector(".box");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const myCanvas = document.querySelector("#mycanvas");

// let x1 = parseFloat(
//   window.getComputedStyle(box1, null).getPropertyValue("left")
// );
// let x2 = parseFloat(
//   window.getComputedStyle(box2, null).getPropertyValue("left")
// );

// console.log(x1);
// console.log(x2);

function drawLine() {
  let x1 = parseFloat(
    window.getComputedStyle(box1, null).getPropertyValue("left")
  );
  let x2 = parseFloat(
    window.getComputedStyle(box2, null).getPropertyValue("left")
  );
  let y1 = parseFloat(
    window.getComputedStyle(box1, null).getPropertyValue("top")
  );
  let y2 = parseFloat(
    window.getComputedStyle(box2, null).getPropertyValue("top")
  );
  console.log(x1);
  console.log(y1);
  let ctx = myCanvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 1300, 500);
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height - 30);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.quadraticCurveTo(600, 600, x2, y2);
  ctx.strokeStyle = "blue";
  ctx.stroke();
}
// drawLine();

function trace() {
  drawLine();
  setTimeout(() => {
    trace();
  }, 1000);
}

window.onload = function () {
  trace();
};
