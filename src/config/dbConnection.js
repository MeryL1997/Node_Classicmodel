const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '68.183.102.193',
    user: 'root',
    password: '2020Mery',
    database: 'classicmodels',
    port: '3306'
  });
}
