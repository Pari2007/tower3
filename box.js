class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image1 = loadImage("alien3.jpg");
    this.visibility = 255;
    World.add(world, this.body);
    console.log(this.body.speed);
  }
  display() {
    if (this.body.speed < 6) {
      image(this.image1, this.body.position.x, this.body.position.y, 40, 40);
    } else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      image(this.image1, this.body.position.x, this.body.position.y, 40, 40);
      pop();
    }
  }
  score() {
    if (this.visibility < 0 && this.visibility > -105) {
      score++;
    }
  }
}
