

const fs = require('fs')

function upload(caminho, nome){
    
    const novoCaminho = './imagem/dogUpload.jpeg'
    fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish' , (erro) => {
            if(erro){
                console.log(erro)
            }
            teste(novoCaminho)
        })
}

function teste(s){
    console.log(s)
}

upload('/home/administrador/Documentos/Treinamento/api/imagem/dog.jpg' , 'doguinho')
