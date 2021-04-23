class ball{
    constructor(x,y,r){
        var options={
            isStatic=false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        
        this.r=r
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }
    display()
    {
var ballpos=this.body.position

push()

ellipseMode(RADIUS)
translate(ballpos.x,ballpos.y)
strokeWeight(3)
fill(255,0,255)
ellipse(0,0,this.r,this.r)
pop()
    }
}