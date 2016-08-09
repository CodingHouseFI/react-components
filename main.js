const Title = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to React</h1>
      </div>
    );
  }
});

const Counter = React.createClass({
  render: function() {
    let {counter, addCount, minusCount} = this.props;

    return (
      <div>
        <h3>Counter: {counter}</h3>
        <button onClick={addCount}>+</button>
        <button onClick={minusCount}>-</button>
      </div>
    )
  }
});

const NewMessageForm = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  addMessage: function() {
    this.props.addMessage(this.state.text);
    this.setState({text: ''});
  },
  render: function() {
    return (
      <div>
        <input type="text"
               value={this.state.text}
               onChange={ e => this.setState({text: e.target.value}) }
         />
        <button onClick={this.addMessage}>Add</button>
      </div>
    );
  }
});

const MessageList = React.createClass({
  render: function() {
    let messages = this.props.messages.map(message => {
      return <li key={message.id}>{message.text}</li>
    });
    return (
      <ul>
        {messages}
      </ul>
    )
  }
})

const MessageBoard = React.createClass({
  getInitialState: function() {
    return {
      messages: []
    };
  },
  addMessage: function(text) {
    let message = {
      text,
      id: uuid()
    };

    this.setState({
      messages: this.state.messages.concat(message)
    })

  },
  render: function() {
    return (
      <div>
        <h1>MessageBoard</h1>
        <NewMessageForm addMessage={this.addMessage}/>
        <MessageList messages={this.state.messages}/>
      </div>
    )
  }
})

const Root = React.createClass({  // create a new component
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  addCount: function() {
    this.setState({counter: this.state.counter + 1});
  },
  minusCount: function() {
    this.setState({counter: this.state.counter - 1});
  },
  render: function() {
    let counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      counter: this.state.counter
    };

    return (
      <div>
        <Title/>
        <Counter {...counterProps} />
        <hr/>
        <MessageBoard/>
      </div>
    );
  }
});

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

