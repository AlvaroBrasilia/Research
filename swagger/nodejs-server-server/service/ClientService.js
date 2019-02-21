'use strict';


/**
 * Add a new client
 * Add a new client
 *
 * body ClientCreate Client properties
 * returns SuccessResponse
 **/
exports.create = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "message" : "Success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a client
 * 
 *
 * id String Client id to delete
 * returns SuccessResponse
 **/
exports.deleteById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "message" : "Success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find client by ID
 * Returns a single client
 *
 * id String ID of client to return
 * returns ClientResponse
 **/
exports.getById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "first_name" : "Alvaro Luiz",
    "last_name" : "Andrade",
    "email" : "alvaro.brasilia@gmail.com",
    "status" : "Online"
  },
  "message" : "Success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of clients
 * Get the list of clients
 *
 * offset Integer Number of rows to skip (optional)
 * limit Integer Number of rows to fetch (optional)
 * sort String Sort object to list data as string (optional)
 * returns ClientCollectionResponse
 **/
exports.list = function(offset,limit,sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : [ {
    "first_name" : "Alvaro Luiz",
    "last_name" : "Andrade",
    "email" : "alvaro.brasilia@gmail.com",
    "status" : "Online"
  }, {
    "first_name" : "Alvaro Luiz",
    "last_name" : "Andrade",
    "email" : "alvaro.brasilia@gmail.com",
    "status" : "Online"
  } ],
  "message" : "Success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a client details
 * 
 *
 * id String ID of client that needs to be updated
 * body ClientCreate Client properties
 * returns SuccessResponse
 **/
exports.update = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "message" : "Success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

