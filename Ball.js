class Ball{
    constructor(){
        var options ={
            density : 1,
            frictionAir : 0.005,
        }
        this.body = Bodies.rectangle(200,200,40,40,options)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("red")
        ellipse(0,0,40,40)
        pop()
    }
}
