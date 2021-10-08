import { IShape } from './shapeinterface';

class Square implements IShape {
  private readonly length: number;

  constructor(length: number) {
    this.length = length;
  }

  getArea() {
    return Math.pow(this.length, 2);
  }
}

export default Square;
