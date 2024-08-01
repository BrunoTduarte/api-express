import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor !== "", //!== diferente
    message: ({ path }) => `Um campo ${path} foi fornecido em branco`
});