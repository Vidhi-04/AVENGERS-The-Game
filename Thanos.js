class Thanos extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("Images/Thanos.png");
      
    }
    display(){
      if((this.body.speed)<7)
      {
        super.display();
      }
      else
      {
      World.remove(world,this.body) 
      textSize(100)
      fill("red")
      text("Thor Wins!!!",400, 290)
      gamestate = 1
      }
      console.log(this.body.speed)
    }
  };