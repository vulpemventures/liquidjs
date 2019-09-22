const crypto = require('./crypto');

const typef = require('typeforce');
const ecc = require('tiny-secp256k1');
const bs58check = require('bs58check');

const ADDRESS_TYPE = {
  "MAINNET": { "P2PKH": 57, "P2SH": 39, "BECH32": "bc" },
  "TESTNET": { "P2PKH": 235, "P2SH": 75, "BECH32": "tb" },
  "REGTEST": { "P2PKH": 235, "P2SH": 75, "BECH32": "tb" }
}

const WIF_PREFIX = {
  "MAINNET": "0x80",
  "TESTNET": "0xef"
}

function p2pkh(args) {
  
  typef(
    {
      network: "String",
      pubkey: ecc.isPoint
    },
    args
  );

  const { pubkey, network } = args;
  const pkh = crypto.hash160(pubkey);
  const bytes = Buffer.from([ADDRESS_TYPE[network.toUpperCase()].P2PKH, ...pkh]);

  return bs58check.encode(bytes);
}

module.exports = { payments: { p2pkh } };