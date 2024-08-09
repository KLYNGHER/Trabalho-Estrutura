// const unirArraysSemDuplicatas = require('./NovoArraySemdupl.js');

// Importando a função que está no outro arquivo princ. a ser testada.
import unirArraysSemDuplicatas from "../src/unirArraysSemDuplicatas.js";

// Test to see if the function combines two arrays and removes duplicates correctly.
test("Deve combinar dois arrays e remover duplicatas", () => {
  const array1 = [1, 2, 3, 5, 7];
  const array2 = [2, 3, 6, 8, 9];
  const resultadoEsperado = [1, 2, 3, 5, 7, 6, 8, 9];

  expect(unirArraysSemDuplicatas(array1, array2)).toEqual(resultadoEsperado);
});

// Test to check the case when one of the arrays is empty.
test("Deve retornar todos os elementos do outro array quando um dos arrays está vazio", () => {
  const array1 = [1, 2, 3];
  const array2 = [];
  const resultadoEsperado = [1, 2, 3];

  expect(unirArraysSemDuplicatas(array1, array2)).toEqual(resultadoEsperado);
});

// Test to check matching and removal of duplicates when both arrays have duplicate elements.
test("Deve remover duplicatas quando ambos os arrays contêm elementos duplicados", () => {
  const array1 = [1, 2, 3, 3, 4];
  const array2 = [3, 4, 5, 5, 6];
  const resultadoEsperado = [1, 2, 3, 4, 5, 6];

  expect(unirArraysSemDuplicatas(array1, array2)).toEqual(resultadoEsperado);
});

// Test to check the combination of arrays with equal elements.
test("Deve retornar apenas os elementos únicos quando ambos os arrays contêm os mesmos elementos", () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  const resultadoEsperado = [1, 2, 3];

  expect(unirArraysSemDuplicatas(array1, array2)).toEqual(resultadoEsperado);
});

// Test for empty arrays.
test("Deve retornar um array vazio quando ambos os arrays de entrada são vazios", () => {
  const array1 = [];
  const array2 = [];
  const resultadoEsperado = [];

  expect(unirArraysSemDuplicatas(array1, array2)).toEqual(resultadoEsperado);
});