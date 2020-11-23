var dog, happyDog, database, foodS, foodStock;
var dog_img;
var feedPet, addFood;
var fedTime, lastFed;
var foodObj;

function preload() {
  dog_img = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  createCanvas(1000, 1000);
  dog = createSprite(250, 250, 50, 50);
  dog.addImage(dog_img);
  dog.scale = 0.3;
  database = firebase.database();
  foodObj = new foodClass();
  feedPet = createButton("Feed the Pet");
  feedPet.position(700, 95);
  feedPet.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);

}


function draw() {
  background(46, 139, 87);

  //foodObj.display();

  //fedTime = database.ref('FeedTime');
  //fedTime.on("value", (data) => {
  //  lastFed = data.val();
  //});

  //fill(255, 255, 254);
  //if (lastFed >= 12) {
  //  text("Last Feed: " + lastFed % 12 + " PM", 350, 30);
  //} else if (lastFed === 0) {
  //  text("Last Feed: 12 AM", 350, 30);
  //} else {
  //  text("Last Feed: " + lastFed + " AM", 350, 30);
  //}

  drawSprites();
  //add styles here

}

function feedDog() {
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime: hour()
  })
}

function addFoods() {
  foodS++;
  database.ref('/').update({
    Food: foods
  })
}






