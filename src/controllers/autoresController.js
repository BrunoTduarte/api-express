import mongoose from "mongoose";
import autores from "../models/Autor.js";
import NaoEncontrado from "../Erros/NaoEncontrado.js";

class AutorController {

  static listarAutores = async(req, res, next) => {
    try {
      const autoresResultado = await autores.find();

      res.status(200).json(autoresResultado);
      
  } catch (erro) {
     next(500);
  }
  }

  static listarAutorPorId = async (req, res, next) => {

      try {
        const id = req.params.id;
  
        const autorResultado = await autores.findById(id);
  
        if (autorResultado !== null)  {
          res.status(200).send(autorResultado);
        } else {
          next(new NaoEncontrado("Id do Autor não localizado."));
        }
      } catch (erro) {
        next(500);
      }
    };
  
  
    static cadastrarAutor = async (req, res, next) => {
      try {
        let autor = new autores(req.body);
  
        const autorResultado = await autor.save();
  
        res.status(201).send(autorResultado.toJSON());
      } catch (erro) {
        next(500);
      }
    }
  

    static atualizarAutor = async (req, res, next) => {
      try {
        const id = req.params.id;
  
        const autorAutualizado = await autores.findByIdAndUpdate(id, {$set: req.body});
        if (autorAutualizado !== null) {
          res.status(200).send({message: "Autor atualizado com sucesso"});
        }else {
          next(new NaoEncontrado("ID para atualizar autor não encontrado"));
        }
      } catch (erro) {
        next(500);
      }
    }
  
    static excluirAutor = async (req, res, next) => {
      try {
        const id = req.params.id;
  
        const autorExcluir = await autores.findByIdAndDelete(id);
        if (autorExcluir !== null) {
          res.status(200).send({message: "Autor removido com sucesso"});
        } else {
          next(new NaoEncontrado("ID para excluir autor não encontrado"))
        }
      } catch (erro) {
        next(500);
      }
    }
  

}

export default AutorController