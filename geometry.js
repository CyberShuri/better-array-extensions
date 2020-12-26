module.exports = {
    Rectangle: class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }

        get area() {
            return this.calculateArea();
        }
        
        get perimeter() {
            return this.calculatePerimeter();
        }

        calculateArea() {
            return this.height * this.width;
        }

        calculatePerimeter() {
            return (this.height * 2) + (this.width * 2)
        }
    }
}