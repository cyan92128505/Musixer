import crypto from "crypto";
import fs from "fs-extra";

async function main() {
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  await fs.writeFile(__dirname + `/../id_rsa_pub.pem`, keyPair.publicKey);

  await fs.writeFile(__dirname + `/../id_rsa_priv.pem`, keyPair.privateKey);
}

main();
