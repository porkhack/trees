const merge = require('merge');


const asn = require('./asn');
const tp = require('./trading-partner');
const location = require('./location');
const tree = merge.recursive(true, asn, tp, location);

module.exports = {
  asn,
  'trading-partner': tp,
  location,
  tree,
};
