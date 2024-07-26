import NaoEncontrado from "../Erros/NaoEncontrado.js";
import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find()
        .populate("autor")
        .exec();

      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(500);
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id)
        .populate("autor", "nome")
        .exec();

        if (livroResultados !== null) {
          res.status(200).send(livroResultados);
        } else {
          next(new NaoEncontrado("Livro por ID não localizado"));
        }

    } catch (erro) {
      next(500);
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(500);
    }
  }

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const LivroID = await livros.findByIdAndUpdate(id, {$set: req.body});

      if (LivroID !== null) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Atulizar por ID não encontrado"));
      }

    } catch (erro) {
      next(500);
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroExcluirID = await livros.findByIdAndDelete(id);

      if (livroExcluirID !== null) {
        res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Excluir livro por ID não encontrado"));
      }

    } catch (erro) {
     next(500);
    }
  }

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;

      const livrosResultado = await livros.find({"editora": editora});

      res.status(200).send(livrosResultado);
    } catch (erro) {
    next(500);
    }
  }



}

export default LivroController