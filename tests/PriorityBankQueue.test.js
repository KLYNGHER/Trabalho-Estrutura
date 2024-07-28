import PriorityBankQueue from '../src/PriorityBankQueue.js';
import { jest } from '@jest/globals';

describe('PriorityBankQueue', () => {
  let bankQueue;

  beforeEach(() => {
    bankQueue = new PriorityBankQueue();
  });

  /**
   * Test to add customers to the queue with different priorities.
   */
  test('adds customers to the queue with different priorities', () => {
    bankQueue.addCustomer('Customer 1', 1);
    bankQueue.addCustomer('Customer 2', 3);
    bankQueue.addCustomer('Customer 3', 2);
    
    expect(bankQueue.queue.length).toBe(3);
    expect(bankQueue.queue[0].name).toBe('Customer 2');
    expect(bankQueue.queue[1].name).toBe('Customer 3');
    expect(bankQueue.queue[2].name).toBe('Customer 1');
  });

  /**
   * Test to serve customers in order of priority.
   */
  test('serves customers in order of priority', () => {
    console.log = jest.fn();

    bankQueue.addCustomer('Customer 1', 1);
    bankQueue.addCustomer('Customer 2', 3);
    bankQueue.addCustomer('Customer 3', 2);
    
    bankQueue.serveCustomers();

    expect(console.log).toHaveBeenCalledWith('Serving customer: "Customer 2" with priority 3');
    expect(console.log).toHaveBeenCalledWith('Serving customer: "Customer 3" with priority 2');
    expect(console.log).toHaveBeenCalledWith('Serving customer: "Customer 1" with priority 1');
    expect(console.log).toHaveBeenCalledWith('All customers have been served.');
  });
});
