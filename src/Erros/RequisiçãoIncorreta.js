import ErroBase from "./ErroBase.js";

class RequisiçãoIncorreta extends ErroBase {
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
        super(mensagem, 400);
    }
}

export default RequisiçãoIncorreta;