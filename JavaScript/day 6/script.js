// Create a Car object with properties
const car = {
    model: "BMW",
    color: "White",
    numWheels: 4,
    engine: null,
    drive: function() {
        return this.engine;
    }
};

const engine = {
    cylinders: 4,
    size: 5.0
};


car.engine = engine;


const carEngine = car.drive();
console.log("Car engine details:", carEngine);