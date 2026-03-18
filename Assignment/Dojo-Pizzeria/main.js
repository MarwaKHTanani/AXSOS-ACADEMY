function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("hand tossed", "traditional", ["provolone"], ["mustard", "fried chicken", "olives"]);
var p4 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["chicken"]);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

function randomPizza() {
    var crusts = ["deep dish", "hand tossed"];
    var sauces = ["traditional", "marinara", "alfredo"];
    var cheeses = ["mozzarella", "feta", "provolone"];
    var toppings = ["pepperoni", "mushrooms", "olives", "onions", "mustard", "fried chicken", "chicken"];
    var pizza = {};
    pizza.crust = crusts[Math.floor(Math.random() * crusts.length)];
    pizza.sauce = sauces[Math.floor(Math.random() * sauces.length)];
    pizza.cheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    return pizza;
}
console.log(randomPizza());

