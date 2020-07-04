const dbConnection = require("../../config/dbConnection");


module.exports = app => {

    const connection = dbConnection();
    app.get('/listarorden', (req, res) => {
        connection.query('SELECT * FROM classicmodels.orders;', (err, result) => {
            res.render('views/ordenes', {
                class3: result
            });
        });
    });
}