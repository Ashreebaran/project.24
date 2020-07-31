
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var box;

function preload()
{
	paper.image = loadImage("paper.png");
	box.image = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options = {
		density:1.2,
		restitution:0.3,
		friction:0.5,
		isStatic:false
	}

	//Create the Bodies Here.
	paper = circle(100, 600, 20, options);
	

	box = createSprite(590, 640, 200, 20);


	ground = new Ground(400,680,800,60);

	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipse();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	}
}



