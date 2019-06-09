import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

export class TimeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.refreshLocal = this.refreshLocal.bind(this); // bind with "this" reference
        this.refreshStore = this.refreshStore.bind(this);
        this.state = {
            time: new Date()
        };
    }

    refreshLocal(e) {
        this.setState({
            time: new Date()
        });
    }

    refreshStore(e) {
        this.props.updateSomeText({ someText: `Update from TimeDisplay to store: ${this.state.time}` });
    }

    render() {
        return (
            <div>
                <div>Time: {this.props.something} - local {`${this.state.time} - ancester ${this.props.updatedTime}`}</div>
                <button onClick={this.refreshLocal}>Refresh - Local</button> &nbsp;
                <button onClick={this.refreshStore}>Refresh - Store</button>
            </div>
        );
    }
}

// return props with methods
function mapDispatchToProps(dispatch) {
    return {
        updateSomeText: payload => dispatch(actions.getUpdateSomeTextAction(payload))
    }
}

const TimeDisplayInstance = connect(null, mapDispatchToProps)(TimeDisplay);

export default TimeDisplayInstance;


