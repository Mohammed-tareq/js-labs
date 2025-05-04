


import Car from "./car.js";


export default class FlyCar extends Car {
    constructor(model, year) {
        super(model, year);
        this.canFly = true;
    }

    toString(){
        return super.toString() + "i can fly";
    }
}