var faker = require('faker');

console.log("==================");
console.log("WELCOME TO MY SHOP");
console.log("==================");


for (var i = 0; i < 10; i++) {
    var c = faker.commerce;
    console.log(c.productName() + " - £" + c.price());
}
