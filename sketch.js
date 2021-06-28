const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground1, ball1, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, lin


function setup() {
  createCanvas(3000,800);
  e = Engine.create()
  world = e.world

  ground1 = new Ground();

  ball1 = new Ball();

  b1 = new Box(700,100)
  b2 = new Box(700,100)
  b3 = new Box(700,100)
  b4 = new Box(700,100)
  b5 = new Box(700,100)
  b6 = new Box(700,100)
  b7 = new Box(700,100)
  b8 = new Box(800,100)
  b9 = new Box(800,100)
  b10 = new Box(800,100)
  b11 = new Box(800,100)
  b12 = new Box(800,100)
  b13 = new Box(800,100)
  b14 = new Box(800,100)
  b15 = new Box(800,100)  

  lin = new Rope(ball1.body,{x:500,y:50})

}

function draw() {
  background(180); 
  
  Engine.update(e)

  ground1.display();

  ball1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  lin.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{ x:mouseX , y:mouseY })
}