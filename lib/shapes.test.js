
const Shapes = require('./shapes');
const Square = require('./shapes');
const Triangle = require('./shapes');
const Circle = require('./shapes');

//Circle shape test

describe('Circle', () =>{
    it('renders correctly'), () => {
        const shape = new Circle();
        expect(shape.render()).toEqual(`<svg height="300" width="300">
        <circle cx="50" cy="50" r="40" stroke:${this.tcolor};stroke-width:2 fill=${this.scolor} />
      </svg>`)
    }
});

// Triangle shape test

describe('Triangle', () => {
    it('renders correctly'), () => {
        const shape = new Triangle();
        expect(shape.render()).toEqual(`<svg version="1.1" width="500" height="300">
        <polygon points="200,10 250,190 150,190" style="fill:${this.scolor};stroke:${this.tcolor};stroke-width:2"/>
          </svg>`)
    }
});

// Square shape

describe('Square', () => {
    it('renders correctly'),() => {
        const shape = new Square();
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="300">
        <rect x="50" y="20" rx="10" ry="10" width="200" height="200"
        style="fill:${this.scolor};stroke:${this.tcolor};stroke-width:2"/>
      </svg>`)
    }
});