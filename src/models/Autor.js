import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String, 
      ref: "autores",
      required: [true, "O nome do(a) autor(a) é obrigatorio"]
    },
    nacionalidade: {type: String}
  },
  {
    versionKey: false
  }
)

const autores = mongoose.model("autores", autorSchema)

export default autores;