class Boat{ 
 constructor(x,y,width,heigth,boatPos){
    var options ={
    restitution:0.8,
    friction:1,
    density:1
    }

     this.width=width;
     this.heigth=heigth;
     this.boatPos=boatPos
     this.body=Bodies.rectangle(x,y,width,heigth,boatPos);
     World.add(world,this.body)
     this.image=loadImage("assets/boat.png")
     
       }
 display(){
    var angle=this.body.angle
    var pos=this.body.position
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,this.boatPos,this.width,this.heigth);
    noTint();
    pop()

   }
}