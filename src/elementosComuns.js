// Q. 12 Escreva uma função que receba 2 arays e retorne um novo array contendo os elementos em comuns aos 2 arrays, sem duplicatas.
function elementosComuns(arrays1, arrays2) {
    // Cria um Set a partir do primeiro array.
  
    const set1 = new Set(arrays1); // utiliza o Set pra verificar a prsença de elementos do segundo array no primeiro array.
  
    // Filtra os elementos do segundo arrays que estão no Set do primeiro array.
  
    const comums = arrays2.filter((item) => set1.has(item));
  
    // Remove duplicatas usando um Set.
  
    return [...new Set(comums)];
  }
  
  // Exemplo de uso.
  
  const arrays1 = [1, 2, 3, 4, 7];
  const arrays2 = [3, 4, 5, 6, 8];
  
  const results = elementosComuns(arrays1, arrays2);
  console.log(results);
  
  export default elementosComuns;