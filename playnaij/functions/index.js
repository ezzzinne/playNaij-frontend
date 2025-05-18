const functions = require("firebase-functions");
const axios = require("axios");

exports.verifyRecaptcha = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const recaptchaToken = req.body.token;
  if (!recaptchaToken) {
    return res.status(400).send({ success: false, message: "No token provided" });
  }

  try {
    const secretKey = "6LccrC8rAAAAAIgybr4oa-X6FAWfMyqwqo454aW1"; // Your reCAPTCHA secret key
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: secretKey,
        response: recaptchaToken,
      },
    });

    const verification = response.data;
    if (verification.success) {
      return res.status(200).send({ success: true });
    } else {
      return res.status(400).send({ success: false, message: verification["error-codes"] });
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).send({ success: false, message: "Internal server error" });
  }
});
