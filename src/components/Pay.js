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
        const { items } = this.props;
        const { basket } = this.state;
        items.map(item => basket.push({ name: item.name, price: item.price, count: 0, isSelected: false }));
        // console.log("basket", basket);
        this.setState({
            basket
        });
    }

    onClickProduct(price, index) {        
        const ecoTax = 0.03;
        const vat = 0.2;
        let { total, totalVat, totalAfterTax, totalEcoTax, basket } = this.state;                

        total += price;
        const totalAfterTaxRaw = price + ecoTax - ((price + ecoTax) * vat);
        totalAfterTax += parseInt(totalAfterTaxRaw * 100) / 100;
        totalEcoTax += ecoTax;
        totalVat += vat;

        let counter = 0;        
        counter++
        basket[index].count += counter;
        basket[index].isSelected = true;

        this.setState({
            total,
            totalAfterTax,
            totalEcoTax,
            totalVat,
            basket            
        });        
    }    

    renderCards() {
        const basket = this.state.basket;
        return basket.map((item, index) => {
            return (
                <Card
                    item={item.name}
                    onClickFn={() => this.onClickProduct(item.price, index)}
                    key={index}
                />
            );
        });
    }

    renderItemCounts() {
        const basket = this.state.basket;
        let selectedBasket = basket.filter((item) => item.isSelected === true);
        
        if (selectedBasket.length === 0) {
            return null;
        }

        return selectedBasket.map((item) => {
            return ( 
                <div className="col-12">
                    <ul style={{listStyleType: "none"}}>
                        <li>{item.name} x{item.count}</li>
                    </ul>                
                </div>
            );
        });        
    }

    renderTotal() {
        const { basket, total, totalEcoTax, totalVat, totalAfterTax } = this.state;
        if (basket.length === 0) {
            return <h2>No items available</h2>
        }

        return (
            <div className="col-12" style={{ textAlign: "right", fontSize: "1.3em" }}>
                <p>Subtotal : {total} €</p>                
                <p>Ecotax : {parseInt(totalEcoTax * 100) / 100} €</p>
                <p>VAT : {parseInt(totalVat * 100) / 100} €</p>
                <h3>Total: {parseInt(totalAfterTax * 100) / 100} €</h3>                
            </div>
        );
    }

    render() {
        const {basket } = this.state;
        console.log(basket);
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">                        
                        <h2>Pay</h2>                    
                    </div>
                </div>
                <div className="row">
                    {this.renderItemCounts()}
                </div>
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