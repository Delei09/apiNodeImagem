
class Tabela {
    criar(conexao){
        this.criarAtendimento(conexao)
        this.criarPet(conexao)
    }

    criarAtendimento(conexao){
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos( ID int NOT NULL AUTO_INCREMENT , cliente varchar(50) NOT NULL , pet varchar(50) NOT NULL  , servico varchar(50) NOT NULL  , status varchar(50) NOT NULL , observacoes text NOT NULL, data date NOT NULL, dataAtual date NOT NULL, PRIMARY KEY(ID)  )'
        conexao.query(sql , (erro, result) => {
            if(erro){
                return erro
            }else{
                console.log('Tabela atendimentos ok')
            }

        })
    }

    criarPet(conexao){
        const sql = 'CREATE TABLE IF NOT EXISTS pets(ID int NOT NULL AUTO_INCREMENT, nome varchar(50) , imagem varchar(200), PRIMARY KEY(ID))'
        conexao.query(sql , (erro, result) => {
            if(erro){
                return erro
            }else{
                console.log('Tabela pets ok')
            }

        })
    }
}

module.exports = new Tabela()