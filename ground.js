class ground{
 constructor(x,y,width,height){
    var barrier={
        isStatic:true
      }
 this.body = Bodies.rectangle(x,y,width,height,barrier);
 this.width=width;
 this.height=height;
 World.add(world,this.body)
 }
 display(){
 var posit =this.body.position;
 fill("yellow");
 rectMode(CENTER);
 rect(posit.x,posit.y,this.width,this.height)

 }
}