window.addEventListener('load', init);

//Global Variables
let recipe;
let ingredients;
let favorites;

function init(){
    recipe = document.getElementById('recipe');
    ingredients = document.getElementById('ingredients');
    favorites = document.getElementById('favorites');
    showMeals();
}

const Recipes = [
    {
        id: 0,
        meal: 'Creamy Heart Soup',
        ingredients: ['Any radish', 'Hydromelon', 'Voltfruit', 'Fresh Milk'],
        image: './Webservice/Images/Vegetarian/Creamyheartsoup.png'
    },
    {
        id: 1,
        meal: 'Pumpkin Stew',
        ingredients: ['Fortified Pumpkin', 'Goat Butter', 'Fresh Milk', 'Tabantha Wheat'],
        image: './Webservice/Images/Vegetarian/Pumpkinsoup.png'
    },
    {
        id: 2,
        meal: 'Veggie Cream Soup',
        ingredients: ['Any carrot or pumpkin', 'Fresh Milk', 'Rock Salt'],
        image: './Webservice/Images/Vegetarian/Veggiecreamsoup.png'
    },
    {
        id: 3,
        meal: 'Cream of Vegetable Soup',
        ingredients: ['Any herb, vegetable, or flower', 'Fresh Milk', 'Rock Salt'],
        image: './Webservice/Images/Vegetarian/Creamofvegetable.png'
    },
    {
        id: 4,
        meal: 'Carrot Stew',
        ingredients: ['Any carrot', 'Goat Butter', 'Fresh Milk', 'Tabantha Wheat'],
        image: './Webservice/Images/Vegetarian/Carrotstew.png'
    },
    {
        id: 5,
        meal: 'Vegetable Risotto',
        ingredients: ['Any carrot or pumpkin', 'Goat Butter', 'Hylian Rice', 'Rock Salt'],
        image: './Webservice/Images/Vegetarian/Vegetablerisotto.png'
    },
    {
        id: 6,
        meal: 'Mushroom Risotto',
        ingredients: ['Any mushroom', 'Hylian Rice', 'Goat Butter', 'Rock Salt'],
        image: './Webservice/Images/Vegetarian/Mushroomrisotto.png'
    },
    {
        id: 7,
        meal: 'Curry Pilaf',
        ingredients: ['Goat Butter', 'Goron Spice', 'Hylian Rice'],
        image: './Webservice/Images/Vegetarian/Currypilaf.png'
    },
    {
        id: 8,
        meal: 'Mushroom Rice Balls',
        ingredients: ['Hylian Rice', 'Any mushroom'],
        image: './Webservice/Images/Vegetarian/Mushroomriceballs.png'
    },
    {
        id: 8,
        meal: 'Veggie Rice Balls',
        ingredients: ['Any herb, vegetable, or flower'],
        image: './Webservice/Images/Vegetarian/Veggie_rice_balls.png'
    },
    {
        id: 9,
        meal: 'Curry Rice',
        ingredients: ['Goron Spice', 'Hylian Rice'],
        image: './Webservice/Images/Vegetarian/Curryrice.png'
    },
    {
        id: 10,
        meal: 'Fried Egg and Rice',
        ingredients: ['Bird Egg', 'Hylian Rice'],
        image: './Webservice/Images/Vegetarian/Fried_egg_and_rice.png'
    },
    {
        id: 11,
        meal: 'Mushroom Omelet',
        ingredients: ['Any mushroom', 'Bird Egg', 'Goat Butter', 'Rock Salt'],
        image: './Webservice/Images/Vegetarian/Mushroomomelet.png'
    },
    {
        id: 12,
        meal: 'Vegetable Omelet',
        ingredients: ['Any herb, vegetable, or flower', 'Bird Egg', 'Goat Butter', 'Rock Salt'],
        image: './Webservice/Images/Vegetarian/Vegetableomelet.png'
    },
    {
        id: 13,
        meal: 'Vegetable Curry',
        ingredients: ['Any carrot or pumpkin', 'Goron Spice', 'Hylian Rice'],
        image: './Webservice/Images/Vegetarian/Vegetablecurry.png'
    },
    {
        id: 14,
        meal: 'Fragrant Mushroom Sauté',
        ingredients: ['Any mushroom', 'Goron Spice'],
        image: './Webservice/Images/Vegetarian/Fragrantmushroomsaute.png'
    },
    {
        id: 15,
        meal: 'Herb Sauté',
        ingredients: ['Any herb, vegetable, or flower', 'Goron Spice'],
        image: './Webservice/Images/Vegetarian/Herbsaute.png'
    },
    {
        id: 16,
        meal: 'Salt-Grilled Greens',
        ingredients: ['Any herb, vegetable, or flower', 'Rock Salt'],
        image: './Webservice/Images/Vegetarian/Salt-grilledgreens.png'
    },
    {
        id: 17,
        meal: 'Salt-Grilled Mushrooms',
        ingredients: ['Any mushroom', 'Rock Salt'],
        image: './Webservice/Images/Vegetarian/Salt-grilledmushrooms.png'
    },
    {
        id: 18,
        meal: 'Steamed Mushrooms',
        ingredients: ['Any herb, vegetable, or flower', 'Any mushroom'],
        image: './Webservice/Images/Vegetarian/Steamedmushrooms.png'
    },
    {
        id: 19,
        meal: 'Mushroom Skewer',
        ingredients: ['Any mushroom'],
        image: './Webservice/Images/Vegetarian/Mushroomskewer.png'
    },
    {
        id: 20,
        meal: 'Copious Mushroom Skewers',
        ingredients: ['Any four different mushrooms'],
        image: './Webservice/Images/Vegetarian/Copiousmushroomskewers.png'
    },
    {
        id: 21,
        meal: 'Fried Wild Greens',
        ingredients: ['Any herb, vegetable, or flower combination'],
        image: './Webservice/Images/Vegetarian/Friedwildgreens.png'
    },
    {
        id: 22,
        meal: 'Copious Fried Wild Greens',
        ingredients: ['Any four different herbs, vegetables, or flowers'],
        image: './Webservice/Images/Vegetarian/Friedwildgreensreal.png'
    },
    {
        id: 23,
        meal: 'Omelet',
        ingredients: ['Bird Egg'],
        image: './Webservice/Images/Vegetarian/Omelet.png'
    },
    {
        id: 1,
        meal: 'Clam Chowder',
        ingredients: ['Hearty Blueshell Snail', 'Goat Butter', 'Fresh Milk', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/Clamchowder.png'
    },
    {
        id: 2,
        meal: 'Creamy Seafood Soup',
        ingredients: ['Any seafood', 'Any herb, vegetable, or flower', 'Rock Salt', 'Fresh Milk'],
        image: './Webservice/Images/Seafood/Creamyseafoodsoup.png'
    },
    {
        id: 3,
        meal: 'Seafood Curry',
        ingredients: ['Hearty Blueshell Snail or any Porgy', 'Hylian Rice', 'Goron Spice'],
        image: './Webservice/Images/Seafood/Seafoodcurry.png'
    },
    {
        id: 4,
        meal: 'Salmon Risotto',
        ingredients: ['Hearty Salmon', 'Rock Salt', 'Hylian Rice', 'Goat Butter'],
        image: './Webservice/Images/Seafood/Salmonrisotto.png'
    },
    {
        id: 5,
        meal: 'Crab Risotto',
        ingredients: ['Any crab', 'Rock Salt', 'Hylian Rice', 'Goat Butter'],
        image: './Webservice/Images/Seafood/Crabrisotto.png'
    },
    {
        id: 6,
        meal: 'Seafood Fried Rice',
        ingredients: ['Hearty Blueshell Snail or any Porgy', 'Rock Salt', 'Hylian Rice'],
        image: './Webservice/Images/Seafood/Seafoodfriedrice.png'
    },
    {
        id: 7,
        meal: 'Seafood Paella',
        ingredients: ['Any Porgy', 'Hearty Blueshell Snail', 'Rock Salt', 'Goat Butter', 'Hylian Rice'],
        image: './Webservice/Images/Seafood/Seafoodpaella.png'
    },
    {
        id: 8,
        meal: 'Crab Omelet with Rice',
        ingredients: ['Any crab', 'Bird Egg', 'Rock Salt', 'Hylian Rice'],
        image: './Webservice/Images/Seafood/Crabomeletwithrice.png'
    },
    {
        id: 9,
        meal: 'Seafood Rice Balls',
        ingredients: ['Any fish', 'Hylian Rice'],
        image: './Webservice/Images/Seafood/Seafoodriceballs.png'
    },
    {
        id: 10,
        meal: 'Fish Pie',
        ingredients: ['Any seafood', 'Rock Salt', 'Goat Butter', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/Fishpie.png'
    },
    {
        id: 11,
        meal: 'Salmon Meuniere',
        ingredients: ['Hearty Salmon', 'Goat Butter', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/SalmonMeuniere.png'
    },
    {
        id: 12,
        meal: 'Porgy Meuniere',
        ingredients: ['Any Porgy', 'Goat Butter', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/Porgymeuniere.png'
    },
    {
        id: 13,
        meal: 'Seafood Meuniere',
        ingredients: ['Any seafood excluding Hearty Salmon or Porgy', 'Goat Butter', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/Seafoodmeuniere.png'
    },
    {
        id: 14,
        meal: 'Glazed Seafood',
        ingredients: ['Courser Bee Honey', 'Any seafood'],
        image: './Webservice/Images/Seafood/Glazedseafood.png'
    },
    {
        id: 15,
        meal: 'Crab Stir-Fry',
        ingredients: ['Any crab', 'Goron Spice'],
        image: './Webservice/Images/Seafood/Crabstir-fry.png'
    },
    {
        id: 16,
        meal: 'Salt-Grilled Crab',
        ingredients: ['Any crab', 'Rock Salt'],
        image: './Webservice/Images/Seafood/Salt-grilledcrab.png'
    },
    {
        id: 17,
        meal: 'Salt-Grilled Fish',
        ingredients: ['Any fish', 'Rock Salt'],
        image: './Webservice/Images/Seafood/Salt-grilledfish.png'
    },
    {
        id: 18,
        meal: 'Copious Fish Skewers',
        ingredients: ['Any four different fish'],
        image: './Webservice/Images/Seafood/Copiousseafoodskewers.png'
    },
    {
        id: 19,
        meal: 'Spicy Peppered Seafood',
        ingredients: ['Any seafood', 'Spicy Pepper'],
        image: './Webservice/Images/Seafood/Spicypepperseafood.png'
    },
    {
        id: 20,
        meal: 'Steamed Fish',
        ingredients: ['Any herb, vegetable, or flower', 'Any fish'],
        image: './Webservice/Images/Seafood/Steamedfish.png'
    },
    {
        id: 21,
        meal: 'Fish and Mushroom Skewer',
        ingredients: ['Any fish', 'Any mushroom'],
        image: './Webservice/Images/Seafood/Fishandmushroomskewer.png'
    },
    {
        id: 22,
        meal: 'Seafood Skewer',
        ingredients: ['Any snail or crab'],
        image: './Webservice/Images/Seafood/Seafoodskewer.png'
    },
    {
        id: 23,
        meal: 'Fish Skewer',
        ingredients: ['Any fish'],
        image: './Webservice/Images/Seafood/Fishskewer.png'
    }
]

function showMeals(){
    for(let meal of Recipes) {
        //verander meal.id nog naar meal.ingredients
        addMeal(meal.meal, meal.image, meal.ingredients);
    }
}

function deleteFromFavorites(meal){
    meal.remove();
}

function addToFavorites(meal){
    console.log(`Added ${meal} to favorites`);
    let favoriteMeal = document.createElement('div')
    favoriteMeal.innerText = meal;
    favorites.appendChild(favoriteMeal);
    favoriteMeal.addEventListener('click', function (){
        deleteFromFavorites(favoriteMeal);
    });

}

function showIngredients(meal, ingredient){
    console.log(`Ingredients: ${ingredients}`);
    let mealName = document.createElement('h1');
    mealName.innerHTML = `For ${meal} you need:`;
    ingredients.appendChild(mealName);
    ingredient.forEach(ingredient => iterateArray(ingredient));

}

function iterateArray(ingredient){
    let ingredientItem = document.createElement("div");
    ingredientItem.innerText = ingredient;
    ingredients.appendChild(ingredientItem);
}

function addMeal(meal, image, ingredients) {
        //Create div for card
        let card = document.createElement('div');
        card.classList.add('card');

        //Create h1 for meal name & append to card div
        let mealName = document.createElement('h1');
        mealName.innerText = meal;
        card.appendChild(mealName);

        //Create image for meal image & append to card div
        let mealImage = document.createElement('img');
        mealImage.src = image;
        card.appendChild(mealImage);

        //Create button for showing ingredients
        let mealIngredients = document.createElement('div');
        mealIngredients.innerText = 'Show ingredients';
        mealIngredients.addEventListener('click', function(){
            showIngredients(meal, ingredients);
        });
        card.appendChild(mealIngredients);

        //Create button for adding to favorites
        let mealToFavorites = document.createElement('div');
        mealToFavorites.innerText = 'Add to favorites';
        mealToFavorites.addEventListener('click', function(){
            addToFavorites(meal);
        });
        card.appendChild(mealToFavorites);

        //Append card to recipe div
        recipe.appendChild(card);
}