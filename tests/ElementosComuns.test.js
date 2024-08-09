// const elementosComuns = require('./NovoArraysEmCom.js'); //importando a função a ser testada.

import elementosComuns from "../src/elementosComuns.js";

// Test to see if the function returns common elements without duplicates.
test("Deve retornar elementos comuns entre dois arrays sem duplicatas", () => {
  const arrays1 = [1, 2, 3, 4, 7];
  const arrays2 = [3, 4, 5, 6, 8];
  const resultadoEsperado = [3, 4];

  expect(elementosComuns(arrays1, arrays2)).toEqual(resultadoEsperado);
});

// Test to verify the case when there are no common elements.
test("Deve retornar um array vazio quando não há elementos comuns", () => {
  const arrays1 = [1, 2, 3];
  const arrays2 = [4, 5, 6];
  const resultadoEsperado = [];

  expect(elementosComuns(arrays1, arrays2)).toEqual(resultadoEsperado);
});

// Test to verify removal of duplicates in input arrays.
test("Deve remover duplicatas nos arrays e retornar apenas elementos comuns", () => {
  const arrays1 = [1, 2, 2, 3, 4, 7];
  const arrays2 = [3, 4, 4, 5, 6, 8];
  const resultadoEsperado = [3, 4];

  expect(elementosComuns(arrays1, arrays2)).toEqual(resultadoEsperado);
});

// Test to check for empty arrays.
test("Deve retornar um array vazio quando pelo menos um dos arrays de entrada é vazio", () => {
  const arrays1 = [1, 2, 3];
  const arrays2 = [];
  const resultadoEsperado = [];

  expect(elementosComuns(arrays1, arrays2)).toEqual(resultadoEsperado);
});

// Test to check the order of the elements.
test("Deve retornar elementos comuns na ordem de aparição no segundo array", () => {
  const arrays1 = [1, 2, 3, 4, 7];
  const arrays2 = [4, 1, 2, 3, 5, 6, 8];
  const resultadoEsperado = [4, 1, 2, 3];

  expect(elementosComuns(arrays1, arrays2)).toEqual(resultadoEsperado);
});