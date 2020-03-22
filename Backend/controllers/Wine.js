'use strict';

var utils = require('../utils/writer.js');
var Wine = require('../service/WineService');

module.exports.deleteWine = function deleteWine (req, res, next, wineId) {
  Wine.deleteWine(wineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWineById = function getWineById (req, res, next, wineId) {
  Wine.getWineById(wineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateWine = function updateWine (req, res, next, body, wineId) {
  Wine.updateWine(body, wineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wineGET = function wineGET (req, res, next) {
  Wine.wineGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.winePOST = function winePOST (req, res, next) {
  Wine.winePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
