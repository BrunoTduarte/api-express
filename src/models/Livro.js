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
      required: [true, "A editora é obiogatoria"]
    },
    numeroPaginas: {type: Number}
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;