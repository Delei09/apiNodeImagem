const atendimentoModel = require('../models/atendimentoModel')

class atendimentoController {

    adicionar(atendimento, res){
         atendimentoModel.adicionar(atendimento , res)
    }

    getLista(res){
        atendimentoModel.lista(res)
    }

    getId(id , res){
        atendimentoModel.consultaId(id , res)
    }

    excluir(id, res){
        atendimentoModel.deletar(id, res)
    }
    atualizar(id, valores, res){
        atendimentoModel.alterar(id, valores, res)
    }
}

module.exports = new atendimentoController()