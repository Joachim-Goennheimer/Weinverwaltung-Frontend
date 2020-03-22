'use strict';

var utils = require('../utils/writer.js');
var Purchase = require('../service/PurchaseService');

module.exports.completePurchasePOST = function completePurchasePOST (req, res, next) {
  Purchase.completePurchasePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
