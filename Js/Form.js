class Form{
    constructor(){
      /*this.title = createElement("h1")
      this.play = createButton("Start")*/
      this.title = createSprite(displayWidth/2, 150)
      this.titleImage = loadImage('Images/title.png');

      this.play = createSprite(displayWidth/2, displayHeight/2-150);
      this.playImage = loadImage("Images/Play.png")

      //this.story = createElement("p")
      this.path1 = createSprite(displayWidth/2 + 400, displayHeight/2 - 75, 20000, 10)
      this.path1.shapeColor = "Yellow"
      this.path1Title = createSprite(displayWidth/2, displayHeight/2)
      this.path1Image = loadImage("Images/Forest/forestTitle.png")

      this.path2 = createSprite(displayWidth/2 + 400, displayHeight/2 + 75, 20000, 10)
      this.path2.shapeColor = "Yellow"
      this.path2Title = createSprite(displayWidth/2, displayHeight/2 + 150)
      this.path2Image = loadImage("Images/Desert/desertTitle.png")

      this.path3 = createSprite(displayWidth/2 + 400, displayHeight/2 + 225, 20000, 10)
      this.path3.shapeColor = "Yellow"
      this.path3Title = createSprite(displayWidth/2, displayHeight/2 + 300)
      this.path3Image = loadImage("Images/City/cityTitle.png")

      this.path4 = createSprite(displayWidth/2 + 400, displayHeight/2 + 375, 20000, 10)
      this.path4.shapeColor = "Yellow"

      this.selector = createSprite(this.path1.x - 400,this.path1.y + 75, displayWidth, 100)
      this.selectorImage = loadImage("Images/selector.png")

      this.path1.visible = false;
      this.path2.visible = false;
      this.path3.visible = false;
      this.path4.visible = false;
      this.path1Title.visible = false;
      this.path2Title.visible = false;
      this.path3Title.visible = false;
      this.selector.visible = false;
    }
    display(){
        //this.title.html("Something")

       //this.title.position(displayWidth/2 + 150, 50)
       //this.play.position(displayWidth/2, displayHeight/2)
       this.title.addImage(this.titleImage)
       this.play.addImage(this.playImage);
       this.selector.addImage(this.selectorImage);
       this.path1Title.addImage(this.path1Image);
       this.path2Title.addImage(this.path2Image);
       this.path3Title.addImage(this.path3Image);
       this.play.scale = 1.2
       /*this.play.mousePressed(()=>{
          this.play.hide()
         // this.story.html("Some text")
         // this.story.position(displayWidth/2 - 100, 150)
        //  console.log(displayHeight, displayWidth)
          this.path1.visible = true;
          this.path2.visible = true;
          this.path3.visible = true;
          this.path4.visible = true;
          this.selector.visible = true;
        })*/
    }

    hide(){
      this.title.visible = false;
      this.path1.visible = false;
      this.path2.visible = false;
      this.path3.visible = false;
      this.path4.visible = false;
      this.selector.visible = false;
    }
}     