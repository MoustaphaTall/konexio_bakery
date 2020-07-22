import React, { Component } from 'react';

class List extends Component {    
    render() {
        const arrItems = this.props.items;
        let item = null;
        
        if (arrItems.length > 0) {        
            item = arrItems.map( (item) => {
                const input = Object.keys(item)
                const price = Object.values(item)            
                return ( 
                    <li className="list-group-item d-flex justify-content-between">
                        <span>{input}</span>
                        <span className="badge badge-pill badge-primary">
                            {price} €
                        </span>
                    </li>
                )
            });
        } else {
            item = <h2>No items available</h2>;
        }  

        return (
            <div>
                <ul className="list-group">
                    {item}
                </ul>
            </div>            
        );
    }
}

export default List;