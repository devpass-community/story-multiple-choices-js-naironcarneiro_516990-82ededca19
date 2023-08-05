function chooseProduct(segment) {
  if (segment == "Beverage") {
    return "Soda";
  } else if (segment == "Fruit") {
    return "Apple";
  } else return "Soap";
}

module.exports = chooseProduct;
