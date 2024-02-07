const chineseMain = ["Char Siu", "Chicken Rice", "Peking duck"];
const chineseDrink = ["Yunnan Coffee", "Black Tea", "Kombucha"];
const chineseSnack = ["Bak Kwa", "Dumplings", "Spring Rolls"];
const chineseDessert = ["Chendol", "Almond Jelly", "Mooncake"];

const indianMain = ["Butter Chicken", "Chicken Biryani", "Masala Dosa", "Paneer Masala"];
const indianDrink = ["Mango Lassi", "Buttermilk", "Chai", "Badam Milk"];
const indianSnack = ["Samosa", "Murukku", "Pakora", "Dhokla"];
const indianDessert = ["Gulab Jamun", "Rasmalai", "Kulfi"];

const japaneseMain = ["Ramen", "Teriyaki Chicken Rice", "Udon", "Katsu"];
const japaneseDrink = ["Amazake", "Sake", "Matcha", "Royal Milk Tea"];
const japaneseSnack = ["Onigiri", "Caramel Corn", "Pocky", "Rice Crackers"];
const japaneseDessert = ["Sakura Mochi", "Hokkaido Baked Cheese Tarts", "Raindrop Cake", "Purin"];

const mexicanMain = ["Tamale", "Burrito", "Quesadilla", "Enchiladas"];
const mexicanDrink = ["Rompope", "Hibiscus Tea", "Carajillo"];
const mexicanSnack = ["Nachos", "Tacos", "Avacado Salsa", "chimichanga"];
const mexicanDessert = ["Mexican Hot Chocolate Pie", "Churros", "Flan Mexicano"];

const westernMain = ["Meat Pie", "Steak", "Turkey", "Fish and Chips"];
const westernDrink = ["Hot Chocolate", "Lemonade", "Root Beer"];
const westernSnack = ["Salad", "Maple Pancakes", "French Fries"];
const westernDessert = ["Chocolate Lava Cake", "Tiramisu", "Cinnamon Rolls", "Donuts", "Gingerbread Cookies"];

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
        case "all-cuisines":
            foodOptions = getFoodOptions(chineseMain, chineseDrink, chineseSnack, chineseDessert, indianMain, indianDrink, indianSnack, indianDessert, japaneseMain, japaneseDrink, japaneseSnack, japaneseDessert, mexicanMain, mexicanDrink, mexicanSnack, mexicanDessert, westernMain, westernDrink, westernSnack, westernDessert, foodType);
            break;   
        default:
            foodOptions = [];
    }

    const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
    console.log(randomFood)
    document.getElementById("randomFood").innerText = `Random Food: ${randomFood}`;
}

function getFoodOptions(main, drink, snack, dessert, foodType) {
    switch (foodType) {
        case "all-types":
            return main.concat(drink).concat(dessert).concat(snack)
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
