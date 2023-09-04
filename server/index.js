const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// * CONNECT TO DATABASE (MONGO)
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

// * CHECK FOR ERRORS AND LOG CONNECTION RESULTS
const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () => {
  console.log("Connected to MongoDB!");
});

// * ALLOW REQUESTS FROM THE FRONT END
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// * START THE BACKEND SERVER
app.listen(process.env.PORT, () => {
  console.log(`Netflix-Clone: listening on port ${process.env.PORT}!`);
});

// * ACCEPT JSON REQUESTS
app.use(express.json());

// * ROUTES
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

const loginRoutes = require('./routes/login')
app.use('/api/login', loginRoutes)

const registerRoutes = require("./routes/register");
app.use("/api/register", registerRoutes);
