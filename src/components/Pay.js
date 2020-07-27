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

    componentDidMount() {
        const items = this.props.items;
        const basket = this.state.basket;
        items.map(item => basket.push({ name: item.name, price: item.price }));
        // console.log("basket", basket);
        this.setState({
            basket
        });
    }

    onClickProduct(name, price) {
        let total = this.state.total;
        let totalVat = this.state.totalVat;
        let totalAfterTax = this.state.totalAfterTax;
        let totalEcoTax = this.state.totalEcoTax;
        const ecoTax = 0.03;

        total += price;
        const totalAfterTaxRaw = price + ecoTax - ((price + ecoTax) * 20 / 100);
        totalAfterTax += parseInt(totalAfterTaxRaw * 100) / 100;
        totalEcoTax += ecoTax;

        this.setState({
            total,
            totalAfterTax,
            totalEcoTax
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

    renderTotal() {
        const basket = this.state.basket;
        if (basket.length === 0) {
            return <h2>No items available</h2>
        }

        return (
            <div className="col-12" style={{ textAlign: "right", fontSize: "1.3em" }}>
                <p>Subtotal : {this.state.total} €</p>
                <p>Total After Tax : {this.state.totalAfterTax} €</p>
                <p>EcoTax : {this.state.totalEcoTax} €</p>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderTotal()}
                </div>
                <div className="row">
                    {this.renderCards()}
                </div>

            </div>
        );
    }
}

export default Pay;