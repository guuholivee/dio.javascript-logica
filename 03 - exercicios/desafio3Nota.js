/*faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
sua media e a sua classificação conforme a tabela abaixo.

média = (nota 1 + nota 2 + nota 3) / 3;

classificação:
- Média menor que 5 Reprovado;
- média entre 5 e 7, recuperação;
- média acima de 7, passou de semestre;
*/

const Nota1 = 1;
const Nota2 = 5;
const Nota3 = 1;

const media = (Nota1 + Nota2 + Nota3) / 3;
console.log (`A sua nota foi: ${media.toFixed(1)}`);

    if(media > 7 ){ 
        console.log("aprovado")
    } else if (media >= 5 && media <= 7){
        console.log("recuperação")
    }else {
        console.log("reprovado")
    }