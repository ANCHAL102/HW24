
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new ground(400,680,800,20)
Ball=new ball(100,650,20)
//dustbin=new dustbin()
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
   //dustbin.display()
   Ball.display()
   ground.display()


   drawSprites();
 
}



function keyPressed(){
	if (keyCode===UP_ARROW){
		//matter.body.applyforce(ballobject.body,ballobject.body.position,{x:85,y:85})
	}
}
 



