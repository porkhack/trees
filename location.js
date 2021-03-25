module.exports = {
  bookmarks: {
    _type: "application/vnd.oada.bookmarks.1+json",
    trellisfw: {
      _type: "application/vnd.trellisfw.1+json",
      locations: {
        _type: "application/vnd.trellisfw.locations.1+json",
        "*": { // ksuid for one ASN
          _type: "application/vnd.trellisfw.location.porkhack.1+json",
          _rev: 0,
        }
      }
    }
  }
};

