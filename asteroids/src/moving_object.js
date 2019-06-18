function MovingObject(args) {
  this.pos = args.pos;
  this.vel = args.vel;
  this.radius = args.radius;
  this.color = args.color;
}

MovingObject.prototype.draw = function(ctx) {
  // let targetCircleArea = (maxX * maxY);
  // let targetRadius = Math.sqrt(targetCircleArea / Math.PI);
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
  // return 2 * targetRadius;
};



// MovingObject.prototype.move = function(ctx) {

// }

module.export = MovingObject;