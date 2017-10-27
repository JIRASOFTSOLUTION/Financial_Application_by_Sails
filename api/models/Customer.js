/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    customer_code: {
      type: 'string',
      size: 10,
      primaryKey: true,
      required: true
    },
    customer_name: {
      type: 'string',
      size: 100,
      required: true
    },
    email: {
      type: 'string',
      size: 50,
      email: true
    },
    state: {
      type: 'string'
    }
  }
}
