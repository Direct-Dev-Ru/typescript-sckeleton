import { IShape } from '../01_S/shapeinterface';

class Triangle implements IShape {
  private readonly height: number;
  private readonly base: number;

  constructor(height: number, base: number) {
    this.height = height;
    this.base = base;
  }

  getArea() {
    return (this.height * this.base) / 2;
  }
}

export default Triangle;
