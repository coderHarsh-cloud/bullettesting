
//declaring the variables
var bullet,weight,damage,speed,wall,bulletRightEdge,wallLeftEdge,wallThickness;

//function for creating sprites and canvas
function setup() 
{   
    //creating the canvas
    createCanvas(1600,400);
     
    //assigning a random initial value to the speed
    speed=random(203,301);
    
    //assigning an initial value to the weight
    weight=random(20,42);
    
     //creating the bullet sprite
     bullet=createSprite(50,200,70,20);
     
      //assigning an initial value to wall thickness
     wallThickness=random(15,83);

    
     //creating the wall sprite
     wall=createSprite(1200,200,wallThickness,200);
   
     //assigning an initial value to damage
     damage=0;
    
     //giving an initial shape color to the car 
     bullet.shapeColor="white";


    //giving the wall an initial shapeColor
     wall.shapeColor="white";
    }

function draw() 
{
    
    //setting the background color
    background("black");
   
    //controls for the car
    if(keyDown("space"))
   {
    bullet.velocityX=speed;
   }
    //calling the function has collided and doing specific tasks
    if(hasCollided(bullet,wall))
    {
       //value of damage
        damage=0.5*weight*speed*speed/wallThickness*wallThickness*wallThickness 
        bullet.velocityX=0;
       
       //changing the color of the wall to red if damage is greater than 10
        if(damage>10)
       {
           wall.shapeColor="red";
       } 
      
      //changing the color of the wall to green if the damge is less than 10
       if(damage<10)
       {
           wall.shapeColor="green";
       }


    }
   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
   
   
   
   //drawing the sprites
    drawSprites();

}
    
    //creating the function has collided
    function hasCollided(bullet,wall)
    {
    if(wall.x-bullet.x<(wall.width+20)/2)
    {
        return true;

    }

    return false;
    


}