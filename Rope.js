class Rope{
    constructor(myBody,myPoint){
        var og = {
            bodyA:myBody,
            pointB:myPoint,
            stiffness:1.2,
            length:250
        }
        this.r = Matter.Constraint.create(og)
        World.add(world,this.r)
        this.mypos = myPoint
    }
    display(){
        var posA = this.r.bodyA.position
        var posB = this.mypos
        line(posB.x,posB.y,posA.x,posA.y)
    }
}