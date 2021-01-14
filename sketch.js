
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImage, stone

function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(100,450,20,20)
	boy.addImage(boyImage)
	boy.scale=0.1
    
    stone = new Stone(100,200,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")
  
  drawSprites();

  stone.display();
 
}



