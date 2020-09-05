
//creating the class helicopter
class Helicopter
{
    constructor(x,y)
    {
       //creating the options for the helicopter class
        var options={isStatic:true}
       
       //constructing the body
        this.body=Bodies.rectangle(200,200,100,100,options);
        
        //taking the width and height as 100 and 100 respectively
        this.width=100;
        this.height=100;
       
       //taking x and y as constant as 200 and 200 respectively
        this.x=200;
        this.y=200;
       
       //loadint the image for the helicopter class
        this.image=loadImage("helicopter.png");
       
       //adding the body to the world
        World.add(world,this.body)
        
    }

//displaying the helicopter class    
display()
{
   imageMode(CENTER);
   image(this.image,200,200,this.width*1.5,this.height);
  

}
}