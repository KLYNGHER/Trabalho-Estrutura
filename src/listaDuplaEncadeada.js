// classe auxiliar que representa um nó da lista dulamente encadeada.

/**
 * Represent a list where each element points to the next and previous one.
 */
class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

// classe principal que representa a lista duplamente encadeada.
/**
 * Maintain an ordered collection of elements with the ability to navigate 
 two-way.
 */
class ListaDuplamenteEncadeada {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // Precisamos implementar esses 3 métodos abaixo.

  /**
   * This method returns the data from the first node (head) of the doubly 
   linked list.
   * @returns Checks whether the head node exists. If it exists, returns 
   the data contained in the head node. If it does not exist, return null.
   */
  getHead() {
    if (this.head) {
      return this.head.data;
    }
    return null;
  }

  /**
   * This method returns the data from the last node (tail) of the doubly 
   linked list.
   * @returns Checks whether the tail node exists. If it exists, returns t
   he data contained in the tail node. If it does not exist, it returns 
   nothing (undefined).
   */
  getTail() {
    if (this.tail) {
      return this.tail.data;
    }
  }

  /**
   * This method returns the number of nodes present in the doubly linked list.
   * @returns Retorna o valor da propriedade count, que mantém o controle 
   da quantidade de nós na lista.
   */
  getCount() {
    return this.count;
  }

  /**
   * This method returns an array containing all data from the nodes in 
   the doubly linked list, in order.
   * @returns Checks whether the head node exists. If it exists, it goes t
   hrough all the nodes in the list, starting at the head, and stores the 
   data for each node in an array.
   * Returns the array containing the data. If the list is empty, returns null.
   */

  print() {
    // método para mostrar todo o conteúdo da Lista Duplam. Encadeada.
    if (this.head) {
      let arr = [];
      let current = this.head;
      for (let i = 0; i < this.count; i++) {
        arr[i] = current.data;
        current = current.next;
      }
      return arr;
    } else {
      return null;
    }
  }

  /**
   * This method adds a new node at the beginning of the doubly linked list.
   * @param {data} data, Adjusts the next pointer of the new node to 
   point to the node that is currently the head of the list.
   */

  adicionarInicio(data) {
    let no = new Node(data);
    no.next = this.head;

    this.head = no;

    if (this.count === 0) {
      this.tail = this.head;
    } else {
      this.head.next.previous = this.head;
    }
    this.count++;
  }

  /**
   * This method adds a new node at the end of the doubly linked list.
   * @param {*} data, Creates a new node with the given data. And 
   if the list is empty (tail is null), sets both head and tail as the new node.
   */

  addEnd(data) {
    // método para adicionar o elemento ao final da lista.
    const node = new Node(data);

    if (this.tail === null) {
      // se a lista estiver vazia.
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  /**
   * This method removes the first node from the doubly linked list.
   * Checks if the list is not empty (if head exists). And updates 
   the head of the list to the next node.
   * Decreases the count of nodes in the list (count).
   */

  shift() {
    // método para remover elemento do início da lista.
    if (this.head) {
      this.head = this.head.next;
      this.count--;
      if (this.count === 0) {
        this.tail = null;
      } else {
        this.head.previous = null;
      }
    }
  }

  /**
   * This method removes the last node from the doubly linked list and 
   returns its value.
   * Checks if the list is not empty (if head exists).
   * If the list has only one node, set head and tail to null.
   * If the list has more than one node, set the next pointer of the 
   penultimate node to null and set the penultimate node as the new tail.
   */

  pop() {
    // metodo para remover o último elemento da lista ou array e lhe devolver;
    if (this.head) {
      if (this.count === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail.previous.next = null;
        this.tail = this.tail.previous;
      }
      this.count--;
    }
  }

  /**
   * This method returns the data of the node that is at a specific 
   position in the list.
   * @param {*} index, Checks whether the given index is valid 
   (greater than or equal to 0 and less than the count of nodes in the list).
   * @returns Returns node data at the specified position. 
   If the index is not valid, return null.
   */

  getElementAt(index) {
    // método que devolve o elemento que está em uma posição 
    //específica da lista. Se o mesmo não estiver, será devolvido null.
    if (index > -1 && index < this.count) {
      let current = this.head;
      let i = 0;

      while (i++ < index) {
        current = current.next;
      }
      return current.data;
    } else {
      return null;
    }
  }

  /**
   * This method displays all elements in the list from the first node 
   (head) to the last node (tail).
   * Checks if the list is empty (if head is null). If the list is empty, 
   displays a message indicating that the list is empty.
   * @returns If the list is not empty, it starts from the head node and t
   raverses the list to the tail node, storing the data from each node 
   in an array.
   */

  printForward() {
    // Método para mostrar todos os elementos da cabeça para a cauda.
    if (this.head === null) {
      console.log("A lista está vazia.");
      return;
    }
    let current = this.head;
    let elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }
    console.log("Lista de cabeça para a cauda:", elements.join(" - "));
  }

  /**
   * This method displays all elements in the list from the last node 
   (tail) to the first node (head).
   * Checks if the list is empty (if tail is null). If the list is empty, 
   displays a message indicating that the list is empty.
   * @returns If the list is not empty, it starts from the tail node and t
   raverses the list to the head node, storing the data from each node 
   in an array.
   */

  printBackward() {
    //  método para mostrar todos os elementos da lista da cauda para a cabeça.
    if (this.tail === null) {
      console.log("A lista está vazia.");
      return;
    }
    let current = this.tail;
    let elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.previous;
    }
    console.log("Lista da cauda para a cabeça:", elements.join(" - "));
  }
}

// Instanciando a classe 'ListaDuplamenteEncadeada' com métodos para 
// manipular valores atribuídos, removidos ou buscados, etc na lista.

const list2 = new ListaDuplamenteEncadeada();
list2.addEnd(1);
list2.addEnd(3);
list2.addEnd(5);
list2.print();

list2.adicionarInicio(0);
list2.adicionarInicio(-1);
list2.printForward();
list2.printBackward();

list2.pop();
list2.printForward();

list2.shift();
list2.printForward();

export default ListaDuplamenteEncadeada;