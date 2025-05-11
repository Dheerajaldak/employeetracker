class MessageParser {
    parse(message) {
      if (message.includes('hello')) {
        this.props.actionProvider.handleHello();
      }
    }
  }
  
  export default MessageParser;
  