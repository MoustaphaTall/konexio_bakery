import React, { Component } from 'react';
import Card from './products/Card'

class Pay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            basket: [],
            total: 0,
            totalVat: 0,
            totalEcoTax: 0
        }
    }

    // onClickProduct(name, price) {
    //     this.setState({
    //         total
    //     });
    // }

    render() {
        return (
            <div>
                <p>{this.state.total} €</p>
                <Card />
            </div>            
        );
    }
}

export default Pay;