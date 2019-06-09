import React from 'react';

export class SomePage1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    render() {
        return (
            <div>Some Page 1 {this.state.time.toString()}</div>
        );
    }
}