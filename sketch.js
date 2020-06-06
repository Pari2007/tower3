const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, box1, box2, box3, box4, box5;
var score, backgroundImg;
function preload() {
  getBackgroundImage();
}
function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  score = 0;
  ground = new Ground(600, height, 1200, 20);
  box1 = new Box(690, 320, 30, 300);
  box2 = new Box(660, 320, 30, 30);
  box3 = new Box(630, 320, 30, 30);
  box4 = new Box(600, 320, 30, 30);
  box5 = new Box(570, 320, 30, 30);
  box6 = new Box(660, 290, 30, 30);
  box7 = new Box(630, 290, 30, 30);
  box8 = new Box(600, 290, 30, 30);
  box9 = new Box(640, 260, 30, 30);
  box10 = new Box(610, 260, 30, 30);

  box11 = new Box(625, 230, 30, 30);

  polygon = new Polygon(200, 320, 70, 70);
  slingshot = new SlingShot(polygon.body, { x: 200, y: 100 });
  Engine.run(engine);
}

function draw() {
  if (backgroundImg) background(backgroundImg);
  // background(247, 247, 247);
  Engine.update(engine);
  strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill(rgb(138, 42, 94));
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  fill(rgb(61, 218, 202));
  box11.display();
  polygon.display();
  slingshot.display();
  ground.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  text("SCORE:" + score, 200, 50);
  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}
async function getBackgroundImage() {
  var response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/kolkata"
  );
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hours = datetime.slice(11, 13);
  if (hours >= 6 && hours <= 18) {
    bg = "background.jpg";
  } else {
    bg = "back3.jpg";
  }
  backgroundImg = loadImage(bg);
}
