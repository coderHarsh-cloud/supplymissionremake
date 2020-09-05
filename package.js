
//creating the package class
class Package
{
    constructor(x,y)
    {
        //options for the package class
        var options={restituion:1.5,friction:0.5,isStatic:true}
        
        //constructing the package class
        this.body=Bodies.rectangle(x,y,20,20,options);
        
        //taking the width and height as 20 and 20 respectively
        this.width=20;
        this.height=20;
       
        //loading the image for the package
        this.image=loadImage("package.png");
       
       //adding the package to the world
        World.add(world,this.body);
       
    }

    //displaying the package
    display()
{
    var pos=this.body.position;
   
    var angle=this.body.angle;
   
   //pushing the packge
    push();
    
    //translating its position
    translate(pos.x,pos.y);
   
   //rotating the package
    rotate(angle);
   
   //displaying the image
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    
    //popping it 
    pop();

}


}