const asyncHandler = require("../middlewares/async");
const axios = require("axios");

exports.getHtml = asyncHandler(async (req, res, next) => {
  console.log(req.query.address);
  let addressToBeHit = req.query.address.map((item) => axios.get(`${item}`));
  axios
    .all(addressToBeHit)
    .then(
      axios.spread((response1, response2, response3, response4, response5) => {
        res.status(200).json({
          success: true,
          data1: response1.data,
          data2: response2.data,
          data3: response3.data,
          data4: response4.data,
          data5: response5.data,
        });
      })
    )
    .catch((error) => {
      console.log(error);
    });
});
