import React, { Component } from 'react';
import specimen from '../../specimen.jpg'

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            source: specimen
        }
    }

    componentDidMount() {
        const { item } = this.props;
        fetch(`http://konexio.codiscovery.co/bakery/api/?q=${item}`)
            .then(result => result.json())
            // .then(result => console.log(result))            
            .then(result => this.setState({ source: result.source }))

    }

    render() {
        return (
            <div className="col-6">
                <button className="btn btn-light" onClick={this.props.onClickFn}>
                    <img 
                        className="img-fluid" 
                        src={this.state.source ? this.state.source : specimen} 
                        alt="product" 
                    />
                </button>
            </div>
        );
    }
}

export default Card;