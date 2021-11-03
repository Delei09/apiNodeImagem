const moment = require('moment')
const conexao = require('../service/conexao')

class atendimentoModel {

    adicionar(atendimento, res){
        let {data} = atendimento;
        const dataAtual = moment().format('YYYY-MM-DD')

        data = moment(data , 'DD/MM/YY').format('YYYY-MM-DD')
        atendimento = {...atendimento, data , dataAtual}

        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql , atendimento , (erro, result) => {
            if(erro){
                 res.status(400).json(erro)
            }else{
                res.status(201).json(atendimento)
            }
        })
     }

    deletar(id  , res){
        const sql = `DELETE FROM atendimentos WHERE id = ${id}` ;
        const sqlATendimento = `SELECT * FROM atendimentos WHERE id =${id}` ;
        let atendimento = '' ;

        conexao.query(sqlATendimento , (erro , result) => {
            if(erro){

            }else{
                atendimento = result
            }
        } )

        conexao.query(sql , (erro, result) => {
            if(erro){
                 res.status(400).json(erro)
            }else{
                res.status(201).json(atendimento)
            }
        })
    }

    alterar(id, valores , res){

        valores.data = moment(valores.data , 'DD/MM/YY').format('YYYY-MM-DD')
        


        const sql = `UPDATE atendimentos SET ? WHERE id= ${id}`
        conexao.query(sql, [valores , id] , (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(valores)
            }
        })
    }

    lista(res){
       const  sql = 'SELECT * FROM atendimentos'
        conexao.query(sql, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
           }else{
               res.status(200).json(results)
           }
        })

    }

    consultaId(id, res){
        const sql = `SELECT * FROM atendimentos WHERE ID = ${id}`
        conexao.query(sql , (erro , results) => {
            if(erro){
                res.status(400).json(erro)
           }else{
               res.status(200).json(results)
           }
        })
    }
}

module.exports = new atendimentoModel()