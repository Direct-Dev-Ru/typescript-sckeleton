import IShape2D from './shape2d';
import IShape3D from './shape3d';

class Cuboid implements IShape2D, IShape3D {
  private readonly length: number;
  readonly hasTwoDimensions = true;
  readonly hasThreeDimensions = true;

  constructor(length: number) {
    this.length = length;
  }

  getArea() {
    return Math.pow(this.length, 2);
  }

  getVolume() {
    return Math.pow(this.length, 3);
  }
}

export default Cuboid;
