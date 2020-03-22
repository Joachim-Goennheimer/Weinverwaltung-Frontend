'use strict';


/**
 * Get list of customers
 *
 * no response value expected for this operation
 **/
exports.customerGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new customer entry
 *
 * returns List
 **/
exports.customerPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "newsletter" : true,
  "purchaseHistory" : [ {
    "id" : 5,
    "wine" : [ {
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
    "timestamp" : 5
  }, {
    "id" : 5,
    "wine" : [ {
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
    "timestamp" : 5
  } ],
  "phoneNumber" : "phoneNumber",
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
  "recommendations" : [ {
    "id" : 2,
    "wineId" : [ null, null ]
  }, {
    "id" : 2,
    "wineId" : [ null, null ]
  } ],
  "email" : "email"
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "newsletter" : true,
  "purchaseHistory" : [ {
    "id" : 5,
    "wine" : [ {
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
    "timestamp" : 5
  }, {
    "id" : 5,
    "wine" : [ {
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
    "timestamp" : 5
  } ],
  "phoneNumber" : "phoneNumber",
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
  "recommendations" : [ {
    "id" : 2,
    "wineId" : [ null, null ]
  }, {
    "id" : 2,
    "wineId" : [ null, null ]
  } ],
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a customer
 *
 * customerId Long customer id to delete
 * no response value expected for this operation
 **/
exports.deleteCustomer = function(customerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find customer by ID
 * Returns a single customer
 *
 * customerId Long ID of customer to return
 * returns Customer
 **/
exports.getCustomerById = function(customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "newsletter" : true,
  "purchaseHistory" : [ {
    "id" : 5,
    "wine" : [ {
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
    "timestamp" : 5
  }, {
    "id" : 5,
    "wine" : [ {
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
    "timestamp" : 5
  } ],
  "phoneNumber" : "phoneNumber",
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
  "recommendations" : [ {
    "id" : 2,
    "wineId" : [ null, null ]
  }, {
    "id" : 2,
    "wineId" : [ null, null ]
  } ],
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a customer in the store with form data
 *
 * body List Details about the Customer (optional)
 * customerId Long ID of customer that needs to be updated
 * no response value expected for this operation
 **/
exports.updateCustomer = function(body,customerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

