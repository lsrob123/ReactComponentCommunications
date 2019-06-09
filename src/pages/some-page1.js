import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

export class SomePage1 extends React.Component {
    constructor(props) {
        super(props);

      
        //const propsEntities = this.props.location.state;
    }

    render() {
        return (
            <div>
                <h1>Some Page 1</h1>
                <div>ancesterTime from props - {this.props.ancesterTime.toString()}</div>
                <button type="button" onClick={this.props.setTime}>Set Time from SomePage1</button>

                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}