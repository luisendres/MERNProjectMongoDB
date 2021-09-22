// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// // Environment vars
// const port = 8000;
// const db_name = "project-tester";

// // Import the function from mongoose.config then execute it.
// require("./config/mongoose.config")(db_name);

// // app.use(cors());
// app.use(cookieParser());
// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// const app = express();

// // req.body is undefined without this!
// app.use(express.json());
// require("./routes/user.routes")(app);

// // After all the routes have been added, server is ready to handle requests.
// app.listen(port, () => 
// console.log(`Listening on port ${port} for REQest to RESpond to.`)
// );

require("dotenv").config();

const express = require("express"),
    cookieParser = require("cookie-parser"),
    cors = require("cors");

require("./config/mongoose.config")(process.env.DB_NAME);

const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

require("./routes/user.routes")(app);

app.listen(process.env.DB_PORT, () =>
    console.log(`Listening on port ${process.env.DB_PORT}`)
);