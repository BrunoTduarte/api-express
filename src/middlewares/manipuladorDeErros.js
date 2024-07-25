import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";
import RequisiçãoIncorreta from "../Erros/RequisiçãoIncorreta.js";

// eslint-disable-next-line no-unused-vars
function handleErrors(error, req, res, next) {    
  if(error instanceof mongoose.Error.CastError) {
   new RequisiçãoIncorreta().enviarResposta(res);
  } else if(error instanceof mongoose.Error.ValidationError) {
    const errorMessages = Object.values(error.errors)
      .map(err => err.message)
      .join("; ");

    res.status(400).json({ message: `Rolaram uns erros: ${errorMessages}` });
  } else {
   new ErroBase().enviarResposta(res);
  }
}

export default handleErrors;

