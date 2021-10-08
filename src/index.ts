import AreaCalculator from './solid/01_S/area-calculator';
import Square from './solid/01_S/square';
import Circle from './solid/01_S/circle';
import Triangle from './solid/02_O/triangle';
import VolumeCalculator from './solid/03_L/volume-calculator';
import Cuboid from './solid/04_I/cuboid';
import MysqlDb from './solid/05_D/mysql-db';
import PostgresDb from './solid/05_D/postgres-db';
import PasswordCheck from './solid/05_D/password-reminder';

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

  const cuboid = new Cuboid(3);
  const principle_04_sample = new AreaCalculator([square, circle, triangle, cuboid]);
  console.log('04_I principle: ', principle_04_sample.sum());

  console.log("------------05-------------");
  

  const mySQlConn = new MysqlDb();
  const myPGConn = new PostgresDb();
  const checkPwdMySQL = new PasswordCheck(mySQlConn);
  const checkPwdPG = new PasswordCheck(myPGConn);
  console.log(checkPwdMySQL.checkPwd());
  console.log(checkPwdPG.checkPwd());
  

})();
