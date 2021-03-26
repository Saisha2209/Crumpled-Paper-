class PAPER {
 constructor(x,y,width,height){ 
var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2,
}
this.width = 50;
  this.height = 50;
 this.x=x
 this.y=y
  this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
  
  this.image=loadImage("paper.png")
  World.add(world, this.body);

 }
 display(){
  var pos =this.body.position;
  push();
  
  translate(pos.x, pos.y)
  rotate(this.body.angle);
  imageMode(CENTER);
  
  image(this.image,0,0, this.width, this.height);
  pop();


 }
}