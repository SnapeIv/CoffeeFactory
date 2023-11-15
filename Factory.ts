const coffeeFactory = new CoffeeFactory();

const espresso = coffeeFactory.createCoffee('espresso');
if (espresso) {
    espresso.grindCoffee();
    espresso.makeCoffee();
    espresso.pourIntoCup();
}

const cappuccino = coffeeFactory.createCoffee('cappuccino');
if (cappuccino) {
    cappuccino.grindCoffee();
    cappuccino.makeCoffee();
    cappuccino.pourIntoCup();
}

const americano = coffeeFactory.createCoffee('americano');
if (americano) {
    americano.grindCoffee();
    americano.makeCoffee();
    americano.pourIntoCup();
}
