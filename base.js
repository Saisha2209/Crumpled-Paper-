class BASE
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,

			}
		this.x=x;
		this.y=y;
        this.width=width
        this.height=height
		this.body=Bodies.rectangle(x, y, width, height , options);
      
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.width, this.height);
			pop()
			
	}

}