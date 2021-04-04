window.addEventListener('load', init);

//Global Variables
let webserviceURL;
let recipe;
let ingredients;
let favorites;
let savedFavorites = [];
let randomColor;

function init(){

    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    recipe = document.getElementById('recipe');
    ingredients = document.getElementById('ingredients');
    favorites = document.getElementById('favorites');

    webserviceURL = './Webservice/includes/actions.php';
    retrieveFromStorage();
    getMeals();
}

function retrieveFromStorage() {
    if (localStorage.getItem('favorites') !== null) {
        let storedItems = JSON.parse(localStorage.getItem('favorites'));
        for (let i of storedItems){
            addToFavorites(i);
        }
    }
}

function getMeals(){
    fetch(webserviceURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(showMeals)
        .catch(getMealsErrorHandler);
}

function getMealsErrorHandler() {
    console.log(`Error, couldn't load the meals from actions.php`);
}

function showMeals(data){
    for(let meal of data) {
        addMeal(meal.meal, meal.image, meal.ingredients);
    }
}

function deleteFromFavorites(meal){
    meal.remove();
    localStorage.removeItem('favorites');
}

function addToFavorites(meal, color){
    console.log(`Added ${meal} to favorites`);
    let favoriteMeal = document.createElement('div')
    favoriteMeal.innerText = meal;
    favoriteMeal.style.backgroundColor = "#" + color;
    favorites.appendChild(favoriteMeal);
    favoriteMeal.addEventListener('click', function (){
        deleteFromFavorites(favoriteMeal);
    });
    saveFavorites(meal);
}

function saveFavorites(meal){
    savedFavorites.push(meal);
    localStorage.setItem('favorites', JSON.stringify(savedFavorites));
}

function showIngredients(meal, ingredient){
    document.getElementById('ingredients').innerHTML = "";
    console.log(`Ingredients: ${ingredients}`);
    let mealName = document.createElement('h1');
    mealName.innerHTML = `For ${meal} you need:`;
    ingredients.appendChild(mealName);
    ingredient.forEach(ingredient => iterateArray(ingredient));

}

function iterateArray(ingredient){
    let ingredientItem = document.createElement("div");
    ingredientItem.innerHTML = ingredient;
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
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            addToFavorites(meal, randomColor);
        });
        card.appendChild(mealToFavorites);

        //Append card to recipe div
        recipe.appendChild(card);
}

/*
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
        id: 24,
        meal: 'Clam Chowder',
        ingredients: ['Hearty Blueshell Snail', 'Goat Butter', 'Fresh Milk', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/Clamchowder.png'
    },
    {
        id: 25,
        meal: 'Creamy Seafood Soup',
        ingredients: ['Any seafood', 'Any herb, vegetable, or flower', 'Rock Salt', 'Fresh Milk'],
        image: './Webservice/Images/Seafood/Creamyseafoodsoup.png'
    },
    {
        id: 26,
        meal: 'Seafood Curry',
        ingredients: ['Hearty Blueshell Snail or any Porgy', 'Hylian Rice', 'Goron Spice'],
        image: './Webservice/Images/Seafood/Seafoodcurry.png'
    },
    {
        id: 27,
        meal: 'Salmon Risotto',
        ingredients: ['Hearty Salmon', 'Rock Salt', 'Hylian Rice', 'Goat Butter'],
        image: './Webservice/Images/Seafood/Salmonrisotto.png'
    },
    {
        id: 28,
        meal: 'Crab Risotto',
        ingredients: ['Any crab', 'Rock Salt', 'Hylian Rice', 'Goat Butter'],
        image: './Webservice/Images/Seafood/Crabrisotto.png'
    },
    {
        id: 29,
        meal: 'Seafood Fried Rice',
        ingredients: ['Hearty Blueshell Snail or any Porgy', 'Rock Salt', 'Hylian Rice'],
        image: './Webservice/Images/Seafood/Seafoodfriedrice.png'
    },
    {
        id: 30,
        meal: 'Seafood Paella',
        ingredients: ['Any Porgy', 'Hearty Blueshell Snail', 'Rock Salt', 'Goat Butter', 'Hylian Rice'],
        image: './Webservice/Images/Seafood/Seafoodpaella.png'
    },
    {
        id: 31,
        meal: 'Crab Omelet with Rice',
        ingredients: ['Any crab', 'Bird Egg', 'Rock Salt', 'Hylian Rice'],
        image: './Webservice/Images/Seafood/Crabomeletwithrice.png'
    },
    {
        id: 32,
        meal: 'Seafood Rice Balls',
        ingredients: ['Any fish', 'Hylian Rice'],
        image: './Webservice/Images/Seafood/Seafoodriceballs.png'
    },
    {
        id: 33,
        meal: 'Fish Pie',
        ingredients: ['Any seafood', 'Rock Salt', 'Goat Butter', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/Fishpie.png'
    },
    {
        id: 34,
        meal: 'Salmon Meuniere',
        ingredients: ['Hearty Salmon', 'Goat Butter', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/SalmonMeuniere.png'
    },
    {
        id: 35,
        meal: 'Porgy Meuniere',
        ingredients: ['Any Porgy', 'Goat Butter', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/Porgymeuniere.png'
    },
    {
        id: 36,
        meal: 'Seafood Meuniere',
        ingredients: ['Any seafood excluding Hearty Salmon or Porgy', 'Goat Butter', 'Tabantha Wheat'],
        image: './Webservice/Images/Seafood/Seafoodmeuniere.png'
    },
    {
        id: 37,
        meal: 'Glazed Seafood',
        ingredients: ['Courser Bee Honey', 'Any seafood'],
        image: './Webservice/Images/Seafood/Glazedseafood.png'
    },
    {
        id: 38,
        meal: 'Crab Stir-Fry',
        ingredients: ['Any crab', 'Goron Spice'],
        image: './Webservice/Images/Seafood/Crabstir-fry.png'
    },
    {
        id: 39,
        meal: 'Salt-Grilled Crab',
        ingredients: ['Any crab', 'Rock Salt'],
        image: './Webservice/Images/Seafood/Salt-grilledcrab.png'
    },
    {
        id: 40,
        meal: 'Salt-Grilled Fish',
        ingredients: ['Any fish', 'Rock Salt'],
        image: './Webservice/Images/Seafood/Salt-grilledfish.png'
    },
    {
        id: 41,
        meal: 'Copious Fish Skewers',
        ingredients: ['Any four different fish'],
        image: './Webservice/Images/Seafood/Copiousseafoodskewers.png'
    },
    {
        id: 42,
        meal: 'Spicy Peppered Seafood',
        ingredients: ['Any seafood', 'Spicy Pepper'],
        image: './Webservice/Images/Seafood/Spicypepperseafood.png'
    },
    {
        id: 43,
        meal: 'Steamed Fish',
        ingredients: ['Any herb, vegetable, or flower', 'Any fish'],
        image: './Webservice/Images/Seafood/Steamedfish.png'
    },
    {
        id: 44,
        meal: 'Fish and Mushroom Skewer',
        ingredients: ['Any fish', 'Any mushroom'],
        image: './Webservice/Images/Seafood/Fishandmushroomskewer.png'
    },
    {
        id: 45,
        meal: 'Seafood Skewer',
        ingredients: ['Any snail or crab'],
        image: './Webservice/Images/Seafood/Seafoodskewer.png'
    },
    {
        id: 46,
        meal: 'Fish Skewer',
        ingredients: ['Any fish'],
        image: './Webservice/Images/Seafood/Fishskewer.png'
    },
    {
        id: 47,
        meal: 'Gourmet Meat Stew',
        ingredients: ['Raw Gourmet Meat or Raw Whole Bird', 'Fresh Milk', 'Goat Butter', 'Tabantha Wheat'],
        image: ''
    },
    {
        id: 48,
        meal: 'Prime Meat Stew',
        ingredients: ['Raw Prime Meat or Raw Bird Thigh', 'Fresh Milk', 'Goat Butter', 'Tabantha Wheat'],
        image: ''
    },
    {
        id: 49,
        meal: 'Meat Stew',
        ingredients: ['Raw Meat or Raw Bird Drumstick', 'Fresh Milk', 'Goat Butter', 'Tabantha Wheat'],
        image: ''
    },
    {
        id: 50,
        meal: 'Creamy Meat Soup',
        ingredients: ['Any meat', 'Any herb, flower, or vegetable', 'Fresh Milk', 'Rock Salt'],
        image: ''
    },
    {
        id: 51,
        meal: 'Meat Curry',
        ingredients: ['Raw Meat', 'Goron Spice', 'Hylian Rice'],
        image: ''
    },
    {
        id: 52,
        meal: 'Prime Meat Curry',
        ingredients: ['Raw Prime Meat', 'Goron Spice', 'Hylian Rice'],
        image: ''
    },
    {
        id: 53,
        meal: 'Gourmet Meat Curry',
        ingredients: ['Raw Gourmet Meat', 'Goron Spice', 'Hylian Rice'],
        image: ''
    },
    {
        id: 54,
        meal: 'Poultry Curry',
        ingredients: ['Raw Bird Drumstick', 'Goron Spice', 'Hylian Rice'],
        image: ''
    },
    {
        id: 55,
        meal: 'Prime Poultry Curry',
        ingredients: ['Raw Bird Thigh', 'Goron Spice', 'Hylian Rice'],
        image: ''
    },
    {
        id: 56,
        meal: 'Meaty Rice Balls',
        ingredients: ['Any meat', 'Hylian Rice'],
        image: ''
    },
    {
        id: 57,
        meal: 'Meat-Stuffed Pumpkins',
        ingredients: ['Any meat', 'Fortified Pumpkin'],
        image: ''
    },
    {
        id: 58,
        meal: 'Meat Pie',
        ingredients: ['Any meat', 'Goat Butter', 'Rock Salt', 'Tabantha Wheat'],
        image: ''
    },
    {
        id: 59,
        meal: 'Poultry Pilaf',
        ingredients: ['Raw Bird Drumstick', 'Bird Egg', 'Goat Butter', 'Hylian Rice'],
        image: ''
    },
    {
        id: 60,
        meal: 'Prime Poultry Pilaf',
        ingredients: ['Raw Bird Thigh', 'Bird Egg', 'Goat Butter', 'Hylian Rice'],
        image: ''
    },
    {
        id: 61,
        meal: 'Gourmet Poultry Pilaf',
        ingredients: ['Raw Whole Bird', 'Bird Egg', 'Goat Butter', 'Hylian Rice'],
        image: ''
    },
    {
        id: 62,
        meal: 'Meat and Rice Bowl',
        ingredients: ['Raw Meat or Raw Bird Drumstick', 'Rock Salt', 'Hylian Rice'],
        image: ''
    },
    {
        id: 63,
        meal: 'Prime Meat and Rice Bowl',
        ingredients: ['Raw Prime Meat or Raw Bird Thigh', 'Rock Salt', 'Hylian Rice'],
        image: ''
    },
    {
        id: 64,
        meal: 'Gourmet Meat and Rice Bowl',
        ingredients: ['Raw Gourmet Meat or Raw Whole Bird', 'Rock Salt', 'Hylian Rice'],
        image: ''
    },
    {
        id: 65,
        meal: 'Glazed Meat',
        ingredients: ['Any meat', 'Courser Bee Honey'],
        image: ''
    },
    {
        id: 66,
        meal: 'Spiced Meat Skewer',
        ingredients: ['Raw Meat', 'Goron Spice'],
        image: ''
    },
    {
        id: 67,
        meal: 'Prime Spiced Meat Skewer',
        ingredients: ['Raw Prime Meat', 'Goron Spice'],
        image: ''
    },
    {
        id: 68,
        meal: 'Gourmet Spiced Meat Skewer',
        ingredients: ['Raw Gourmet Meat', 'Goron Spice'],
        image: ''
    },
    {
        id: 69,
        meal: 'Salt-Grilled Meat',
        ingredients: ['Raw Meat or Raw Bird Drumstick', 'Rock Salt'],
        image: ''
    },
    {
        id: 70,
        meal: 'Salt-Grilled Prime Meat',
        ingredients: ['Raw Prime Meat or Raw Bird Thigh', 'Rock Salt'],
        image: ''
    },
    {
        id: 71,
        meal: 'Salt-Grilled Gourmet Meat',
        ingredients: ['Raw Gourmet Meat or Raw Whole Bird', 'Rock Salt'],
        image: ''
    },
    {
        id: 72,
        meal: 'Copious Meat Skewers',
        ingredients: ['Any four different meats'],
        image: ''
    },
    {
        id: 73,
        meal: 'Pepper Steak',
        ingredients: ['Any meat', 'Spicy Pepper'],
        image: ''
    },
    {
        id: 74,
        meal: 'Steamed Meat',
        ingredients: ['Any meat', 'Any herb, vegetable, or flower'],
        image: ''
    },
    {
        id: 75,
        meal: 'Meat and Mushroom Skewer',
        ingredients: ['Any meat', 'Any mushroom'],
        image: ''
    },
    {
        id: 76,
        meal: 'Meat Skewer',
        ingredients: ['Any meat'],
        image: ''
    }
]
*/