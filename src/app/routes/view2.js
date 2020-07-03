const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view2', (req, res) => {
    connection.query('SELECT * FROM classicmodels.Productos_Mas_Vendido', (err, result) => {
      res.render('views/view2', {
        view2: result
      });
    });
  });

};
