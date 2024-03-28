const mongoose = require("mongoose")
const connectionString = process.env.DB_CONNECTION_STRING

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Genial!! tu es bien connecté a la base de donnée 🥳 !"))
  .catch((errorMessage) => console.error(errorMessage))