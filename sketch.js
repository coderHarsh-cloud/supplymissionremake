
//declaring the constatnts for the physics engine
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

//declaring the variables
var helicopter,helicopterImage,ground,package,packageImage,b1,b2,b3;


function setup()
{
//creating the engine 
engine=Engine.create();

//adding the world to the engine
world=engine.world;

//creating the canvas
var canvas=createCanvas(400,400);

//creating the ground
ground=new Ground(200,390,1700,10);

//creating the package
package=new Package(200,200);

//creating the helicopter
helicopter=new Helicopter(200,200);

//creating the boundaries 
b1=new Boundary(147,355,20,60);
b2=new Boundary(188,376,60,20);
b3=new Boundary(230,356,20,60);
}

function draw()
{

//setting the background color to black
background("black");

//updating the engine
Engine.update(engine);

//displaying the package
package.display();

//displaying the helicopter
helicopter.display();

//displaying the ground
ground.display();

//displaying the boundaries
b1.display();
b2.display();
b3.display();

//calling the function eject
eject();
console.log(helicopter.x);
}

//creating a function for dropping the package when down arrow key is pressed
function eject()
{
	if(keyCode===DOWN_ARROW)
	{
			
			
			Matter.Body.setStatic(package.body,false);
			
	
		}

}
