function Pizza(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

Pizza.prototype.cost = function() {
  var inputtedPizzaSize = $("select#pizza-size").val();
  var inputtedPizzaTopping = $("[type='checkbox']:checked").length;
  // var inputtedPizzaTopping = parseInt($("input#pizza-topping").val());
  var inputtedPizzaQuantity = parseInt($("input#pizza-quantity").val());
  var baseCost = 10;
  var finalCost = 0;
  if (inputtedPizzaSize === "large") {
    finalCost = (baseCost + 10) * inputtedPizzaQuantity;
  } else if (inputtedPizzaSize === "medium") {
    finalCost = (baseCost + 5) * inputtedPizzaQuantity;
  } else {
    finalCost = (baseCost + 3) * inputtedPizzaQuantity;
  }
  if (inputtedPizzaTopping >= 1) {
    finalCost += (inputtedPizzaTopping * 2) * inputtedPizzaQuantity;
    return finalCost;
  }
}

$(document).ready(function() {
  $("form#pizza-form").submit(function(event){
  event.preventDefault();
  var inputtedPizzaSize = $(this).find("select#pizza-size").val();
  var inputtedPizzaTopping = $("[type='checkbox']:checked").length;
  var inputtedPizzaQuantity = $(this).find("input#pizza-quantity").val();
  var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaTopping);
  newPizza.price = newPizza.cost();
  $("div#pizza").remove();
  $("div.container").append("<div id='pizza'>" + "<p>Pizza Size:  " +
                            newPizza.pizzaSize + "</p>" +
                            "<p>Toppings:  " + newPizza.pizzaTopping + "</p>" +
                            "<p>Quantity:  " + inputtedPizzaQuantity + "</p>" +
                            "<p>Pizza Price:  $" + newPizza.price + "</p>" +
                            "</div>");
  });

});
