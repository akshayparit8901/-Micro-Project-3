const foodData = require('./food.json')

//list all food items
foodData.map((foods)=>{
    console.log(foods.foodname);
});

//list all the food items with category vegetables
function list(category) {
    foodData.map((foods)=>{
        if(foods.category==category) {
            console.log(foods.foodname);
        }
    })
}

//list of category
list("Vegetable");
list("Fruit");
list("Protein");
list("Nuts");
list("Dairy");
list("Grains");

//
foodData.map((foods)=>{
    if (foods.calories > 100){
        console.log(foods.foodname);
    }
})

//list all the food items with calorie below 100
foodData.map((foods)=>{
    if (foods.calories < 100){
        console.log(foods.foodname);
    }
})

//list all the food items with highest protien content to lowest
foodData.sort((a,b)=>{return b.protiens - a.protiens})
foodData.forEach((foods)=>{
 console.log(foods.foodname);   
})

//list all the food items with lowest cab content to highest
foodData.sort((a,b)=>{return a.cab - b.cab})
foodData.forEach((foods)=>{
    console.log(foods.foodname);
})