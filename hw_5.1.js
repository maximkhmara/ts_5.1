"use strict";
class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }
}
class Ellipse extends Shape {
    constructor(radiusX, radiusY, color = "Red") {
        super("Ellipse", color);
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }
    calculateArea() {
        return Math.PI * this.radiusX * this.radiusY;
    }
    calculatePerimeter() {
        return 2 * Math.PI * Math.sqrt((Math.pow(this.radiusX, 2) + Math.pow(this.radiusY, 2)) / 2);
    }
    printDiameter() {
        console.log(`Diameter X: ${2 * this.radiusX}, Diameter Y: ${2 * this.radiusY}`);
    }
}
class Circle extends Ellipse {
    constructor(radius, color = "Blue") {
        super(radius, radius, color);
    }
    printDiameter() {
        console.log(`Diameter: ${2 * this.radiusX}`);
    }
}
class Polygon extends Shape {
    constructor(name, color, sides) {
        super(name, color);
        this.sides = sides;
    }
    getNumberOfSides() {
        return this.sides.length;
    }
    calculatePerimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}
class Rectangle extends Polygon {
    constructor(width, height, color = "Yellow") {
        super("Rectangle", color, [width, height, width, height]);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    printAreaFormula() {
        console.log("Area = width * height");
    }
}
class Square extends Rectangle {
    constructor(side, color = "Green") {
        super(side, side, color);
    }
}
class Triangle extends Polygon {
    constructor(base, side1, side2, color = "Orange") {
        super("Triangle", color, [base, side1, side2]);
        this.base = base;
        this.side1 = side1;
        this.side2 = side2;
    }
    calculateArea() {
        const p = this.calculatePerimeter() / 2;
        return Math.sqrt(p * (p - this.base) * (p - this.side1) * (p - this.side2));
    }
    printTriangleType() {
        if (this.base === this.side1 && this.base === this.side2) {
            console.log("Equilateral");
        }
        else if (this.base === this.side1 || this.base === this.side2 || this.side1 === this.side2) {
            console.log("Isosceles");
        }
        else {
            console.log("Scalene");
        }
    }
    calculateHeight() {
        return (2 * this.calculateArea()) / this.base;
    }
    printAreaFormula() {
        console.log("Area = √(p(p-a)(p-b)(p-c)), where p = perimeter/2");
    }
}
class GenericPolygon extends Polygon {
    calculateArea() {
        throw new Error("Method not implemented.");
    }
    constructor(sides, color = "Gray") {
        super("Generic Polygon", color, sides);
    }
    printAreaFormula() {
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
