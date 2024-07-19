import mongoose from "mongoose";

function manipuladorDeErros (erro, rreq, res, next){
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estao incorretos"})
      } else {
        res.status(500).send({message: "Erro interno do servidor."})
      };
}

export default manipuladorDeErros;


