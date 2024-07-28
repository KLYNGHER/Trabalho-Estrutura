/**
 * Class that manages a priority queue for bank customers.
 */
export default class PriorityBankQueue {
    /**
     * Creates a new instance of PriorityBankQueue.
     */
    constructor() {
      this.queue = [];
    }
  
    /**
     * Adds a new customer to the queue with the specified priority.
     * Customers are kept in descending order of priority.
     * @param {string} name - The name of the customer.
     * @param {number} priority - The priority of the customer.
     */
    addCustomer(name, priority) {
      this.queue.push({ name, priority });
      this.queue.sort((a, b) => b.priority - a.priority);
    }
  
    /**
     * Processes all customers in the queue, serving each one in order of priority.
     */
    serveCustomers() {
      console.log('Serving customers...');
      while (this.queue.length > 0) {
        const customer = this.queue.shift();
        console.log(`Serving customer: "${customer.name}" with priority ${customer.priority}`);
      }
      console.log('All customers have been served.');
    }
  }
  