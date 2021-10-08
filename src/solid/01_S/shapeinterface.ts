import Triangle from '../02_O/triangle';
import Circle from './circle';
import Square from './square';

interface IShape {
  getArea: () => number;
}

interface IShapes {
  [index: number]: Square | Circle | Triangle;
}

export { IShape, IShapes };
