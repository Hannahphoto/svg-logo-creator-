//this class represents the square shape.
class Square {

    constructor(shape, scolor){
        this.shape = shape;
        this.scolor = scolor;
}

render(){
    return  `
    <svg version="1.1" width="300" height="300">
        <rect x="50" y="20" rx="10" ry="10" width="200" height="200"
        style="fill:${this.scolor};stroke-width:5;"/>
      </svg>`;
}

}

module.exports = Square;

//This class represents the Triangle shape.

class Triangle {

    constructor(shape, scolor){
        this.shape = shape;
        this.scolor = scolor;
}

render(){
    return  `
    <svg version="1.1" width="500" height="300">
    <polygon points="200,10 250,190 150,190" style="fill:${this.scolor};stroke:black;stroke-width:1"/>
      </svg>`;
}

}

module.exports = Triangle;

//This class represents the Circle shape 

class Circle {

    constructor(shape, scolor){
        this.shape = shape;
        this.scolor = scolor;
}

render(){
    return `
    <svg height="300" width="300">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill=${this.scolor} />
  </svg>`;
}

}

module.exports = Circle;



