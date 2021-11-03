const  router  = require('./rotas')
const tabela = require('./bancoDeDados/Tabela')
const conexao = require('./service/conexao')

const {porta , app , bodyParser} = require('./service/servico')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(router)

tabela.criar(conexao)


app.listen(porta , () => {
    console.log('Servidor rodando na porta' , porta)
})
