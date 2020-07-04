const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view4', (req, res) => {
    connection.query('SELECT * FROM classicmodels.orders', (err, result) => {
      res.render('views/view4', {
        view1: result
      });
    });
  });

};


