import React, { Component } from 'react';
import Slider from './core/Slider'

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            price: 1
        }

        this.onInputItems = this.onInputItems.bind(this);
        this.onSlidePrices = this.onSlidePrices.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    renderForm() {
        return (
            <form>
                <div className="form-group row">
                    <input 
                        type="text" 
                        className="form-control col-8"  
                        placeholder="Item"
                        onChange={this.onInputItems}                            
                    />
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={this.onSubmit}>Add</button>
                </div>
            </form>
        );
    }

    onInputItems(evt) {
        const input = evt.target.value;        
        this.setState({
            input
        });
    }
    
    onSlidePrices(price) {
        this.setState({
            price
        });
    }

    onSubmit() {        
        console.log("price", this.state.price, "/ input", this.state.input);
        this.setState({
            input: "",
            price: 1
        });
    }

    render() {  
        console.log("price", this.state.price, "/ input", this.state.input);      
        return (            
            <div>
                {this.renderForm()}
                <p>{this.state.price} €</p>
                <Slider 
                    min={1}
                    max={10}
                    value={this.state.price}
                    onChange={this.onSlidePrices} 
                />
            </div>                                
        );
    }
}

export default Add;