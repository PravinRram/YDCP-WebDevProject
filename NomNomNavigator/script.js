const chineseMain = [
    { name: "Char Siu", description: "test", imageSrc: "" }, 
    { name: "Chicken Rice", description: "test", imageSrc: "" }, 
    { name: "Peking Duck", description: "test", imageSrc: "" }
];
const chineseDrink = [
    { name: "Yunnan Coffee", description: "test", imageSrc: "" }, 
    { name: "Black Tea", description: "test", imageSrc: "" }, 
    { name: "Kombucha", description: "test", imageSrc: "" }
];
const chineseSnack = [
    { name: "Bak Kwa", description: "test", imageSrc: "" }, 
    { name: "Dumplings", description: "test", imageSrc: "" }, 
    { name: "Spring Rolls", description: "test", imageSrc: "" }
];
const chineseDessert = [
    { name: "Chendol", description: "test", imageSrc: "" }, 
    { name: "Almond Jelly", description: "test", imageSrc: "" }, 
    { name: "Mooncake", description: "test", imageSrc: "" }
];

const indianMain = [
    { name: "Butter Chicken", description: "test", imageSrc: "" },
    { name: "Chicken Biryani", description: "test", imageSrc: "" },
    { name: "Masala Dosa", description: "test", imageSrc: "" },
    { name: "Paneer Masala", description: "test", imageSrc: "" }
];
const indianDrink = [
    { name: "Mango Lassi", description: "test", imageSrc: "" },
    { name: "Buttermilk", description: "test", imageSrc: "" },
    { name: "Chai", description: "test", imageSrc: "" },
    { name: "Badam Milk", description: "test", imageSrc: "" }
];
const indianSnack = [
    { name: "Samosa", description: "test", imageSrc: "" },
    { name: "Murukku", description: "test", imageSrc: "" },
    { name: "Pakora", description: "test", imageSrc: "" },
    { name: "Dhokla", description: "test", imageSrc: "" }
];
const indianDessert = [
    { name: "Gulab Jamun", description: "test", imageSrc: "" },
    { name: "Rasmalai", description: "test", imageSrc: "" },
    { name: "Kulfi", description: "test", imageSrc: "" }
];

const japaneseMain = [
    { name: "Ramen", description: "test", imageSrc: "" },
    { name: "Teriyaki Chicken Rice", description: "test", imageSrc: "" },
    { name: "Udon", description: "test", imageSrc: "" },
    { name: "Katsu", description: "test", imageSrc: "" }
];
const japaneseDrink = [
    { name: "Amazake", description: "test", imageSrc: "" },
    { name: "Sake", description: "test", imageSrc: "" },
    { name: "Matcha", description: "test", imageSrc: "" },
    { name: "Royal Milk Tea", description: "test", imageSrc: "" }
];
const japaneseSnack = [
    { name: "Onigiri", description: "test", imageSrc: "" },
    { name: "Caramel Corn", description: "test", imageSrc: "" },
    { name: "Pocky", description: "test", imageSrc: "" },
    { name: "Rice Crackers", description: "test", imageSrc: "" }
];
const japaneseDessert = [
    { name: "Sakura Mochi", description: "test", imageSrc: "" },
    { name: "Hokkaido Baked Cheese Tarts", description: "test", imageSrc: "" },
    { name: "Raindrop Cake", description: "test", imageSrc: "" },
    { name: "Purin", description: "test", imageSrc: "" }
];

const mexicanMain = [
    { name: "Tamale", description: "test", imageSrc: "" },
    { name: "Burrito", description: "test", imageSrc: "" },
    { name: "Quesadilla", description: "test", imageSrc: "" },
    { name: "Enchiladas", description: "test", imageSrc: "" }
];
const mexicanDrink = [
    { name: "Rompope", description: "test", imageSrc: "" },
    { name: "Hibiscus Tea", description: "test", imageSrc: "" },
    { name: "Carajillo", description: "test", imageSrc: "" }
];
const mexicanSnack = [
    { name: "Nachos", description: "test", imageSrc: "" },
    { name: "Tacos", description: "test", imageSrc: "" },
    { name: "Avacado Salsa", description: "test", imageSrc: "" },
    { name: "Chimichanga", description: "test", imageSrc: "" } 
];
const mexicanDessert = [
    { name: "Mexican Hot Chocolate Pie", description: "test", imageSrc: "" },
    { name: "Churros", description: "test", imageSrc: "" },
    { name: "Flan Mexicano", description: "test", imageSrc: "" }
];

const westernMain = [
    { name: "Meat Pie", description: "test", imageSrc: "" },
    { name: "Steak", description: "test", imageSrc: "" },
    { name: "Turkey", description: "test", imageSrc: "" },
    { name: "Fish and Chips", description: "test", imageSrc: "" }
];
const westernDrink = [
    { name: "Hot Chocolate", description: "test", imageSrc: "" },
    { name: "Lemonade", description: "test", imageSrc: "" },
    { name: "Root Beer", description: "test", imageSrc: "" }
];
const westernSnack = [
    { name: "Salad", description: "test", imageSrc: "" },
    { name: "Maple Pancakes", description: "test", imageSrc: "" },
    { name: "French Fries", description: "test", imageSrc: "" }
];
const westernDessert = [
    { name: "Chocolate Lava Cake", description: "test", imageSrc: "" },
    { name: "Tiramisu", description: "test", imageSrc: "" },
    { name: "Cinnamon Rolls", description: "test", imageSrc: "" },
    { name: "Donuts", description: "test", imageSrc: "" },
    { name: "Gingerbread Cookies", description: "test", imageSrc: "" }
];

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
            foodOptions = getFoodOptions(chineseMain).concat(chineseDrink).concat(chineseSnack).concat(chineseDessert).concat(indianMain).concat(indianDrink).concat(indianSnack).concat(indianDessert).concat(japaneseMain).concat(japaneseDrink).concat(japaneseSnack).concat(japaneseDessert).concat(mexicanMain).concat(mexicanDrink).concat(mexicanSnack).concat(mexicanDessert).concat(westernMain).concat(westernDrink).concat(westernSnack).concat(westernDessert).concat(foodType);
            console.log(foodOptions);
            break;
        default:
            foodOptions = [];
    }

    const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
   
    document.getElementById("randomFoodName").innerText = randomFood.name;
    document.getElementById("randomFoodDescription").innerText = randomFood.description;
    document.getElementById("randomFoodImg").src = randomFood.imageSrc;
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
