const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gamestate = 0;
function preload() {
//preload the images here
bgImage = loadImage("Images/BG.jpg")
}

function setup() {
  createCanvas(1280, 580);
  engine = Engine.create();
  world = engine.world;
  Thor1 = new Thor(150, 290, 300, 300)
  Thanos1 = new Thanos(1150, 290, 350, 400)
  Corvous1 = new Corvous(900, 72.5, 130, 145)
  Cull1 = new Cull(900, 72.5*3, 130, 145)
  Proxima1 = new Proxima(900, 72.5*4.8, 130, 145)
  Ebony1 = new Ebony(900, 72.5*6.8, 130, 145)
  slingshot = new SlingShot(Thor1.body,{x:150, y:290});
  inv = new Invisible(950, 72*8.2, 900, 30)
}

function draw() {
  background(bgImage);
  Engine.update(engine);
  Thor1.display();
  Thanos1.display();
  Corvous1.display();
  Cull1.display();
  Proxima1.display();
  Ebony1.display();
  inv.display();
}
function mouseDragged(){
  if(gamestate === 0){
  Matter.Body.setPosition(Thor1.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
  if(gamestate === 0){
  slingshot.fly();
}
}
function keyPressed(){
  if(gamestate === 0){
  if(keyCode===32){
      Matter.Body.setPosition(Thor1.body, {x: 150 , y: 290});
  slingshot.attach(Thor1.body);
  }
}
}