abstract class Shape {
  readonly name: string;
  readonly color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;

  printInfo(): void {
    console.log(
      `Name: ${this.name}, Color: ${this.color}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`
    );
  }
}

class Ellipse extends Shape {
  readonly radiusX: number;
  readonly radiusY: number;

  constructor(radiusX: number, radiusY: number, color: string = "Red") {
    super("Ellipse", color);
    this.radiusX = radiusX;
    this.radiusY = radiusY;
  }

  calculateArea(): number {
    return Math.PI * this.radiusX * this.radiusY;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * Math.sqrt((Math.pow(this.radiusX, 2) + Math.pow(this.radiusY, 2)) / 2);
  }

  printDiameter(): void {
    console.log(`Diameter X: ${2 * this.radiusX}, Diameter Y: ${2 * this.radiusY}`);
  }
}

class Circle extends Ellipse {
  constructor(radius: number, color: string = "Blue") {
    super(radius, radius, color);
  }

  printDiameter(): void {
    console.log(`Diameter: ${2 * this.radiusX}`);
  }
}

abstract class Polygon extends Shape {
  readonly sides: number[];

  constructor(name: string, color: string, sides: number[]) {
    super(name, color);
    this.sides = sides;
  }

  getNumberOfSides(): number {
    return this.sides.length;
  }

  calculatePerimeter(): number {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }

  abstract printAreaFormula(): void;
}

class Rectangle extends Polygon {
  readonly width: number;
  readonly height: number;

  constructor(width: number, height: number, color: string = "Yellow") {
    super("Rectangle", color, [width, height, width, height]);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  printAreaFormula(): void {
    console.log("Area = width * height");
  }
}

class Square extends Rectangle {
  constructor(side: number, color: string = "Green") {
    super(side, side, color);
  }
}

class Triangle extends Polygon {
  readonly base: number;
  readonly side1: number;
  readonly side2: number;

  constructor(base: number, side1: number, side2: number, color: string = "Orange") {
    super("Triangle", color, [base, side1, side2]);
    this.base = base;
    this.side1 = side1;
    this.side2 = side2;
  }

  calculateArea(): number {
    const p = this.calculatePerimeter() / 2;
    return Math.sqrt(p * (p - this.base) * (p - this.side1) * (p - this.side2));
  }

  printTriangleType(): void {
    if (this.base === this.side1 && this.base === this.side2) {
      console.log("Equilateral");
    } else if (this.base === this.side1 || this.base === this.side2 || this.side1 === this.side2) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  }

  calculateHeight(): number {
    return (2 * this.calculateArea()) / this.base;
  }

  printAreaFormula(): void {
    console.log("Area = √(p(p-a)(p-b)(p-c)), where p = perimeter/2");
  }
}

class GenericPolygon extends Polygon {
  calculateArea(): number {
    throw new Error("Method not implemented.");
  }
  constructor(sides: number[], color: string = "Gray") {
    super("Generic Polygon", color, sides);
  }

  printAreaFormula(): void {
    console.log("Формула площі залежить від типу багатокутника");
  }
}

const circle = new Circle(10);
circle.printInfo();
circle.printDiameter();

const ellipse = new Ellipse(10, 5);
ellipse.printInfo();
ellipse.printDiameter();

const rectangle = new Rectangle(20, 10);
rectangle.printInfo();
rectangle.printAreaFormula();

const square = new Square(15);
square.printInfo();

const triangle = new Triangle(10, 8, 6);
triangle.printInfo();
triangle.printTriangleType();
console.log(`Height: ${triangle.calculateHeight()}`);

const genericPolygon = new GenericPolygon([10, 15, 20, 25]);
genericPolygon.printInfo();
genericPolygon.printAreaFormula();