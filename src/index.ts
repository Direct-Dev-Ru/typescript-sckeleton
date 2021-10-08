import AreaCalculator from './solid/01_S/area-calculator';
import Square from './solid/01_S/square';
import Circle from './solid/01_S/circle';
import Triangle from './solid/02_O/triangle';
import VolumeCalculator from './solid/03_L/volume-calculator';

(() => {
  const square = new Square(2);
  const circle = new Circle(2);
  const areaCalculator = new AreaCalculator([square, circle]);
  console.log('O1_S principle: ', areaCalculator.sum());
  const triangle = new Triangle(10, 2);
  const areaCalculatorWithOpenClosed = new AreaCalculator([square, circle, triangle]);
  console.log('O2_O principle: ', areaCalculatorWithOpenClosed.sum());

  const volumeCalculator = new VolumeCalculator([square, circle, triangle]);
  console.log('03_L principle: ', volumeCalculator.sum());

})();
