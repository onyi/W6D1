Function.prototype.inherits = function(Parent) {
  function Surrogate() {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}
function MovingObject(name) {
  this.name = name;

  this.move = function(x, y) {
    console.log(`move to: ${x} , ${y}.`);
  };
}

function Ship(name, fuel) {
  MovingObject.call(this, name);
  this.fuel = fuel;

  this.fly = function() {
    console.log(`goes whoooosh!`);
  };
 }
Ship.inherits(MovingObject);

function Asteroid(name) { 
  MovingObject.call(this, name);

  this.move = function(x, y) {
    console.log("you cannot control an asteroid!!!")
  };
}
Asteroid.inherits(MovingObject);


const plane = new MovingObject('harry');
console.log(plane.name);

const spaceship = new Ship("milenium falcon", "liquid nitrogen");

const rock = new Asteroid("Granite");
console.log(spaceship.name);
console.log(spaceship.fuel);
spaceship.move(2, 5);
spaceship.fly();
plane.move(3, 6);
rock.move(5,9);
console.log(rock.name);



