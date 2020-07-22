import React, { Component } from 'react';

class List extends Component {
    render() {
        const arrItems = this.props.items;
        let item = arrItems.map( (item) => {
            const input = Object.keys(item)
            const price = Object.values(item)            
            return <li>{input} {price}€</li>        
        }
        );

        return (
            <div>
                <ul>
                    {item}
                </ul>
            </div>            
        );
    }
}

export default List;