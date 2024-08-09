
class SegundoMaiorNumero{
    constructor(numeros){
        this.numeros = numeros;
    }

    segundoMaiorEncontrado(){
        if(this.numeros.length < 2){
            throw new Error ("O array tem que conter pelo menos dois elementos");
        }

        let primeiroMaior = null;
        let segundoMaior  = null;

        this.numeros.forEach(numero => {
            if(primeiroMaior === null || numero > primeiroMaior){
                 segundoMaior  = primeiroMaior;
                 primeiroMaior = numero;
            }else if(
                (segundoMaior === null || numero > segundoMaior) &&
                numero < primeiroMaior
            ){
                segundoMaior = numero;
            }
        });

        if(segundoMaior === null){
            throw new Error('Não existe segundo maior elemento')
        }

        return segundoMaior
    }
 
}