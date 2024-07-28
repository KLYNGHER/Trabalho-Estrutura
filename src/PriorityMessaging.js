/**
 * Class representing a message with content and priority.
 */
export class Message {
  /**
   * Creates a new instance of Message.
   * @param {string} content - The content of the message.
   * @param {number} priority - The priority of the message.
   */
  constructor(content, priority) {
    this.content = content;
    this.priority = priority;
  }
}

/**
 * Class that manages a queue of priority messages.
 */
export default class PriorityMessaging {
  /**
   * Creates a new instance of PriorityMessaging.
   */
  constructor() {
    this.queue = [];
  }

  /**
   * Adds a new message to the queue with the specified priority.
   * Messages are kept in descending order of priority.
   * @param {string} content - The content of the message.
   * @param {number} priority - The priority of the message.
   * @returns {Message} The added message.
   */
  addMessage(content, priority) {
    const message = new Message(content, priority);
    this.queue.push(message);
    this.queue.sort((a, b) => b.priority - a.priority);
    return message;
  }

  /**
   * Processes all messages in the queue, removing and displaying each one in order of priority.
   */
  processMessages() {
    while (this.queue.length > 0) {
      const message = this.queue.shift();
      console.log(`Processing message: "${message.content}" with priority ${message.priority}`);
    }
    console.log('All messages have been processed.');
  }
}
