const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var box1,box2;
var ground1;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  /*
  
  ball=Bodies.circle(200,200,30,recover);
  mayank=Bodies.rectangle(200,380,100,20,barrier);
  World.add(world,mayank);
  World.add(world,ball);
  console.log(mayank.position.x);
  console.log(mayank.position.y);*/

  box1 = new box(200,300,50,50);
  box2 = new box(240,100,50,100);
  ground1 = new ground(200,380,600,20);
}

function draw() {
  background(0);  
  
  Engine.update(engine);
 /* rectMode(CENTER);
  fill("green");
  rect(mayank.position.x,mayank.position.y,400,20);
  ellipseMode(RADIUS);
  fill("orange");
  ellipse(ball.position.x,ball.position.y,30);*/

  box1.display();
  ground1.display();
  box2.display();
}