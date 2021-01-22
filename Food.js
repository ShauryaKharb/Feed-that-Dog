class Food{
    constructor(){
        this.foodLive = 0;
        this.lastFed;
        this.image = loadImage("images/Milk.png");
    }// CONSTRUCTOR

    updateFoodStock(foodLive){
        this.foodLive = foodLive ;
    }// UPDATE FOOD STOCK

    getFoodStock(){
        return this.foodLive;
    }// GET FOOD STOCK

    getFedTime(lastFed){
        this.lastFed=lastFed;
      }// GET FEED TIME

    writeFoodStock(x){
        database.ref('/').update({
            food : x
        })
    }// WRITE FOOD STOCK  
    
    display(){
        var x = 100 ;
        var y = 100 ;

        imageMode (CENTER);
        image(this.image,width/2+300,height/2+100,100,100);

        if(this.foodLive < 0 ){
            this.foodLive = 0;
        }

        if(this.foodLive !== 0 ){
          for (var i = 0 ; i < this.foodLive ; i++ ){
            console.log("working");
            if(i%10 === 0){
              x=100;
              y=y+100;
            }// IF

            image(this.image,x,y,100,100);
            x+=45;

          }// FOR
        }// IF
    }// DISPLAY
}// CLASS