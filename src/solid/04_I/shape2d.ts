import { IShape } from '../01_S/shapeinterface';

interface IShape2D extends IShape {
  hasTwoDimensions: boolean  
}

export default IShape2D;
