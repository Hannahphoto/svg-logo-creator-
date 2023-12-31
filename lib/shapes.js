
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
            `<rect x="50" y="20" rx="10" ry="10" width="200" height="200" style="fill:${this.text}"/><text x="150px" y="120px" font-size="60px" text-anchor="middle" dominant-baseline="middle" fill="${this.tcolor}">${this.scolor}</text></svg>`;
    }
}

//This class represents the Triangle shape.

class Triangle extends Shape {

    render() {
        return `<svg version="1.1" width="300" height="300"><polygon points="150,50 250,250 50,250" style="fill:${this.text}"/><text x="150px" y="180px" font-size="60px" text-anchor="middle" dominant-baseline="middle" fill="${this.tcolor}">${this.scolor}</text></svg>`;
    }
}

//This class represents the Circle shap e 

class Circle extends Shape {

    render() {
        return `<svg height="300" width="300"><circle cx="150" cy="150" r="100" style="fill:${this.text}"/><text x="150px" y="150px" font-size="60px" text-anchor="middle" dominant-baseline="middle" fill="${this.tcolor}">${this.scolor}</text></svg>`;
    }
}



module.exports = { Square, Triangle, Circle };




