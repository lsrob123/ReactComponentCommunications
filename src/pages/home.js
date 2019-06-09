import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    render() {
        return (
            <div>Home {this.state.time.toString()}</div>
        );
    }
}