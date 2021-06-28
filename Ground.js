class Ground{
    constructor(){
        this.g = Bodies.rectangle(600,600,1200,20,{isStatic : true})
        World.add(world,this.g);
    }
    display(){
     rectMode(CENTER)
     fill("brown")
     rect(600,600,1200,20)
    }
}