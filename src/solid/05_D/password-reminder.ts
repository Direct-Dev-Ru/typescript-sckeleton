import IDbConnection from './db-connection-i';

class PasswordCheck {
  private dbConnection: IDbConnection;

  constructor(connection: IDbConnection) {
    this.dbConnection = connection;
  }

  checkPwd(): string {
    this.dbConnection.connect();
    //  some check logic ...
    return 'Password is OK';
  }
}

export default PasswordCheck;
