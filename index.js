const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPuHGCRURkjErYI9Hnp6nHnX5Wf2VmeQAq9yISJV8mEk4cEUxFnKEywa5mHzEWPlzysUIVt6jJbIy6beQU8Y9Zs00F36oS7UO"
);

const app = express();
//API
//app config

//some middle wares
app.use(cors({ origin: true }));
app.use(express.json());
// API route
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recieved BOOM! >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen to command
exports.api = functions.https.onRequest(app);

// endpoint: http://localhost:5001/clone-79b56/us-central1/api
