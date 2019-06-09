import React from 'react';
import store from '../store/store';
import { connect } from 'react-redux';

class ButtonRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h4>Button Row</h4>
                <button>{this.props.text}</button>
                <h2>Some Text in Store</h2>
                <div>{this.props.someText}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        someText: state.someText,
    }
}

const ButtonRowInstance = connect(mapStateToProps)(ButtonRow);

export default ButtonRowInstance;