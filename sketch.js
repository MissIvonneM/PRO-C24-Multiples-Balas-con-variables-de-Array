// Código de Inicio PRO C23 V2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;

var Matriz= ['Nombre', 1, true]   
console.log(Matriz)

var Array1= [2,4,6,8]       
console.log(Array1)

var Arreglo1 = [[1,2,3], [4,5,6], [7,8,9]];     
console.log(Arreglo1)

console.log(Arreglo1[0]);        

console.log(Arreglo1[0][1]);    

Arreglo1.push('Mi nombre es Gibrán');  
console.log(Arreglo1)

Arreglo1.pop();       
console.log(Arreglo1)

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);   
  angle = 15;           

  
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, {isStatic: true});
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y); 
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  cannonBall.display();   
}


function keyReleased() {  
  if (keyCode === DOWN_ARROW) {
    cannonBall.shoot();
  }
}