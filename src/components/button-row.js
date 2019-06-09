import React from 'react';
import store from '../store/store';
import { connect } from 'react-redux';

class ButtonRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            localSomeText: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.someText !== this.state.localSomeText) {
            this.setState({ localSomeText: nextProps.someText });
        }
    }


    render() {
        return (
            <div>
                <h4>Button Row</h4>
                <button>{this.props.text}</button>
                <h2>Some Text in store</h2>
                <div>{this.props.someText}</div>
                <h2>Some Text in local state</h2>
                <div>{this.state.localSomeText}</div>
            </div>
        );
    }
}

// return props with properties
function mapStateToProps(state) {
    return {
        someText: state.someReducer.someText,
    }
}

const ButtonRowInstance = connect(mapStateToProps)(ButtonRow);

export default ButtonRowInstance;