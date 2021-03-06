import { IShape } from './shapeinterface';

class Circle implements IShape {
  private readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export default Circle;
