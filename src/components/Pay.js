import React, { Component } from 'react';
import Card from './products/Card'

class Pay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            basket: [],
            total: 0,
            totalVat: 0,
            totalAfterTax: 0,
            totalEcoTax: 0
        }
    }

    onClickProduct(name, price) {
        let total = this.state.total;
        let totalVat = this.state.totalVat;
        let totalAfterTax = this.state.totalAfterTax;
        let totalEcoTax = this.state.totalEcoTax;
        const ecoTax = 0.03;

        total += price;
        totalAfterTax += price + ecoTax - ((price + ecoTax) * 20 / 100)
        totalEcoTax += ecoTax;

        this.setState({
            total,
            totalAfterTax,
            totalEcoTax
        });
    }

    componentDidMount() {
        const items = this.props.items;
        const basket = this.state.basket;
        items.map(item => basket.push({ name: item.name, price: item.price }));
        // console.log("basket", basket);
        this.setState({
            basket
        });
    }

    renderCards() {
        const basket = this.state.basket;
        return basket.map((item, index) => {
            return (
                <Card
                    item={item.name}
                    onClickFn={() => this.onClickProduct(item.name, item.price)}
                    key={index}
                />
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Subtotal : {this.state.total} €</p>
                        <p>TotalAfterTax : {this.state.totalAfterTax} €</p>
                        <p>EcoTax : {this.state.totalEcoTax} €</p>
                    </div>
                </div>
                <div className="row">
                    {this.renderCards()}
                </div>

            </div>
        );
    }
}

export default Pay;