const express = require("express");
const app = express();
const mongoose = require("mongoose");
const coinDataRouter = require("./routes/CoinDataRoutes");
var cors = require('cors')
 
//middleware
app.use(express.json());


 
var dbUrl = "mongodb+srv://demo:iAv28g5qbLt0arXq@cluster0.vddas.mongodb.net/Saturday-Session?retryWrites=true&w=majority";
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });

  app.use(cors())
  app.use("/coin",coinDataRouter)

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;