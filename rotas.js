const {Router} = require('express')
const atendimentoController = require('./controller/atendimentoController')
const petController = require('./controller/petController')

const router = Router()


    router.get('/atendimentos' , (req , res) => {
        atendimentoController.getLista(res)
    })

    router.post('/atendimentos' , (req , res) => {  
        
        atendimentoController.adicionar(req.body , res) 
        
    })

    router.post('/pet', (req, res) => {
        petController.add(req.body , res)
    })

    router.delete('/atendimentos/:id' , (req ,res) => {
        atendimentoController.excluir(req.params.id , res)
    })

    router.get('/atendimentos/:id' , (req, res) => {

        atendimentoController.getId(req.params.id , res)
    })

    router.patch('/atendimentos/:id' , (req , res) => {
        atendimentoController.atualizar(req.params.id , req.body , res)
    })

module.exports = router

        
              
              
              
              
              