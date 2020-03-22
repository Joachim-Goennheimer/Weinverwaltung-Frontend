'use strict';


/**
 * Deletes a wine
 *
 * wineId Long Wine id to delete
 * no response value expected for this operation
 **/
exports.deleteWine = function(wineId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find wine by ID
 * Returns a single wine
 *
 * wineId Long ID of wine to return
 * returns Wine
 **/
exports.getWineById = function(wineId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lage" : "lage",
  "verkaufspreis" : 5,
  "lagerort" : "lagerort",
  "bild" : "",
  "jahrgang" : 1,
  "anzahl" : 6,
  "herkunftsland" : "herkunftsland",
  "name" : "name",
  "id" : 0,
  "region" : "region",
  "einkaufspreis" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a wine in the store with form data
 *
 * body Wine List of Wines (optional)
 * wineId Long ID of wine that needs to be updated
 * no response value expected for this operation
 **/
exports.updateWine = function(body,wineId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get list of wines
 *
 * no response value expected for this operation
 **/
exports.wineGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new wine entry
 *
 * returns List
 **/
exports.winePOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lage" : "lage",
  "verkaufspreis" : 5,
  "lagerort" : "lagerort",
  "bild" : "",
  "jahrgang" : 1,
  "anzahl" : 6,
  "herkunftsland" : "herkunftsland",
  "name" : "name",
  "id" : 0,
  "region" : "region",
  "einkaufspreis" : 5
}, {
  "lage" : "lage",
  "verkaufspreis" : 5,
  "lagerort" : "lagerort",
  "bild" : "",
  "jahrgang" : 1,
  "anzahl" : 6,
  "herkunftsland" : "herkunftsland",
  "name" : "name",
  "id" : 0,
  "region" : "region",
  "einkaufspreis" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

