import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";
import RequisiçãoIncorreta from "../Erros/RequisiçãoIncorreta.js";
import ErroValidação from "../Erros/ErroValidação.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {    
  if(erro instanceof mongoose.Error.CastError) {
   new RequisiçãoIncorreta().enviarResposta(res);
  } else if(erro instanceof mongoose.Error.ValidationError) {
   new ErroValidação(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase){
    erro.enviarResposta(res);
  } else {
   new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;;

