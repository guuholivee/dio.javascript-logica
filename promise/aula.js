//ISSO é um promessa de um numero qualquer 
// com numeros aleatorios registra e depois de 1000 milisegundos ou 1 seg  sera retornado a resposta
//tudo que for assincrono no js  achara uma forma de promisse


const promessaDeUmNumeroQualquer = new Promise((resolve, reject) =>{
    setTimeout(()=>{
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
    }, 1000)
})

console.log ('vai filhão!')

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('finalizado!!')
    })


//promisse seria a mesma coisa 
//try = sera executado 
//catch = sera quando der erro
//finally= sera idependente de erro ou não
/*try {
} catch (error){

} finally{

}*/



