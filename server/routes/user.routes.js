const userController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    app.post("/api/register", userController.register);
    app.post("/api/login", userController.login);
    app.post("/api/logout", userController.logout);

    // this route now has to be authenticated
    app.get("/api/users", authenticate, userController.getAll);
    // app.get("/api/player/character/new/:id", authenticate, userController.getOne);
    // app.get("/api/player/character/new/:id", userController.getLoggedInUser);
    app.get("/api/users/loggedin", userController.getLoggedInUser);

    // when this URL is visited, execute the controller function.
    // app.post("/api", userController.create);
    // app.get("/api", userController.getAll);
    // app.get("/api/:id", userController.getOne);
    // app.delete("/api/:id", userController.delete);
    // app.put("/api/:id", userController.update);
    app.get("/api/characters", userController.getAllCharacters);
    app.get("/api/users/characters/:id", userController.getUserCharacters);
    app.post("/api/characters/new", userController.createCharacter);

};