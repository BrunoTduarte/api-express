import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "titulo do livro é obrigatorio"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'autores', 
      required: [true, "o autor é obrigatorio"]
    },
    editora: {
      type: String, 
      required: [true, "A editora é obiogatoria"],
      enum: {
        values: ["A casa do codigo", "DEV"],
        message: "A editora {VALUE} não é um valor permitido"
      }

    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message: "O numero de paginas deve estar entre 10 e 5000."
     }
    }
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;