const mongoose = require("mongoose")

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log("Conexión exitosa")
  } catch (error) {
    console.log(error)
    throw new Error("Error al intentar conectarse a la base de datos")
  }
}

module.exports = connection
