const CoinDataModel = require("./../models/CoinData");

exports.getAllData = async () => {
    return await CoinDataModel.find();
  };

  exports.createCoinData = async (data) => {
    const start = new Date();
    start.setHours(0,0,0,0);

    const end = new Date();
    end.setHours(23,59,59,999);
    const dataToday = await CoinDataModel.find({created_on: {$gte: start, $lt: end}})
    if(dataToday.length<50)
      return await CoinDataModel.create(data);
    else{
      const error = new Error("Limit to add 50 coins reached")
      error.code = 401
      throw error
    }
  };