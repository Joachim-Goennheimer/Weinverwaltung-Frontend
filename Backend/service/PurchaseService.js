'use strict';


/**
 * Finish a Purchase
 *
 * returns List
 **/
exports.completePurchasePOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "wines" : [ {
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
  } ],
  "purchaseSum" : 6,
  "id" : 0
}, {
  "wines" : [ {
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
  } ],
  "purchaseSum" : 6,
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

