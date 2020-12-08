const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var g1Dress;
var g2Ball;
var g3Aeroplane;
var g4Robot;
var g5Teddy;
var ground1,ground2;
var ring1;
var ring2,ring3,ring4;
var p1Trophy;

var score;

var LEV1;
var LEV2;
var gamestate;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    g1Dress =new Gift1(200,100,55,55);
    g2Ball =new Gift2(400,100,55,55);
    g3Aeroplane =new Gift3(600,100,55,55);
    g4Robot =new Gift4(800,100,55,55);
    g5Teddy =new Gift5(1000,100,55,55);

    ring2 =new Ring2(width/2.5,height-200,100,100);
    ring3 =new Ring2(width/2,height-200,100,100);
    ring4 =new Ring2(width/1.5,height-200,100,100);

    ground1 =new Ground(width/2,height-10,width,20);

    //p1Trophy =new Prize(600,600,100,100);

    score=0;
}

function draw(){
    background("lightblue");
    text("Score: "+ score, 100,50);
    Engine.update(engine);

    g1Dress.display();
    g2Ball.display();
    g3Aeroplane.display();
    g4Robot.display();
    g5Teddy.display();
    ring2.display();
    ring3.display();
    ring4.display();
    ground1.display();
    //p1Trophy.display();

    //isTouching function for rings.
    if(isTouching(ring2.body,g1Dress.body)){
        Matter.Body.setStatic(g1Dress.body,false);
        score=score+10;
        }
    if(isTouching(ring2.body,g2Ball.body)){
        Matter.Body.setStatic(g2Ball.body,false);
        score=score+10;
        }
    if(isTouching(ring2.body,g3Aeroplane.body)){
        Matter.Body.setStatic(g3Aeroplane.body,false);
        score=score+10;
        }   
    if(isTouching(ring2.body,g4Robot.body)){
        Matter.Body.setStatic(g4Robot.body,false);
        score=score+10;
        }
    if(isTouching(ring2.body,g5Teddy.body)){
        Matter.Body.setStatic(g5Teddy.body,false);
        score=score+10;
        } 
    //ring3
        if(isTouching(ring3.body,g1Dress.body)){
          Matter.Body.setStatic(g1Dress.body,false);
          score=score+10;
          }
  
      if(isTouching(ring3.body,g2Ball.body)){
          Matter.Body.setStatic(g2Ball.body,false);
          score=score+10;
          }
      if(isTouching(ring3.body,g3Aeroplane.body)){
          Matter.Body.setStatic(g3Aeroplane.body,false);
          score=score+10;
          }   
      if(isTouching(ring3.body,g4Robot.body)){
          Matter.Body.setStatic(g4Robot.body,false);
          score=score+10;
          }
      if(isTouching(ring3.body,g5Teddy.body)){
          Matter.Body.setStatic(g5Teddy.body,false);
          score=score+10;
          } 
    //ring4
          if(isTouching(ring4.body,g1Dress.body)){
            Matter.Body.setStatic(g1Dress.body,false);
            score=score+10;
            }
    
        if(isTouching(ring4.body,g2Ball.body)){
            Matter.Body.setStatic(g2Ball.body,false);
            score=score+10;
            }
        if(isTouching(ring4.body,g3Aeroplane.body)){
            Matter.Body.setStatic(g3Aeroplane.body,false);
            score=score+10;
            }   
        if(isTouching(ring4.body,g4Robot.body)){
            Matter.Body.setStatic(g4Robot.body,false);
            score=score+10;
            }
        if(isTouching(ring4.body,g5Teddy.body)){
            Matter.Body.setStatic(g5Teddy.body,false);
            score=score+10;
            }     

}

function keyPressed(){
    //key 1= ring2, key 2= ring3, key 3= ring4.
if (keyCode===49){
Matter.Body.applyForce(ring2.body,ring2.body.position,{x:1000,y:-800});
}
if (keyCode===50){
  Matter.Body.applyForce(ring3.body,ring3.body.position,{x:-1000,y:800});
  }
if (keyCode===51){
Matter.Body.applyForce(ring4.body,ring4.body.position,{x:-1000,y:-1000});
}
}

//function isTouching
function isTouching(object1, object2){

    if(object1.position.x-object2.position.x<78
      && object2.position.x-object1.position.x<78
      &&object1.position.y-object2.position.y<78
      &&object2.position.y-object1.position.y<78){
      return true
      } else {
          return false
  
     }
     
  }
