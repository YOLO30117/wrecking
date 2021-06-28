class Box {
    constructor(x,y){
        var options={
            restitution:0.8,
            density:0.04,
            friction:1,
        }
        this.b = Bodies.rectangle(x,y,70,70,options);
        World.add(world,this.b);

    }
    display(){
        push();
        translate(this.b.position.x,this.b.position.y);
        rotate(this.b.angle);
        rectMode(CENTER);
        stroke("green");
        fill(255);
        rect(0,0,70,70);
        pop();
    }
}


