const asntree = require('./asn');

module.exports = {
  bookmarks: {
    _type: "application/vnd.oada.bookmarks.1+json",
    trellisfw: {
      _type: "application/vnd.trellisfw.1+json",
      'trading-partners': {
        _type: "application/vnd.trellisfw.trading-partners.1+json",
        '*': {
          _type: 'application/vnd.trellisfw.trading-partner.porkhack.1+json',
          _rev: 0,
          ...asntree,
        }
      }
    }
  }
};

