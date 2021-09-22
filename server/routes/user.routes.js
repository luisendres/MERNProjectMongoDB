const userController = require("../controllers/user.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    // when this URL is visited, execute the controller function.
    app.post("/api", userController.create);
    app.get("/api", userController.getAll);
    app.get("/api/:id", userController.getOne);
    app.delete("/api/:id", userController.delete);
    app.put("/api/:id", userController.update);
};