import crypto from "crypto";
import fs from "fs-extra";
import path from "path";
import logger from "../utils/logger";

async function generateKey() {
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

  const decode = (str: string): string =>
    Buffer.from(str, "utf8").toString("base64");

  const pub = await fs.writeFile(
    path.join(process.cwd(), "id_rsa_pub.pem.base64"),
    decode(keyPair.publicKey),
    "utf8"
  );
  logger.info(`genrate id_rsa_pub.pem.base64`);

  await fs.writeFile(
    path.join(process.cwd(), "id_rsa_priv.pem.base64"),
    decode(keyPair.privateKey),
    "utf8"
  );
  logger.info(`genrate id_rsa_priv.pem.base64`);

}

generateKey();
