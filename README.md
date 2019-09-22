# liquid-js
Liquid/Elements utils for the browser

### Install

```
npm i liquid-js
```

### Test

```
npm test 
```

### Usage

```js
const liquid = require("liquid-js");

const pubkey  = Buffer.from("0228ac32c2f6724fc865aa51f5aeb246c5c5cda42bdfd2430a201696aa0ccc541d", 'hex');
const network = "mainnet";
const p2pkh = liquid.payments.p2pkh({ pubkey, network }); 
// QDKGVB3YorozFiXoXW9MmQTUD5WjspNhcN
```

