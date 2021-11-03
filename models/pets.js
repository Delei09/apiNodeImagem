const conexao = require('../service/conexao')
const fs = require('fs')
const path = require('path')

class Pets {

    adicionar(pet, res){
        const sql = 'INSERT INTO pets SET ?'
        const novoCaminho = `./imagem/${pet.nome}.jpg`
        const tipo = path.extname(pet.imagem)
        const tiposValidos = ['jpg' , 'jpeg' , 'png' ]
        const ehValido = tiposValidos.indexOf(tipo.substring(1))

        if(ehValido === -1){
            const erro = 'Tipo não é valido'
            res.status(400).json(erro)
        }else{
            
            fs.createReadStream(pet.imagem)
                .pipe(fs.createWriteStream(novoCaminho))
                .on('finish' , (erro) => {
                    if(erro){
                        res.status(400).json(erro)
                    }else{
                        const novoPet = {nome : pet.nome , imagem : novoCaminho}
                        conexao.query(sql, novoPet, (err) => {
                            if(err){
                                res.status(400).json(err)
                            }else{
                                res.status(201).json(novoPet)
                            }
                        })
                    }
                    
                })
        }           
    }
  
}

module.exports = new Pets()