import React from 'react';

class ATMForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { amount:0 }
    }

getDenominations (amount) {
    const availableDenom = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let outputDenominations = [];
    let tempAmount = amount;
    for(let i=0; i<availableDenom.length; i++) {
        let notes = 0;
        if( tempAmount>=availableDenom[i]){
            notes = Math.floor(tempAmount/availableDenom[i]);
            tempAmount = tempAmount%availableDenom[i];
        } 
        outputDenominations.push(notes);
    }
    return outputDenominations;
  }

  getDenominationsAndSend() {
     this.props.setDenominations(this.getDenominations(this.state.amount));
  }
  setAmount (inputAmount){ 
    this.setState({amount: inputAmount});
  }

    render() {
        return (
            <div className="withdrawal-panel">
              <h2><b>Welcome to ATM</b></h2>
              <form onSubmit={(e) => {
                e.preventDefault();
this.getDenominationsAndSend();
              }}>
                <label htmlFor="amount">
                  Enter the Amount
                <input
                    id="amount"
                    value={this.state.amount}
                    placeholder="amount"
                    onChange={e => this.setAmount(e.target.value)}
                  />
                </label>
                <button>Get Money</button>
              </form>
            </div>
        )
    }
}

export default ATMForm;