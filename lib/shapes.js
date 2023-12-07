
//Generic Shape Class
class Shape {

    constructor(scolor, tcolor, text) {
        this.scolor = scolor;
        this.tcolor = tcolor;
        this.text = text;
    }
    render() {
        return `test`;
    }
}

//this class represents the square shape.
class Square extends Shape {

    render() {
        return `<svg version="1.1" width="300" height="300">`+
            `<rect x="50" y="20" rx="10" ry="10" width="200" height="200" style="fill:${this.scolor}"/><text x="150px" y="125px" font-sixe="60px" text-anchor="middle" fill="${this.tcolor}">${this.text}</text></svg>`;
    }
}

//This class represents the Triangle shape.

class Triangle extends Shape {

    render() {
        return `<svg version="1.1" width="500" height="300">
            <polygon points="200,10 250,190 150,190" style="fill:${this.tcolor}"/><text x="150px" y="125px" font-sixe="60px" text-anchor="middle" fill="${this.scolor}">${this.text}</text></svg>`;
    }
}

//This class represents the Circle shape 

class Circle extends Shape {

    render() {
        return `<svg height="300" width="300">
            <circle cx="50" cy="50" r="40" style="fill:${this.tcolor}"/><text x="150px" y="125px" font-sixe="60px" text-anchor="middle" fill="${this.scolor}">${this.text}</text></svg>`;
    }
}



module.exports = { Square, Triangle, Circle };




