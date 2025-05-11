class ActionProvider {
    handleHello = () => {
      this.props.setMessages((prev) => [
        ...prev,
        { text: 'Hi there!', source: 'bot' },
      ]);
    };
  }
  
  export default ActionProvider;
  