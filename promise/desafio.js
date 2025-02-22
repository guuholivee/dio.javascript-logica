const fs = require('fs')//requerimento 
const path = require('path')

const filepath = path.resolve('tarefas.csv')


//mesmo resultado de promisse so uma forma  reduzida de sintaxe!!
async function buscarArquivo() {
    try{
    const arquivo = await fs.promises.readFile(filepath)
    const textoDoArquivo = arquivo.toString('utf-8')
    console.log(textoDoArquivo)
    } catch(error)  {
        console.log(error)
    } finally{
        console.log('Finalizou Parça!! ')
    }
}
buscarArquivo()


//terminando a leitura chamou os dados de onde voce pediu para ler
/*PromessaDeLeituraDeArquivo.then((arquivo) =>{
    console.log(arquivo.toString('utf-8'))
}).catch((error)= >{
    console.log('Deu ruim Amigo!',error)
})
*/