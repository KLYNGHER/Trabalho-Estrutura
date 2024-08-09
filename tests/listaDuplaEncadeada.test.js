import ListaDuplamenteEncadeada from "../src/listaDuplaEncadeada.js";
import { jest } from '@jest/globals';

// É usado para agrupar testes relacionados à classe ListaDuplamenteEncadeada.
describe("Test class ListaDuplamenteEncadeada of array", () => {
  let lista;
  // Configure a new state before each test, ensuring that each test starts with a new instance of the 'ListaEncadeda' class.
  beforeEach(() => {
    lista = new ListaDuplamenteEncadeada();
  });

  // 'test' method, below checks if the list is correctly initialized as empty.
  test("Deve iniciar com uma lista vazia", () => {
    expect(lista.getHead()).toBeNull();
    expect(lista.getTail()).toBeUndefined();
    expect(lista.getCount()).toBe(0);
  });

  // 'Test' method, below tests whether a node can be correctly added to 
  // the end of the list.
  test("Deve adicionar um novo nó ao final da lista", () => {
    lista.addEnd(1);
    expect(lista.getHead()).toBe(1);
    expect(lista.getTail()).toBe(1);
    expect(lista.getCount()).toBe(1);
  });

  /**
   * 'test' method, below checks if multiple nodes can be added to the 
   end of the list,
   * and whether the list correctly reflects the state after each addition.
   */

  test("Deve adicionar vários nós ao final da lista", () => {
    lista.addEnd(1);
    lista.addEnd(3);
    lista.addEnd(5);
    expect(lista.getHead()).toBe(1);
    expect(lista.getTail()).toBe(5);
    expect(lista.getCount()).toBe(3);
  });

  /**
   * 'test' method, below confirms whether a node can be correctly 
   added to the beginning of the list
   *  and whether the list correctly reflects the new state.
   */
  test("Deve adicionar um novo nó no início da lista", () => {
    lista.addEnd(1);
    lista.adicionarInicio(0);
    expect(lista.getHead()).toBe(0);
    expect(lista.getTail()).toBe(1);
    expect(lista.getCount()).toBe(2);
  });

  /**
   * 'test' method, below tests the removal of the first node from the list
   * and checks if getHead() and getCount() are updated correctly after removal.
   */
  test("Deve remover o primeiro nó da lista", () => {
    lista.addEnd(1);
    lista.addEnd(3);
    lista.shift();
    expect(lista.getHead()).toBe(3);
    expect(lista.getCount()).toBe(1);
  });

  /**
   * 'test' method, below checks the removal of the last node from the list
   * and whether getTail() and getCount() are updated correctly.
   */
  test("Deve remover o último nó da lista", () => {
    lista.addEnd(1);
    lista.addEnd(3);
    lista.pop();
    expect(lista.getTail()).toBe(1);
    expect(lista.getCount()).toBe(1);
  });

  /**
   * 'test' method, below confirms that the getElementAt() method 
   returns the correct element,
   * at the specified position and returns null for invalid indexes
   */
  test("Deve obter o elemento na posição específica", () => {
    lista.addEnd(1);
    lista.addEnd(3);
    lista.addEnd(5);
    expect(lista.getElementAt(0)).toBe(1);
    expect(lista.getElementAt(1)).toBe(3);
    expect(lista.getElementAt(2)).toBe(5);
    expect(lista.getElementAt(3)).toBeNull();
  });

  /**
   * 'test' method, below checks whether the print() method correctly 
   returns an array
   * with all the elements in the list from start to finish.
   */
  test("Deve imprimir a lista do início para o finaal", () => {
    lista.addEnd(1);
    lista.addEnd(3);
    lista.addEnd(5);
    expect(lista.print()).toEqual([1, 3, 5]);
  });

  /**
   * test' method, below checks if the printBackward() method prints 
   the list from end to beginning correctly
   * and captures console output for validation.
   */
  test("Deve imprimir a lista do final para o início", () => {
    lista.addEnd(1);
    lista.addEnd(3);
    lista.addEnd(5);

    // Captura a saída do console.
    console.log = jest.fn();
    lista.printBackward();
    expect(console.log).toHaveBeenCalledWith(
      "Lista da cauda para a cabeça:",
      "5 - 3 - 1"
    );
  });
});