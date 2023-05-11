const express = require("express");
const app = express();
const DBConnect = require("./config/database");
const prodcutRoutes = require("./routes/procductRoutes");
require("dotenv").config();
const errorMiddleware = require("./middleware/error");

// Uncaught Exception
process.on("uncaughtException", (err) => {
     console.log(`Error : ${err.message}`);
     console.log("Shutting down server due to uncaught Exceptionn");
     process.exit(1);
});

// Middlewares
app.use(express.json());
app.use(errorMiddleware);

// Routes 
app.use("/api/v1", prodcutRoutes);

// Server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
     console.log(`server is running at ${PORT}`);
});

// Database
DBConnect();

// Unhandle proccess rejection
process.on("unhandledRejection", (err) => {
     console.log(`Error : ${err.message}`);
     console.log("Shutting down server due to unhandle promise rejection");

     server.close(() => {
          process.exit(1);
     });
});
