import IDbConnection from './db-connection-i';

class MysqlDb implements IDbConnection {
  connect() {
    console.log('connecting to MySQL ...');

    return 'connecting to MySQL ...';
  }
}

export default MysqlDb;
