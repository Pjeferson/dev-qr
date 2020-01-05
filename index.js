#!/usr/bin/env node

const argv = require("yargs").argv;
var QRCode = require("qrcode");
const internalIp = require("internal-ip");
var figlet = require("figlet");

if (argv.port) {
  qr(argv.port);
} else {
  console.log("Usage:\n\tdev-qr --port=[port_number]");
}

async function qr(port) {
  const myIP = internalIp.v4.sync();

  try {
    const msg = figlet.textSync("dev-qr");
    console.log(msg, "\n");

    const result = await QRCode.toString(`${myIP}:${port}`, {
      type: "terminal",
      version: 2
    });

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
