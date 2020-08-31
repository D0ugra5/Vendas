const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PagamentoStatus = new Schema({

idPagamento:{

    type: String,
    required:true



},





    valorTotal: {

        type: Number,
        required: true


    },
    frete: {

        type: String,
        required: true

    },
    Endereco: {
        type: String,
        required: true
    },
    Numero: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
       
    },
    observacoes: {
        type: String,
       
    },
    IdUsuario: {
        type: String,
        required: true
    },

    cart:{

        type:Object,
        required:true
        
    },
 
 Status:{
 type:String,
 required:true
 },

 StatusV : {
 type:Number,
 default:0

 }





})



mongoose.model("pagamentos", PagamentoStatus)