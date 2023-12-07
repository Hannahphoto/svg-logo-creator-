
const Shapes = require('./shapes');
const {Square, Triangle, Circle} = require('./shapes');


// Square shape test

describe('Square', () => {
    it('should render correctly',() => {
        const shape = new Square();
        const output = `<svg version="1.1" width="300" height="300">
        <rect x="50" y="20" rx="10" ry="10" width="200" height="200"
        style="fill:${this.tcolor}"/></svg>`;
        expect(shape.render()).toEqual(output);
    });
});

// Triangle shape test

describe('Triangle', () => {
    it('should render correctly', () => {
        const shape = new Triangle();
        const output = `<svg version="1.1" width="500" height="300">
        <polygon points="200,10 250,190 150,190" style="fill:${this.tcolor}"/></svg>`;
        expect(shape.render()).toEqual(output);
    });
});

//Circle shape test

describe('Circle', () =>{
    it('should render correctly', () => {
        const shape = new Circle();
        const output = `<svg height="300" width="300">
        <circle cx="50" cy="50" r="40" style="fill:${tcolor}"/></svg>`;
        expect(shape.render()).toEqual(output);
    });
});
