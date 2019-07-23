import React from "react";
import ATMForm from './ATMform';
import Output from './output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {denomArr: []};
  }

  readDenominations(outputArray){
    this.setState({denomArr: outputArray})
  }
  render() {
    const {denomArr} = this.state;
    return (
      <div>
        <div className="container">
          <div className="master-header">
            <h1 className="heading">ATM Money Dispenser</h1>
          </div>
          <div className="content">
            <ATMForm setDenominations={this.readDenominations.bind(this)}/>
            {denomArr.length && 
              <Output denominationsOutput={denomArr} />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;