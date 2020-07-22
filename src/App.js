import React, { Component } from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-slider/assets/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: "add",
      items: [],         
    }

    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(price, input) {

  }

  onClickTabAdd() {        
    this.setState({
      activeTab: "add",      
    });       
  }

  onClickTabList() {
    this.setState({
      activeTab: "list",
    });        
  }

  onClickTabPay() {
    this.setState({
      activeTab: "pay",      
    });    
  }

  render() {
    const activeTab = this.state.activeTab;    
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Button isSelected={activeTab === "add"} onClick={this.onClickTabAdd}>Add</Button>
            <Button isSelected={activeTab === "list"} onClick={this.onClickTabList}>List</Button>
            <Button isSelected={activeTab === "pay"} onClick={this.onClickTabPay}>Pay</Button>            
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            {activeTab === "add" ? <Add onAdd={this.onAdd()} /> : null}
            {activeTab === "list" ? <List /> : null}
            {activeTab === "pay" ? <Pay /> : null}
          </div>
        </div>        
      </div>
    );
  }
}

export default App;