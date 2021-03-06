const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view3', (req, res) => {
    connection.query('SELECT * FROM classicmodels.list_order', (err, result) => {
      res.render('views/view3', {
        view3: result
      });
    });
  });
  app.post('/view3', (req, res) => {
    // Order
    var a1=req.body.new_orderNumber;
    var a2=req.body.new_orderDate;
    var a3=req.body.new_requiredDate;
    var a4=req.body.new_shippedDate; // opcional
    var a5=req.body.new_status;
    var a6=req.body.new_comments; // opcional
    //var a7=req.body.new_customerNumber;
    var a7=103;
    // Order details
    //var a8=req.body.new_productCode;
    var a8='S12_3148';
    var a9=req.body.new_quantityOrdered;
    var a10=req.body.new_priceEach;
    var a11=req.body.new_orderLineNumber;
    if(a1 !== undefined 
      && a2!== undefined
      && a3!== undefined
      && a5!== undefined
      && a7!== undefined
      && a8!== undefined
      && a9!== undefined
      && a10!== undefined
      && a11!== undefined
      ){
      connection.query(`call Nuevo_Pedido('${a1}','${a2}','${a3}','${a4}','${a5}','${a6}','${a7}','${a8}','${a9}','${a10}','${a11}')`,
      function(err,rows) {
        if(err) {
          console.log(err);
        } else {
            res.redirect('/view4');
        }
      })
    }
  });
};
