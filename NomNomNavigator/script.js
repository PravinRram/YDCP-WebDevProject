const chineseMain = [
    { name: "Char Siu Noodles", description: "A popular Cantonese dish featuring savory roasted pork served atop springy egg noodles, typically seasoned with a sweet and savory char siu sauce.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/CharSiuNoodles.jpeg", ytLink: "https://www.youtube.com/watch?v=n3oy7a1ciaA" }, 
    { name: "Chicken Rice", description: "A simple yet flavorful Asian dish featuring poached or roasted chicken served with seasoned rice, often accompanied by chili sauce and cucumber slices.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/ChickenRice.jpeg", ytLink: "https://www.youtube.com/watch?v=XPA3rn1XImY" }, 
    { name: "Peking Duck", description: "A famous Chinese dish featuring crispy roasted duck served with pancakes, hoisin sauce, and sliced scallions.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/PekingDuck.jpeg", ytLink: "https://www.youtube.com/watch?v=kjceiEJPT7o" },
    { name: "Chinese Eggplant Salad", description: "A cold dish featuring thinly sliced eggplant marinated in a flavorful dressing of soy sauce, vinegar, garlic, and chili oil, popular in Chinese cuisine.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/ChineseEggplantSalad.jpeg", ytLink: "https://www.youtube.com/watch?v=u0D2g5bwuSs" }
];
const chineseDrink = [
    { name: "Yunnan Coffee", description: "Coffee grown in the Yunnan province of China, known for its smooth and slightly fruity flavor profile.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/YunnanCoffee.webp", ytLink: "https://www.youtube.com/watch?v=3GvIH_hrlo4" }, 
    { name: "Black Tea", description: "A type of tea made from oxidized tea leaves, offering a robust flavor and caffeine kick.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Kombucha.webp", ytLink: "https://www.youtube.com/watch?v=D3Axb37lMWI" }, 
    { name: "Kombucha", description: "A fermented tea beverage known for its tangy flavor and potential health benefits due to its probiotic content.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/BlackTea.jpeg", ytLink: "https://www.youtube.com/watch?v=ULlV7bmM8lA" }
];
const chineseSnack = [
    { name: "Bak Kwa", description: "A Chinese-style jerky made from thinly sliced pieces of marinated pork, often sweet and savory in flavor.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/BakKwa.jpeg", ytLink: "https://www.youtube.com/watch?v=JcDOsnm9DIU" }, 
    { name: "Dumplings", description: "Small pockets of dough filled with various ingredients such as meat, vegetables, or seafood, commonly steamed, boiled, or fried in many cuisines worldwide.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Dumpling.jpeg", ytLink: "https://www.youtube.com/watch?v=J6xFRlG5Qxg" }, 
    { name: "Spring Rolls", description: "A popular Asian appetizer consisting of thinly wrapped rolls filled with vegetables, meat, and sometimes noodles, typically deep-fried until crispy.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/SpringRoll.jpeg", ytLink: "https://www.youtube.com/watch?v=-kd1pr8UfzQ" }
];
const chineseDessert = [
    { name: "Chendol", description: "A Southeast Asian dessert consisting of green rice-flour jelly, coconut milk, palm sugar syrup, and sometimes red beans and shaved ice.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Chendol.jpeg", ytLink: "https://www.youtube.com/watch?v=sdXtLAvhFfQ" }, 
    { name: "Mooncake", description: "A traditional Chinese pastry usually eaten during the Mid-Autumn Festival, filled with sweet lotus seed paste or red bean paste and often containing salted egg yolk, symbolizing unity and completeness.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/MoonCake.jpeg", ytLink: "https://www.youtube.com/watch?v=p5kRLCyN4Zc" }
];

const indianMain = [
    { name: "Butter Chicken", description: "A creamy and mildly spiced Indian curry dish made with tender chicken pieces simmered in a rich tomato and butter sauce.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/ButterChicken.webp", ytLink: "https://www.youtube.com/watch?v=a03U45jFxOI" },
    { name: "Chicken Biryani", description: "A flavourful Indian dish made with aromatic basmati rice, tender chicken, and a blend of spices.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/ChickenBiriyani.jpeg", ytLink: "https://www.youtube.com/watch?v=95BCU1n268w" },
    { name: "Masala Dosa", description: " A South Indian specialty consisting of a thin, crispy crepe made from fermented rice and lentil batter, filled with a spiced potato mixture.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/MasalaDosa.jpeg", ytLink: "https://www.youtube.com/watch?v=CCab5oh0ZOc" },
    { name: "Paneer Masala", description: "A popular Indian dish featuring cubes of paneer (Indian cottage cheese) cooked in a rich and flavorful tomato-based gravy, infused with aromatic spices like cumin, coriander, and garam masala.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/PaneerMasala.jpeg", ytLink: "https://www.youtube.com/watch?v=U1LVDFwi8qI" }
];

const indianDrink = [
    { name: "Mango Lassi", description: "A popular Indian drink made from ripe mangoes, yogurt, milk, and sugar, blended into a smooth and creamy concoction.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/MangoLassi.jpeg", ytLink: "https://www.youtube.com/watch?v=oDkevUiEVvw" },
    { name: "Buttermilk", description: "A tangy and refreshing dairy beverage made from the liquid left over after churning butter from cream.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/ButterMilk.jpeg", ytLink: "https://www.youtube.com/watch?v=k-v7jZFFoqc" },
    { name: "Chai", description: "A spiced tea beverage originating from the Indian subcontinent, typically made with black tea, milk, sugar, and spices such as cardamom, cinnamon, and ginger.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Chai.webp", ytLink: "https://www.youtube.com/watch?v=8fQAxZahx_U" },
    { name: "Badam Milk", description: "A creamy Indian beverage made from milk infused with ground almonds, flavored with saffron and cardamom.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/BadamMilk.jpeg", ytLink: "https://www.youtube.com/watch?v=KOSqfY0AT0s" }
];
const indianSnack = [
    { name: "Samosa", description: "A popular Indian snack consisting of a crispy pastry shell filled with spiced potatoes, peas, and sometimes meat, deep-fried until golden brown.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Samosa.webp", ytLink: "https://www.youtube.com/watch?v=3OZn-iCGf5s" },
    { name: "Murukku", description: "A crunchy South Indian snack made from rice flour and urad dal flour, seasoned with spices and deep-fried.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Murukku.jpeg", ytLink: "https://www.youtube.com/watch?v=Xnp50GCLYQ8" },
    { name: "Pakora", description: "Deep-fried fritters made from vegetables such as potatoes, onions, or spinach, coated in seasoned chickpea flour batter, popular in Indian cuisine.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Pakora.jpeg", ytLink: "https://www.youtube.com/watch?v=AVAc5CFQZIA" },
    { name: "Dhokla", description: "A savory Indian snack made from fermented rice and chickpea flour, steamed into a fluffy cake-like texture and typically served with chutney.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Dhokla.webp", ytLink: "https://www.youtube.com/watch?v=ONrkIBvLqhY" }
];
const indianDessert = [
    { name: "Gulab Jamun", description: "A popular Indian dessert made from deep-fried dough balls soaked in a sugary syrup, often flavored with cardamom and rose water.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/GulabJamun.jpeg", ytLink: "https://www.youtube.com/watch?v=NH1yqSEpJLY" },
    { name: "Rasmalai", description: "A creamy Indian dessert made from soft cheese dumplings soaked in sweetened, saffron-infused milk.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Rasmalai.jpeg", ytLink: "https://www.youtube.com/watch?v=Ap9DEjM8nGg" },
    { name: "Kulfi", description: "A traditional Indian frozen dessert similar to ice cream, made with thickened milk and flavored with cardamom, saffron, or pistachios.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Kulfi.jpeg", ytLink: "https://www.youtube.com/watch?v=f6D7A6-QNl8" }
];

const japaneseMain = [
    { name: "Ramen", description: "A Japanese noodle soup dish featuring wheat noodles served in a flavorful broth, often topped with sliced pork, vegetables, and a boiled egg.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Ramen.jpeg", ytLink: "https://www.youtube.com/watch?v=r3_tcQiyGG8" },
    { name: "Teriyaki Chicken Rice", description: "Grilled or pan-fried chicken marinated in a sweet and savory teriyaki sauce, served over steamed rice.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/TeriyakiChickenRice.webp", ytLink: "https://www.youtube.com/watch?v=-jfcBcbtJZ0" },
    { name: "Udon", description: "Thick wheat flour noodles commonly used in Japanese cuisine, served in various hot or cold dishes with broth or sauce.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Udon.jpeg", ytLink: "https://www.youtube.com/watch?v=dzdiyYCnPPI" },
    { name: "Katsu", description: "A Japanese dish consisting of breaded and deep-fried cutlets of meat, typically pork or chicken.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Katsu.jpeg", ytLink: "https://www.youtube.com/watch?v=D6diqH8RF4U" }
];
const japaneseDrink = [
    { name: "Amazake", description: "A sweet wine known for its delicate and luscious flavors, often enjoyed as a dessert accompaniment or standalone indulgence.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Amazake.jpeg", ytLink: "https://www.youtube.com/watch?v=v7cpi8OAf6k" },
    { name: "Sake", description: "A Japanese rice wine with a diverse range of flavors and aromas, often served chilled or warmed.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Sake.webp", ytLink: "https://www.youtube.com/watch?v=A3ep5XGdV9I" },
    { name: "Matcha Green Tea", description: "A traditional Japanese beverage crafted from shade-grown green tea leaves, meticulously ground into a vibrant green powder, celebrated for its rich umami flavor, potent antioxidants, and calming effects.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Matcha.jpeg", ytLink: "https://www.youtube.com/watch?v=pgIBoILPmR8" },
    { name: "Royal Milk Tea", description: "A popular Japanese beverage made by blending black tea with milk and sweetening it with sugar or honey.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/RoyalMilkTea.webp", ytLink: "https://www.youtube.com/watch?v=Xn_XpOYgUi8" }
];
const japaneseSnack = [
    { name: "Onigiri", description: "Japanese rice balls often filled with savory ingredients such as pickled plum, salmon, or tuna, and wrapped in seaweed.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Onigiri.jpeg", ytLink: "https://www.youtube.com/watch?v=hGp6grK1Cwo" },
    { name: "Caramel Corn", description: "Popcorn coated in a sweet caramel glaze, often enjoyed as a snack or dessert.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/CaramelCorn.png", ytLink: "https://www.youtube.com/watch?v=qVuGe_qYm0E" },
    { name: "Pocky", description: "A popular Japanese snack consisting of biscuit sticks dipped in chocolate or other flavored coatings.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Pocky.jpeg", ytLink: "https://www.youtube.com/watch?v=h71RBF73G8k" },
    { name: "Rice Crackers", description: "Crispy snacks made from rice flour, often seasoned with soy sauce, seaweed, or other flavorings, popular in East Asian cuisine.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/RiceCrackers.jpeg", ytLink: "https://www.youtube.com/watch?v=V7yHziEe214" }
];
const japaneseDessert = [
    { name: "Sakura Mochi", description: "A traditional Japanese sweet consisting of a rice cake filled with sweet red bean paste and wrapped in a pickled cherry blossom leaf.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/SakuraMochi.jpeg", ytLink: "https://www.youtube.com/watch?v=wroCdZOy3BA" },
    { name: "Hokkaido Baked Cheese Tarts", description: "Flaky pastry filled with a creamy and velvety cheese mixture, originating from Hokkaido, Japan.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Tart.jpeg", ytLink: "https://www.youtube.com/watch?v=A5P_iMxH8zc" },
    { name: "Raindrop Cake", description: "A translucent and gelatinous dessert from Japan resembling a droplet of water, often served with sweet syrup and roasted soybean flour.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/RaindropCake.jpeg", ytLink: "https://www.youtube.com/watch?v=XW5rCL6GCAY" },
    { name: "Purin", description: "A silky and creamy Japanese custard pudding with a caramel sauce topping.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Purin.jpeg", ytLink: "https://www.youtube.com/watch?v=xOnxJ3nKvRE" }
];

const mexicanMain = [
    { name: "Tamale", description: "A traditional Latin American dish made of masa dough filled with various ingredients such as meats, cheeses, or vegetables, wrapped in corn husks and steamed.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Tamales.jpeg", ytLink: "https://www.youtube.com/watch?v=4xiwU4mNDwY" },
    { name: "Burrito", description: "A Mexican dish consisting of a flour tortilla wrapped around a filling of beans, meat, cheese, rice, and other ingredients.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Burrito.webp", ytLink: "https://www.youtube.com/watch?v=krkf7ObsTM4" },
    { name: "Quesadilla", description: "A Mexican dish consisting of a tortilla filled with cheese and often other ingredients such as meat, beans, or vegetables, folded in half and grilled until crispy.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Quesadilla.webp", ytLink: "https://www.youtube.com/watch?v=mUA5m-113HQ" },
    { name: "Enchiladas", description: "A Mexican dish consisting of rolled tortillas filled with a savory filling such as meat or cheese, topped with chili sauce and baked until bubbly.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Enchiladas.webp", ytLink: "https://www.youtube.com/watch?v=jRlTxTNRo1s" }
];
const mexicanDrink = [
    { name: "Rompope", description: "A Mexican version of eggnog, featuring a rich and creamy drink made with milk, sugar, eggs, and flavored with vanilla and spices.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Rompope.webp", ytLink: "https://www.youtube.com/watch?v=W-5JVUfSTtk" },
    { name: "Hibiscus Tea", description: "A herbal tea made from the dried calyces of the hibiscus flower, known for its vibrant red color and tart flavor.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/HibiscusTea.jpeg", ytLink: "https://www.youtube.com/watch?v=i7S-rLpY5VI" },
    { name: "Carajillo", description: "A historic cocktail of Spanish-origin that is made with espresso and either brandy, rum, or whiskey, often served over ice.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Carajillo.webp", ytLink: "https://www.youtube.com/watch?v=7O_ml6GNM9Q" }
];
const mexicanSnack = [
    { name: "Nachos", description: "A popular Tex-Mex dish featuring tortilla chips topped with melted cheese and often additional toppings such as salsa, guacamole, and sour cream.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Nachos.jpeg", ytLink: "https://www.youtube.com/watch?v=7O_ml6GNM9Q" },
    { name: "Tacos", description: "A Mexican dish featuring a folded or rolled corn or wheat tortilla filled with various ingredients such as meat, cheese, vegetables, and salsa.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Taco.jpeg", ytLink: "https://www.youtube.com/watch?v=ALeF0GUCSSk" },
    { name: "Chimichanga", description: "A deep-fried burrito typically filled with a savory mixture of meat, beans, cheese, and spices, popular in Southwestern cuisine.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Chimichanga.jpeg", ytLink: "https://www.youtube.com/watch?v=nJU0_XfEoXk" } 
];
const mexicanDessert = [
    { name: "Mexican Hot Chocolate Pie", description: "A rich and indulgent dessert featuring a chocolate filling flavored with cinnamon and chili peppers, served in a pie crust.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/MexicanHotChocolatePie.jpeg", ytLink: "https://www.youtube.com/watch?v=h-h8DuYZ0LE" },
    { name: "Churros", description: "Fried dough pastry typically dusted with cinnamon sugar, often served with chocolate sauce or caramel for dipping, popular in Spanish and Latin American cuisines.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Churros.webp", ytLink: "https://www.youtube.com/watch?v=453mpKHVaBs" },
    { name: "Flan Mexicano", description: "A creamy and smooth caramel custard dessert popular in Mexican cuisine, made with eggs, milk, sugar, and vanilla.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/FlanMexicano.jpeg", ytLink: "https://www.youtube.com/watch?v=khmCp5aVXZg" }
];

const westernMain = [
    { name: "Meat Pie", description: "A savoury pie filled with a mixture of minced meat, gravy, and often vegetables, enclosed in pastry crust.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/MeatPie.jpeg", ytLink: "https://www.youtube.com/watch?v=hwKtoO3OmeU" },
    { name: "Steak", description: "A tender and flavorful cut of beef, typically grilled or pan-seared to perfection.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Steak.jpeg", ytLink: "https://www.youtube.com/watch?v=nsw0Px-Pho8" },
    { name: "Turkey", description: "A festive dish commonly served as the centerpiece of Thanksgiving or Christmas meals, prepared by roasting a whole turkey until golden brown and juicy.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Turkey.jpeg", ytLink: "https://www.youtube.com/watch?v=uRFEDgbSQU8" },
    { name: "Fish and Chips", description: "A classic British dish featuring battered and deep-fried fish served with crispy fries, often accompanied by tartar sauce and malt vinegar.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/FishAndChips.webp", ytLink: "https://www.youtube.com/watch?v=CYEFR_kg6Us" }
];
const westernDrink = [
    { name: "Hot Chocolate", description: "A warm and comforting beverage made from melted chocolate or cocoa powder mixed with milk or water, often served with whipped cream or marshmallows.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/HotChocolate.jpeg", ytLink: "https://www.youtube.com/watch?v=pn-W0DVQw8Y" },
    { name: "Lemonade", description: "A refreshing beverage made from freshly squeezed lemon juice, water, and sugar, served over ice.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Lemonade.jpeg", ytLink: "https://www.youtube.com/watch?v=5_sHXJC9ocA" },
    { name: "Root Beer", description: "A sweet and carbonated soft drink flavored with extracts from the sassafras tree, traditionally brewed with spices such as cinnamon and cloves.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/RootBeer.webp", ytLink: "https://www.youtube.com/watch?v=LSYeOabmD-8" }
];
const westernSnack = [
    { name: "Salad", description: "A dish typically consisting of mixed greens, vegetables, and often additional ingredients like nuts, cheese, or proteins, served with dressing.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Salad.jpeg", ytLink: "https://www.youtube.com/watch?v=SpI3QF_Iauc" },
    { name: "Maple Pancakes", description: "Fluffy pancakes topped with maple syrup, a classic breakfast dish popular in North America.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/MaplePancakes.jpeg", ytLink: "https://www.youtube.com/watch?v=9zCVCL4V8JQ" },
];
const westernDessert = [
    { name: "Chocolate Lava Cake", description: "A decadent dessert featuring a rich chocolate cake with a gooey, molten chocolate center.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/ChocolateLavaCake.jpeg", ytLink: "https://www.youtube.com/watch?v=gW3JtHpuzrk" },
    { name: "Tiramisu", description: "An Italian dessert made with layers of coffee-soaked ladyfingers and a creamy mixture of mascarpone cheese, eggs, and sugar, dusted with cocoa powder.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Tiramisu.jpeg", ytLink: "https://www.youtube.com/watch?v=87V4nizNJiE" },
    { name: "Cinnamon Rolls", description: "Soft and fluffy rolls of sweet dough filled with cinnamon and sugar, typically topped with cream cheese frosting.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/CinnamonRolls.webp", ytLink: "https://www.youtube.com/watch?v=Fp1mMF2-hMo" },
    { name: "Donuts", description: "Deep-fried pastry dough typically shaped into rings or filled with various sweet fillings, often coated with sugar, glaze, or icing.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/Donuts.jpeg", ytLink: "https://www.youtube.com/watch?v=aFaQ2cxYxbM" },
    { name: "Gingerbread Cookies", description: "Spiced cookies made from gingerbread dough, often shaped into festive shapes and decorated with icing or candy.", imageSrc: "https://raw.githubusercontent.com/PravinRram/YDCP-WebDevProject/main/NomNomNavigator/images/GingerbreadCookies.jpeg", ytLink: "https://www.youtube.com/watch?v=brZVMqRlc5w" }
];

function generateRandomFood() {

    const ytVidContainer = document.getElementById("video-container");
    const foodImage = document.getElementById("randomFoodImg");
    const foodName = document.getElementById("randomFoodName");
    const foodDescript = document.getElementById("randomFoodDescription");
    const loader = document.getElementById("custom-loader");

    loader.style.display = 'block';

    setTimeout(() => {

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
/*        case "all-cuisines":
            foodOptions = getFoodOptions(chineseMain).concat(chineseDrink).concat(chineseSnack).concat(chineseDessert).concat(indianMain).concat(indianDrink).concat(indianSnack).concat(indianDessert).concat(japaneseMain).concat(japaneseDrink).concat(japaneseSnack).concat(japaneseDessert).concat(mexicanMain).concat(mexicanDrink).concat(mexicanSnack).concat(mexicanDessert).concat(westernMain).concat(westernDrink).concat(westernSnack).concat(westernDessert).concat(foodType);
            console.log(foodOptions);
            break;  */
        default:
            foodOptions = [];
    }

    const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
   
    document.getElementById("randomFoodName").innerText = randomFood.name;
    document.getElementById("randomFoodDescription").innerText = randomFood.description;
    document.getElementById("randomFoodImg").src = randomFood.imageSrc;
    document.getElementById("randomFoodVideo").href = randomFood.ytLink;

    ytVidContainer.style.display = 'block';
    foodName.style.display = 'block';
    foodImage.style.display = 'block';
    foodDescript.style.display = 'block';
    loader.style.display = 'none';

    }, 1500);
}

function getFoodOptions(main, drink, snack, dessert, foodType) {
    switch (foodType) {
/*       case "all-types":
            return main.concat(drink).concat(dessert).concat(snack)  */
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

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'none';
}