import React, { Component } from 'react';

class Button extends Component {
    render() {
        let isSelected = this.props.isSelected;
        let buttonColor = "btn-outline-dark";
        if (isSelected) {
            buttonColor = "btn-primary"
        }        

        return (
            <button 
                className={`btn ${buttonColor}`}                
                onClick={this.props.onClick}>
                    {this.props.children}
            </button>
        );
    }
}

export default Button;