const CoinDataModel = require("./../models/CoinData");

exports.getAllData = async () => {
    return await CoinDataModel.find();
  };

  exports.createCoinData = async (data) => {
    return await CoinDataModel.create(data);
  };