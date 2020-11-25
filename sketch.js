const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paperball

function preload(){
	bin_image = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Paperball = new Paper(100,550);
	right_bin = new Ground(525,520,30,100)
	bottom_bin = new Ground(620,570,190,30)
	left_bin = new Ground(705,520,30,100)
	ground = new Ground(400,580,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  imageMode(CENTER)
  image(bin_image,620,480, 160,160)
  Paperball.display();
  ground.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Paperball.body, Paperball.body.position,{x:175, y:-405});
	}
}


