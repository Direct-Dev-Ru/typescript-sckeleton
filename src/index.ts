import AreaCalculator from './solid/01_S/area-calculator';
import Square from './solid/01_S/square';
import Circle from './solid/01_S/circle';
(() => {
  const square = new Square(2);
  const circle = new Circle(2);
  const areaCalculator = new AreaCalculator([square, circle]);
  console.log('O1_S principle: ', areaCalculator.sum());
})();