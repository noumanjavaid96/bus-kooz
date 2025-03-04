/**
 * Base Agent class that all specialized agents inherit from
 */
export class BaseAgent {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.messageQueue = [];
    this.knowledgeBase = {};
    this.isProcessing = false;
  }

  /**
   * Process a message and generate a response
   * @param {Object} message - The message to process
   * @returns {Promise<Object>} - The response message
   */
  async processMessage(message) {
    throw new Error('Method processMessage must be implemented by derived classes');
  }

  /**
   * Add a message to this agent's queue
   * @param {Object} message - The message to queue
   */
  queueMessage(message) {
    this.messageQueue.push(message);
    this.processQueue();
  }

  /**
   * Process messages in the queue
   */
  async processQueue() {
    if (this.isProcessing || this.messageQueue.length === 0) return;
    
    this.isProcessing = true;
    const message = this.messageQueue.shift();
    
    try {
      const response = await this.processMessage(message);
      if (message.replyTo) {
        message.replyTo(response);
      }
    } catch (error) {
      console.error(`Error processing message in ${this.name}:`, error);
    } finally {
      this.isProcessing = false;
      this.processQueue();
    }
  }

  /**
   * Update the agent's knowledge base
   * @param {Object} knowledge - New knowledge to incorporate
   */
  updateKnowledgeBase(knowledge) {
    this.knowledgeBase = { ...this.knowledgeBase, ...knowledge };
  }
}
