import React from 'react';

export class ButtonRow extends React.Component{
    constructor(props){
        super(props);

        this.state={

        };
    }

    render(){
        return (
            <button>{this.props.text}</button>
        );
    }
}