import React from "react";
import { render } from "react-dom";
import ATMForm from './ATMform';
import Output from './output';

class App extends React.Component {
  constructor() {
    super(props);
    this.state({denomArr: []})
  }

  readDenominations(outputArray){
    this.setState({denomArr: outputArray})
  }
  render() {
    const {denominations} = this.state;
    return (
      <div>
        <div class="container">
          <div class="master-header">
            <h1 class="heading">ATM Money Dispenser</h1>
          </div>
          <div class="content">
            <ATMForm setDenominations={readDenominations}/>
            {denominations.length && 
              <Output denominationsOutput={denomArr} />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;