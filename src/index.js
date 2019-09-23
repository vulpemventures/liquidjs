
const typef = require('typeforce');
const ecc = require('tiny-secp256k1');
const bs58check = require('bs58check');

const crypto = require('./crypto');
const networks = require('./networks')

function p2pkh(args) {

  typef(
    {
      network: typef.maybe(typef.Object),
      pubkey: ecc.isPoint
    },
    args
  );

  const { pubkey, network } = args;
  const pkh = crypto.hash160(pubkey);
  const bytes = Buffer.from([network.pubKeyHash, ...pkh]);

  return bs58check.encode(bytes);
}

module.exports = { payments: { p2pkh }, crypto, networks };
