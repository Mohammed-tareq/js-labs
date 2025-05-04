class Engine {

    static #count = 0;

    constructor(source) {
        if (new.target.name === "Engine")
            throw new Error("this class cannot  be  instantiated");

        this.source = source;

        Engine.#count++;
    }

    get getCount(){
        return Engine.#count;
    }
}

class Car extends Engine {

    constructor (top , left ,source){
        super(source);
        this.top = top;
        this.left = left;
    }

    set setTop(newTop){
        this.top = newTop;

    }

    set setLeft(newLeft){

        this.left=newLeft;

    }

    moveLeft(step){
        this.setLeft(this.left - step);

    }

    moveRight(step){
        this.setLeft(this.left + step);
    }

    changeStyle(style) {
        for (let  [property, value] of Object.entries(style)) {
            this.element.style[property] = value;
        }
    }

    moveCar(direction) {
        const step = 5;
        const move = setInterval(() => {
            if (direction === 'left') {
                this.moveLeft(step);
            } else if (direction === 'right') {
                this.moveRight(step);
            }

            const carRect = this.element.getBoundingClientRect();
            if (carRect.left <= 0 || carRect.right >= window.innerWidth) {
                clearInterval(move);
            }
        }, 300);
    }

    
}

