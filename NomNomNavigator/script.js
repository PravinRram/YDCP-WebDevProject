const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>(
    setTimeout(() => {
        splash.classList.add('display-none');
    }, "2000")
))

function goToCategory() {
    var selectedCategory = document.getElementById("category").value

    if (selectedCategory == "Dessert") {
        window.location.href = "dessert.html"
    }

    // fill in the remaining options
}

function randomDessert() {
    var randomNumber = Math.floor(Math.random() * 6)

    if (randomNumber == 0) {
        document.getElementById("randomName").innerHTML = "Cheesecake"
        document.getElementById("randomRecipe").innerHTML = "Cheese, Biscuits"
    }
    else if (randomNumber == 1) {
        document.getElementById("randomName").innerHTML = "Chendol"
        document.getElementById("randomRecipe").innerHTML = "Jelly, Ice, Red Bean"
    }
    else {
        document.getElementById("randomName").innerHTML = "Ice Cream"
        document.getElementById("randomRecipe").innerHTML = "Milk, Chocolate"
    }
}