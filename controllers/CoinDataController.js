const CoinDataService = require("./../services/CoinDataService");

exports.getAllData = async (req, res) => {
    try {
      const blogs = await CoinDataService.getAllData();
      res.json({ data: blogs, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.createData = async (req, res) => {
    try {
      const blog = await CoinDataService.createCoinData(req.body);
      res.json({ data: blog, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };