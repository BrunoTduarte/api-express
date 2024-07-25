import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";

// eslint-disable-next-line no-unused-vars
function handleErrors(error, req, res, next) {    
  if(error instanceof mongoose.Error.CastError) {
    res.status(500).json({ message: "Algumas informações fornecidas estão erradas." });
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

