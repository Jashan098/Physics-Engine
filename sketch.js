var ball
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true,
    density:1
  }
  ground=Bodies.rectangle (200,380,width,20, options)
  World.add(world, ground)
  var ballOptions={restitution:1}
  ball=Bodies.circle (250, 100, 60, ballOptions)
  World.add(world, ball)

}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("blue")
  rectMode(CENTER)
  rect (ground.position.x, ground.position.y, width, 20)
  ellipseMode(RADIUS)
ellipse (ball.position.x, ball.position.y, 60, 60)
}

