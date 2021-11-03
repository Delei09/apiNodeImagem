const pets = require('../models/pets')

class petController {

    add(pet, res){
        pets.adicionar(pet, res)
    }
}

module.exports = new  petController()