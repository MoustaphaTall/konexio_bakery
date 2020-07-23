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
        fetch("http://konexio.codiscovery.co/bakery/api/?q=croissant")
            .then(result => result.json())
            .then(result => this.setState({ source: result.source }));
    }

    render() {
        return (
            <button className="btn btn-light">
                <img src={this.state.source} alt="product" />
            </button>

        );
    }
}

export default Card;