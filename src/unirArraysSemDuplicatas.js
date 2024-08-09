// Q. 13. Escreva uma função que receba 2 arrays e retorne um novo array contendo todos os elementos dos dois arrays, sem duplicatas.

function unirArraysSemDuplicatas(array1, array2) {
    //Combina dos 2 arrays.
    const combinado = [...array1, ...array2]; // Essa função utiliza o operador spread (...) para combinar os dois arrays e o objeto Set para remover duplicatas.
  
    // Remove duplicatas usando um Set.
  
    const semDuplicatas = [...new Set(combinado)];
  
    return semDuplicatas;
  }
  
  // Exemplo de uso:
  
  const array1 = [1, 2, 3, 5, 7];
  const array2 = [2, 3, 6, 8, 9];
  
  const result = unirArraysSemDuplicatas(array1, array2);
  console.log(result);
  
  export default unirArraysSemDuplicatas;