module.exports = {
  bookmarks: {
    _type: "application/vnd.oada.bookmarks.1+json",
    trellisfw: {
      _type: "application/vnd.trellisfw.1+json",
      asns: {
        _type: "application/vnd.trellisfw.asns.1+json",
        "day-index": {
          "*": { // 2021-03-21
            _type: "application/vnd.trellisfw.asns.1+json",
            "*": { // ksuid for one ASN
              _type: "application/vnd.trellisfw.asns.1+json",
            }
          }
        }
      }
    }
  }
};

