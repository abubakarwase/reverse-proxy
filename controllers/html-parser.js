const asyncHandler = require("../middlewares/async");
const axios = require("axios");

exports.getHtml = asyncHandler(async (req, res, next) => {
  if (!req.query.address)
    return res.status(500).json({ error: "No websites are provided" });
  let addressToBeHit = req.query.address.map((item) => axios.get(`${item}`));
  axios
    .all(addressToBeHit)
    .then(
      axios.spread((...response) => {
        res.status(200).json({
          success: true,
          data: response.map((item) => item.data),
        });
      })
    )
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});
