import React from 'react';

export class TimeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.refreshLocal = this.refreshLocal.bind(this); // bind with "this" reference
        this.state = {
            time: new Date()
        };
    }

    refreshLocal(e) {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                Time: {this.props.something} - {`${this.state.time}`}
                <button onClick={this.refreshLocal}>Refresh - Local</button>
            </div>
        );
    }
}