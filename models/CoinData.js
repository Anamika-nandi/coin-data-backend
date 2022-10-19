const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const coinSchema = new Schema({
    name: String,
    price: String,
    time: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("CoinData", coinSchema);