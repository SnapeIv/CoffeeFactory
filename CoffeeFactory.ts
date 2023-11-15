class CoffeeFactory {
    createCoffee(type: string): Coffee | null {
        switch (type.toLowerCase()) {
            case 'espresso':
                return new Espresso();
            case 'cappuccino':
                return new Cappuccino();
            case 'americano':
                return new Americano();
            default:
                console.log("Invalid coffee type");
                return null;
        }
    }
}