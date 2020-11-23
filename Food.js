class foodClass {
    constructor() {
        this.foodStock = 0,
            this.lastFed
        //this.image = loadImage("Milk.png");
    }

    getFoodStock(foodS) {
        var foodStockref = database.ref('Food');
        foodStockref.on("value", (data) => {
            foodS = data.val();
        })
    }

    updateFoodStock(foodS) {
        database.ref('/').update({
            Food: foodS
        })
    }

    deductFood(foodS) {
        if (foodS <= 0) {
            foodS = 0;
        } else {
            foodS = foodS - 1;
        }

    }

    display() {
        //image(this.image)


    }


}