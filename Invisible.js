class Invisible{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/BG");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        rect(pos.x, pos.y, this.width, this.height)
      }
}