const dbConnection = require("../../config/dbConnection");


module.exports = app => {

    const connection = dbConnection();
    app.get('/orden', (req, res) => {
        connection.query('SELECT * FROM classicmodels.orders;', (err, result) => {
            res.render('views/orden', {
                class3: result
            });
        });
    });
}