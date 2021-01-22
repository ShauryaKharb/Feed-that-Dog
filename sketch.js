//Create variables here
var dog,HdogI;
var score=0;
var foodS,lastFed;
var feedButton,addButton;

function preload(){
  //load images here
  dogI=loadImage("images/dogImg.png");
  HdogI=loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(1500, 700);

  database = firebase.database();
  // console.log(database);
  
  dog=createSprite(width/2+500,height/2+100,20,20);
  dog.addImage(dogI);
  dog.scale=0.3;

  dogFood = new Food();
  fStock = database.ref('food');
  fStock.on("value",readVal)

  addButton  = createButton ("Add Food");
  addButton.position(width/2+850,height/2+275);
  addButton.mousePressed(addFood);

  feedButton = createButton ("Feed");
  feedButton.position(width/2+750,height/2+275);
  feedButton.mousePressed(feedDog);
  
}

function draw() {
  background("#42f59b");

  dogFood.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  fill("black");
  textSize(30);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,35);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,35);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,35);
   }

  drawSprites();
 
}

function readVal (data){
  foodS = data.val();
  dogFood.updateFoodStock(foodS);
}

function feedDog(){
  dog.addImage(HdogI);

  dogFood.updateFoodStock(dogFood.getFoodStock()-1);

  database.ref('/').update({
    food : dogFood.getFoodStock(),
    FeedTime : hour()
  })

}
function addFood(){
  foodS ++ ;
  database.ref('/').update({
    food : foodS
  })
}