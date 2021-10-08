import IDbConnection from './db-connection-i';

class PostgresDb implements IDbConnection {
  connect() {
    console.log('connecting to Postgres ... ');
    return 'connecting to Postgres ... ';
  }
}

export default PostgresDb;
