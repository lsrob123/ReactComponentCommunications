import React from 'react';
import ButtonRow from '../components/button-row';
import TimeDisplay from '../components/time-display';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    render() {
        return (
            <div>
                <h1>Home Area</h1>
                <TimeDisplay something="haha" updatedTime={this.props.updatedTime}></TimeDisplay>
                <p />
                <ButtonRow text="Refresh - Remote"></ButtonRow>
            </div>
        );
    }
}