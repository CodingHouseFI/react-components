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
  render: function() {
    return (
      <div>
        <input type="text"/>
        <button>Add</button>
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
      messages: [
        {
          id: 1,
          text: 'hello!'
        },
        {
          id: 2,
          text: 'how are you?'
        }        
      ]
    };
  },
  render: function() {
    return (
      <div>
        <h1>MessageBoard</h1>
        <NewMessageForm/>
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

