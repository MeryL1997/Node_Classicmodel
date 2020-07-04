const app = require("./config/server");

require("./app/routes/view2")(app);
require("./app/routes/view1")(app);
require("./app/routes/home")(app);
require("./app/routes/formulario")(app);
require("./app/routes/ordenes")(app);

// starting the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
