import { IShapes } from './shapeinterface';

class AreaCalculator {
  private readonly shapes;

  constructor(shapes: IShapes) {
    this.shapes = shapes;
  }

  sum() {
    let areaShapes = 0;
    this.shapes.forEach((shape) => {
      areaShapes += shape.getArea();
    });
    return `Sum of all areas are ${areaShapes}`;
  }
}

export default AreaCalculator;
