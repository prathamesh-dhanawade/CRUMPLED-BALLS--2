
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,groundSprite,boxsideRSprite,boxsideLSprite,boxsidebottomSprite,dustbinObj;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	Engine.run(engine);
	
	dustbinObj=new Dustbin(1200,650);
	paperObject = new Paper(200,450,40);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinObj.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}
}
