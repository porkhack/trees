# trees
OADA API tree definitions for PorkHack

```javascript
import { asn as asntree } from '@pork/trees'
import { connect } from '@oada/client'

(async () => {
  const oada = await connect({domain,token});
  await oada.post({ // same w/ put
    path: `/bookmarks/trellisfw/asns/day-index/2021-03-24`, 
    tree: asntree,
    data: { /* an ASN */ },
  });
})()
