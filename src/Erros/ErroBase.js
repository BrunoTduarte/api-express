class ErroBase extends Error {
    constructor(mensagem = "erro inerno do servidor", status = 500){
        super()
        this.message = mensagem;
        this.status = status;
    }


}


export default ErroBase;