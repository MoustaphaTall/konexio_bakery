import React, { Component } from 'react';

class Button extends Component {
    render() {
        let isSelected = this.props.isSelected;
        let buttonColor = "btn-light";
        if (isSelected) {
            buttonColor = "btn-primary"
        }        

        return (
            <button 
                className={`btn ${buttonColor}`}
                style={{border: "1px black solid"}}
                onClick={this.props.onClick}>
                    {this.props.children}
            </button>
        );
    }
}

export default Button;