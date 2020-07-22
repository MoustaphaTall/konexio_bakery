import React, { Component } from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-slider/assets/index.css';

const add = <Add />
const list = <List />
const pay = <Pay />

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: add,
      items: [],
      areButtonsSelected: {
        first: true,
        second: false,
        third: false
      }                  
    }

    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
  }

  onAdd(price, input) {
  }

  onClickTabAdd() {        
    this.setState({
      activeTab: add,
      areButtonsSelected : {
        first: true
      } 
    });       
  }

  onClickTabList() {
    this.setState({
      activeTab: list,
      areButtonsSelected : {
        second: true
      } 
    });        
  }

  onClickTabPay() {
    this.setState({
      activeTab: pay,
      areButtonsSelected : {
        third: true
      } 
    });    
  }

  render() {    
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Button isSelected={this.state.areButtonsSelected.first} onClick={this.onClickTabAdd}>Add</Button>
            <Button isSelected={this.state.areButtonsSelected.second} onClick={this.onClickTabList}>List</Button>
            <Button isSelected={this.state.areButtonsSelected.third} onClick={this.onClickTabPay}>Pay</Button>            
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            {this.state.activeTab}
          </div>
        </div>        
      </div>
    );
  }
}

export default App;