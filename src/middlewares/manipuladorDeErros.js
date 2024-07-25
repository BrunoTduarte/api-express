import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";
import RequisiçãoIncorreta from "../Erros/RequisiçãoIncorreta.js";
import ErroValidação from "../Erros/ErroValidação.js";

// eslint-disable-next-line no-unused-vars
function handleErrors(error, req, res, next) {    
  if(error instanceof mongoose.Error.CastError) {
   new RequisiçãoIncorreta().enviarResposta(res);
  } else if(error instanceof mongoose.Error.ValidationError) {
   new ErroValidação(erro).enviarResposta(res);

  } else {
   new ErroBase().enviarResposta(res);
  }
}

export default handleErrors;

