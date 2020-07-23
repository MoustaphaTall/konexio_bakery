import React, { Component } from 'react';

class List extends Component {  
    renderList() {
        const arrItems = this.props.items;

        if (arrItems.length === 0) {
            return <h2>No items available</h2>;
        }

        return arrItems.map( (item, index) => {
            const input = item.name;
            const price = item.price;

            return (
                <li key={index} className="list-group-item d-flex justify-content-between">
                    <span>{input}</span>
                    <span className="badge badge-pill badge-primary">{price} €</span>
                </li>
            );            
        });
    }  

    render() {        
        return (
            <div>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>            
        );
    }
}

export default List;