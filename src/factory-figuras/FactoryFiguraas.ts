class ShapeFactory {
    static createShape(shape: 'circle' | 'square', size: number): Shape {
      switch (shape) {
        case 'circle':
          return new Circle(size);
        case 'square':
          return new Square(size);
        default:
          throw new Error('Invalid shape');
      }
    }
  }