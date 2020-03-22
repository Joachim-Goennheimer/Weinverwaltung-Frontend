'use strict';

var utils = require('../utils/writer.js');
var Winemaker = require('../service/WinemakerService');

module.exports.deleteWinemaker = function deleteWinemaker (req, res, next, winemakerId) {
  Winemaker.deleteWinemaker(winemakerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWinemakerById = function getWinemakerById (req, res, next, winemakerId) {
  Winemaker.getWinemakerById(winemakerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateWinemaker = function updateWinemaker (req, res, next, body, winemakerId) {
  Winemaker.updateWinemaker(body, winemakerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.winemakerGET = function winemakerGET (req, res, next) {
  Winemaker.winemakerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.winemakerPOST = function winemakerPOST (req, res, next) {
  Winemaker.winemakerPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
