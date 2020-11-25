class Paper{
constructor(x,y){
var options = {

//isStatic: true,
restitution: 0.3,
friction: 0.5,
density: 5
}
this.body = Bodies.circle(x,y,20,options);
this.image = loadImage("paper.png");
World.add(world,this.body);
}

display(){
    imageMode(CENTER)
    fill(255, 0, 255);
    image(this.image, this.body.position.x, this.body.position.y, 50,50)
}
}