const liquid = require("../index");
//Test it
const pubkey = Buffer.from("0228ac32c2f6724fc865aa51f5aeb246c5c5cda42bdfd2430a201696aa0ccc541d", 'hex');

const p2pkh = liquid.payments.p2pkh({
  pubkey,
  network: "mainnet"
})

if (p2pkh !== "QDKGVB3YorozFiXoXW9MmQTUD5WjspNhcN") {
  throw new Error("p2pkh not returns right result");
}

console.log("All Tests are successfull")
