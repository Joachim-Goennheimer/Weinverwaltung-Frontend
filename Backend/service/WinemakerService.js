'use strict';


/**
 * Deletes a winemaker
 *
 * winemakerId Long winemaker id to delete
 * no response value expected for this operation
 **/
exports.deleteWinemaker = function(winemakerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find winemaker by ID
 * Returns a single winemaker
 *
 * winemakerId Long ID of winemaker to return
 * returns Winemaker
 **/
exports.getWinemakerById = function(winemakerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "phoneNumber" : "phoneNumber",
  "listLink" : "listLink",
  "adress" : [ {
    "country" : "country",
    "city" : "city",
    "streetNumber" : "streetNumber",
    "street" : "street",
    "postalCode" : 1,
    "id" : 6
  }, {
    "country" : "country",
    "city" : "city",
    "streetNumber" : "streetNumber",
    "street" : "street",
    "postalCode" : 1,
    "id" : 6
  } ],
  "id" : 0,
  "email" : "email",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a winemaker in the store with form data
 *
 * body List Details about the Winemaker (optional)
 * winemakerId Long ID of winemaker that needs to be updated
 * no response value expected for this operation
 **/
exports.updateWinemaker = function(body,winemakerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get list of winemaker
 *
 * no response value expected for this operation
 **/
exports.winemakerGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new winemaker entry
 *
 * returns List
 **/
exports.winemakerPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "phoneNumber" : "phoneNumber",
  "listLink" : "listLink",
  "adress" : [ {
    "country" : "country",
    "city" : "city",
    "streetNumber" : "streetNumber",
    "street" : "street",
    "postalCode" : 1,
    "id" : 6
  }, {
    "country" : "country",
    "city" : "city",
    "streetNumber" : "streetNumber",
    "street" : "street",
    "postalCode" : 1,
    "id" : 6
  } ],
  "id" : 0,
  "email" : "email",
  "lastname" : "lastname"
}, {
  "firstName" : "firstName",
  "phoneNumber" : "phoneNumber",
  "listLink" : "listLink",
  "adress" : [ {
    "country" : "country",
    "city" : "city",
    "streetNumber" : "streetNumber",
    "street" : "street",
    "postalCode" : 1,
    "id" : 6
  }, {
    "country" : "country",
    "city" : "city",
    "streetNumber" : "streetNumber",
    "street" : "street",
    "postalCode" : 1,
    "id" : 6
  } ],
  "id" : 0,
  "email" : "email",
  "lastname" : "lastname"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

