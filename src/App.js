import React, {Component} from 'react';    
import Button from './components/Button';    

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    }
  }

  onHandleEvent(actionName) {
    let counter = +this.state.counter;
    let newCounter = actionName === "increment" ? ++counter : (actionName === "decrement" ? --counter : 0);
    this.setState({
      counter: newCounter
    })
  }

  render() {
    return (
      <div className="container">
        <header>React - Counter</header>
        <div className="counter-value">{this.state.counter}</div>
        <Button title="Increment" color="blue" onHandleEvent={this.onHandleEvent.bind(this)} actionName="increment" />
        <Button title="Reset" color="red" onHandleEvent={this.onHandleEvent.bind(this)} actionName="reset" />
        <Button title="Decrement" color="green" onHandleEvent={this.onHandleEvent.bind(this)} actionName="decrement" />
      </div>
    );
  }
}

export default App;
