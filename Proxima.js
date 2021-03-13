class Proxima extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("Images/Proxima.png");

    }
    display(){
        if((this.body.speed)<2.5)
        {super.display();
        }else
        {
        World.remove(world,this.body)  
      }
    }
  };