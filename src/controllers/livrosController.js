import NaoEncontrado from "../Erros/NaoEncontrado.js";
import {livros} from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find()
        .populate("autor")
        .exec();

      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
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
      next(erro);
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
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
      next(erro);
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
     next(erro);
    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = processBusca(req.query);

      const livrosResultado = await livros.find(busca);

      res.status(200).send(livrosResultado);
    } catch (erro) {
    next(erro);
    }
  }
}

function processBusca(parametros) {
  const {editora, titulo, minPaginas, maxPaginas} = parametros;


      const busca = {};

      if(editora) busca.editora = { $regex: editora, $options: "i" }
      if(titulo) busca.titulo = { $regex: titulo, $options: "i" };

      if (minPaginas ||  maxPaginas) busca.numeroPaginas = {}
      //gte maior ou igual que 
      if (minPaginas) busca.numeroPaginas.$gte =  minPaginas;
      //lte menor ou igual que 
      if (maxPaginas) busca.numeroPaginas.$lte =  maxPaginas;

      return busca;
}


export default LivroController
