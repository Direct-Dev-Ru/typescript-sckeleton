import Triangle from '../02_O/triangle';
import Cuboid from '../04_I/cuboid';
import Circle from './circle';
import Square from './square';

interface IShape {
  getArea: () => number;
}

interface IShapes {
  [index: number]: Square | Circle | Triangle | Cuboid;
}

export { IShape, IShapes };
