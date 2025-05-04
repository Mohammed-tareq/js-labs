

export default class Car{
    constructor(model,year){
        this.model=model;
        this.year=year;
    }

    toString(){
        return `this car model : ${this.model} made in year ${this.year}`;
    }
}