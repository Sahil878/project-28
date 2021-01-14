class Mango{
    constructor(x,y,radius){
        var options={
            "isStatic":true ,
            "restitution":0 ,
            "friction":1
        }

        
        this.body=Matter.Bodies.circle(x,y,radius,options)
        Matter.Body.setAngle(this.body,angle)
        this.radius=radius

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
       translate(pos.x,pos.y)
       rotate(angle)
       fill(255)
       pop()
    }

}
    