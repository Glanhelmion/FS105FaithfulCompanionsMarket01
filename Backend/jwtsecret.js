// This file is just to serve and create JWT Token

import crypto from "crypto";
const secret = crypto.randomBytes(64).toString("hex");
console.log(secret);