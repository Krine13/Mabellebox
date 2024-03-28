const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({

})

const Client = mongoose.model("clients", clientSchema)

module.exports = Client