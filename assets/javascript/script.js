tacoOne = {
    name: "soft",
    // softTummyFill: {},
};
tacoTwo = {
    name: "grilled",
    // grilledTummyFill: {},
};
tacoThree = {
    name: "hard",
    // hardTummyFill: {},
};
tacoFour = {
    name: "bowl",
    // bowlTummyFill: "",
};
var wins = 0;
$("#wins").text("Full Tummies: " + wins);
var losses = 0;
$("#losses").text("Guts Busted: " + losses);


var hungerLevel;
var fullness;

var bowlTummyFill;
var grilledTummyFill;
var hardTummyFill;
var softTummyFill;


function fullTummy() {
    alert("SATISFIED!");
    // $("#decor").hide;
    wins++;
    $("#wins").text("Full Tummies: " + wins);
}
function gutBusted() {
    alert("GUT BUSTED");
    // $("#decor").hide;
    losses++;
    $("#losses").text("Guts Busted: " + losses);
}

function playAgain() {
    // $("#decor").hide;
    fullness = 0;
    $("#tummyFullness").html("Tummy Fullness: " + fullness);
    // create a random number and assign it to HUNGER LEVEL
    hungerLevel = Math.floor(Math.random() * 120) + 19;
    console.log("Hunger level: " + hungerLevel);
    $("#hungerLevel").html("Hunger Level: " + hungerLevel);
    //assign random values to objects / tacos
    bowlTummyFill = Math.floor(Math.random() * 12) + 1;
    grilledTummyFill = Math.floor(Math.random() * 12) + 1;
    softTummyFill = Math.floor(Math.random() * 12) + 1;
    hardTummyFill = Math.floor(Math.random() * 12) + 1;
}

// press button to start game / look at a menu
function startGame() {
    fullness = 0;
    // create a random number and assign it to HUNGER LEVEL
    hungerLevel = Math.floor(Math.random() * 120) + 19;
    console.log("Hunger level: " + hungerLevel);
    $("#hungerLevel").html("Hunger Level: " + hungerLevel);
    
    //assign random values to objects / tacos
    bowlTummyFill = Math.floor(Math.random() * 12) + 1;
    grilledTummyFill = Math.floor(Math.random() * 12) + 1;
    softTummyFill = Math.floor(Math.random() * 12) + 1;
    hardTummyFill = Math.floor(Math.random() * 12) + 1;

    //click functions for each taco / and write to html
    $("#tacoOne").click(function () {
        // $("#decor").show.html("Soft Taco!");
        fullness = fullness + softTummyFill;
        $("#tummyFullness").html("Tummy Fullness: " + fullness);
        if (fullness === hungerLevel) {
            fullTummy();
            playAgain();
        } else if (fullness > hungerLevel) {
            gutBusted();
            playAgain();
        }
    })

    $("#tacoTwo").click(function () {
        // $("#decor").show.html("Grilled Taco!");
        fullness = fullness + grilledTummyFill;
        $("#tummyFullness").html("Tummy Fullness: " + fullness);
        if (fullness === hungerLevel) {
            fullTummy();
            playAgain();
        } else if (fullness > hungerLevel) {
            gutBusted();
            playAgain();
        }
    })

    $("#tacoThree").click(function () {
        fullness = fullness + hardTummyFill;
        // $("#decor").show.html("Hard Taco<br>Crunch!");
        $("#tummyFullness").html("Tummy Fullness: " + fullness);
        if (fullness === hungerLevel) {
            fullTummy();
            playAgain();
        } else if (fullness > hungerLevel) {
            gutBusted();
            playAgain();
        }
    })

    $("#tacoFour").click(function () {
        fullness = fullness + bowlTummyFill;
        // $("#decor").show.html("Taco Bowl!<br>Cool");
        $("#tummyFullness").html("Tummy Fullness: " + fullness);
        if (fullness === hungerLevel) {
            fullTummy();
            playAgain();
        } else if (fullness > hungerLevel) {
            gutBusted();
            playAgain();
        }
    });




};