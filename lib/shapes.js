// const Shapes = require('./shapes.test');

//Generic Shape Class
class Shape {

    constructor (shape, scolor, tcolor, text){
        this.shape = shape;
        this.scolor = scolor;
        this.tcolor = tcolor;
        this.text = text;
    }
    render(){
        return `test`;
    }
}

//this class represents the square shape.
class Square extends Shape {

    constructor(shape, scolor, tcolor){
        this.shape = shape;
        this.scolor = scolor;
        this.tcolor = tcolor;
        this.text = text;
}
render(){
    return  `<svg version="1.1" width="300" height="300">
        <rect x="50" y="20" rx="10" ry="10" width="200" height="200"
        style="fill:${this.scolor}"/>
      </svg>`;
}
}

//This class represents the Triangle shape.

class Triangle extends Shape{
    constructor(shape, scolor, tcolor, text){
        this.shape = shape;
        this.scolor = scolor;
        this.tcolor = tcolor;
        this.text = text;
}
render(){
    return `<svg version="1.1" width="500" height="300">
        <polygon points="200,10 250,190 150,190" style="fill:${this.scolor}"/>
        </svg>`;
}
}

//This class represents the Circle shape 

class Circle extends Shape {

    constructor(shape, scolor, tcolor){
        this.shape = shape;
        this.scolor = scolor;
        this.tcolor = tcolor;
        this.text = text;
}
render(){
    return `<svg height="300" width="300">
        <circle cx="50" cy="50" r="40"/>
        </svg>`;
}
}

module.exports = {Circle, Square, Triangle}



