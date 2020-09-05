
//creating the boundary class
class Boundary
{
    //constructing the boundaries
    constructor(x,y,width,height)
    {
        //creating the options for the boundary class
        var options={isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        
        //adding the the body to the world
        World.add(world,this.body);
    }

//displaying the body
display()
{

var pos=this.body.position;
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
fill("white");

}
}