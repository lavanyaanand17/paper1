
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  dustbin1=new Dustbin(550,630,10,100);
  dustbin2= new Dustbin(770,630,10,100);
  dustbin3= new Dustbin(660,670,200,10);
  paper= new Paper(100,100,30);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});

}

