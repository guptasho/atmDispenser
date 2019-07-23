import React from 'react';

class Output extends React.Component {
    constructor(props) {
        super(props);
    }

    createOutputPanel(availableDenom, denominationsOutput) {
        let outputTemplate = [];
        let countOfNotes = 0;
        for(let i=0; i<availableDenom.length; i++) {
            countOfNotes+=denominationsOutput[i];

            const template = (
                <div key={availableDenom[i]}>
                    {denominationsOutput[i]} notes of Rs{availableDenom[i]};
                </div>
            )

            outputTemplate.push(template);
        }

        return (<div>
            {outputTemplate}

            <div> Total notes dispensed:{countOfNotes}</div>
        </div>)
    }

    render() {
        const availableDenom = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        return (
            <div class="output-panel">
                {this.createOutputPanel(availableDenom, this.props.denominationsOutput)}
            </div>
        )
    }
}

export default Output;