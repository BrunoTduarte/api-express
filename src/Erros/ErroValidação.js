import RequisiçãoIncorreta from "./RequisiçãoIncorreta.js";

class ErroValidação extends RequisiçãoIncorreta {
    constructor(erro) {
        const mensagensErro = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ");
   
        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
}

export default ErroValidação;