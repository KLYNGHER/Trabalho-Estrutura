import PriorityMessaging from '../src/PriorityMessaging.js';
import { jest } from '@jest/globals';

describe('PriorityMessaging', () => {
  let messaging;

  beforeEach(() => {
    messaging = new PriorityMessaging();
  });

  /**
   * Test to add messages to the queue with different priorities.
   */
  test('adds messages to the queue with different priorities', () => {
    messaging.addMessage('Message 1', 1);
    messaging.addMessage('Message 2', 3);
    messaging.addMessage('Message 3', 2);
    
    expect(messaging.queue.length).toBe(3);
    expect(messaging.queue[0].content).toBe('Message 2');
    expect(messaging.queue[1].content).toBe('Message 3');
    expect(messaging.queue[2].content).toBe('Message 1');
  });

  /**
   * Test to process messages in order of priority.
   */
  test('processes messages in order of priority', () => {
    console.log = jest.fn();

    messaging.addMessage('Message 1', 1);
    messaging.addMessage('Message 2', 3);
    messaging.addMessage('Message 3', 2);
    
    messaging.processMessages();

    expect(console.log).toHaveBeenCalledWith('Processing message: "Message 2" with priority 3');
    expect(console.log).toHaveBeenCalledWith('Processing message: "Message 3" with priority 2');
    expect(console.log).toHaveBeenCalledWith('Processing message: "Message 1" with priority 1');
    expect(console.log).toHaveBeenCalledWith('All messages have been processed.');
  });
});