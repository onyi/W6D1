const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }
);

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  let canvas = document.getElementById("game-canvas").getContext("2d");
  // const obj = new MovingObject({pos: [150,150], vel: [1,1], color: "red", radius: 5});

  obj.draw(canvas);
});