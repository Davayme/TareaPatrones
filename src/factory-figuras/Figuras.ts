class Circle implements Shape {
    constructor(private radius: number) { }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Square implements Shape {
    constructor(private side: number) { }

    calculateArea(): number {
        return Math.pow(this.side, 2);
    }
}