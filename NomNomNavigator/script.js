const chineseMain = ["Char Siu", "Chicken Rice", "Peking duck"];
const chineseDrink = ["Yunnan Coffee", "Balck Tea", "Kombucha"];
const chineseSnack = ["Bak Kwa", "Dumplings", "Spring Rolls"];
const chineseDessert = ["Chendol", "Almond Jelly", "Mooncake"];

const indianMain = ["Butter Chicken", "Chicken Biryani", "Masala Dosa", "Paneer Masala"];
const indianDrink = ["Mango Lassi", "Buttermilk", "Chai", "Badam Milk"];
const indianSnack = ["Samosa", "Murukku", "Pakora", "Dhokla"];
const indianDessert = ["Gulab Jamun", "Rasmalai", "Kulfi"];

const japaneseMain = ["Ramen", "Teriyaki Chicken Rice", "Udon", "Katsu"];
const japaneseDrink = ["Sakura Mochi", "Hokkaido Baked Cheese Tarts"];
const japaneseSnack = [];
const japaneseDessert = [];

const mexicanMain = [];
const mexicanDrink = [];
const mexicanSnack = [];
const mexicanDessert = [];

const westernMain = [];
const westernDrink = [];
const westernSnack = [];
const westernDessert = [];

function generateRandomFood() {
    const cuisine = document.getElementById("cuisines").value;
    const foodType = document.getElementById("types").value;
    let foodOptions;

    switch (cuisine) {
        case "chinese":
            foodOptions = getFoodOptions(chineseMain, chineseDrink, chineseSnack, chineseDessert, foodType);
            break;
        case "indian":
            foodOptions = getFoodOptions(indianMain, indianDrink, indianSnack, indianDessert, foodType);
            break;
        case "japanese":
            foodOptions = getFoodOptions(japaneseMain, japaneseDrink, japaneseSnack, japaneseDessert, foodType);
            break;
        case "mexican":
            foodOptions = getFoodOptions(mexicanMain, mexicanDrink, mexicanSnack, mexicanDessert, foodType);
            break;
        case "western":
            foodOptions = getFoodOptions(westernMain, westernDrink, westernSnack, westernDessert, foodType);
            break;
        default:
            foodOptions = [];
    }

    const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
    document.getElementById("randomFood").innerText = `Random Food: ${randomFood}`;
}

function getFoodOptions(main, drink, snack, dessert, foodType) {
    switch (foodType) {
        case "main":
            return main;
        case "drink":
            return drink;
        case "snack":
            return snack;
        case "dessert":
            return dessert;
        default:
            return [];
    }
}
