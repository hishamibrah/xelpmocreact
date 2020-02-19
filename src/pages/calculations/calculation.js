import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Input } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import WithAuth from '../withAuth';


class Calculation extends Component {
  constructor(){
  super();
  this.state={
    number:'',
    random1:null,
    random2:null,
    sum:null,
    rem:null,
    product:null,
    quotient:null,
  };
  this.handleClick = this.handleClick.bind(this);
  const number = this.state.number;
  this.handleChange = this.handleChange.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
  this.handleSub = this.handleSub.bind(this);
  this.handleMul = this.handleMul.bind(this);
  this.handleDiv = this.handleDiv.bind(this);
  }
  handleChange(e){
    this.setState({
      number:e.target.value
    })
  }
  handleAdd(){
    const num1=this.state.random1;
    const num2= this.state.random2;
    const sum = num1+num2;
    this.setState({
      sum:sum
    })
  }
  handleSub(){
    const num1=this.state.random1;
    const num2= this.state.random2;
    const rem = num1-num2;
    this.setState({
      rem:rem
    })
  }
  handleMul(){
    const num1=this.state.random1;
    const num2= this.state.random2;
    const product = num1*num2;
    this.setState({
      product:product
    })
  }
  handleDiv(){
    const num1=this.state.random1;
    const num2= this.state.random2;
    const quotient = num1/num2;
    this.setState({
      quotient:quotient
    })
  }
  handleClick(){
    const numbers = this.state.number
    const forandom = Number(numbers).toString().split("").map(Number);
    const length = forandom.length;
    const position1 = Math.floor(Math.random()*Math.floor(length));
    const position2 = Math.floor(Math.random()*Math.floor(length));
    const random1 = forandom[position1];
    const random2 = forandom[position2];
    this.setState({
      random1:random1,
      random2:random2
    })
  }
  render() {
    return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Input</Tab>
          <Tab>Sum and Substraction</Tab>
          <Tab>Multiplication and Division</Tab>
        </TabList>
        <TabPanel>
          <Input  onChange={this.handleChange}/>
          <Button variant="contained" color="primary" component="span" onClick={this.handleClick.bind(this)}>
            Submit
          </Button>
        </TabPanel>
        <TabPanel>
          <Input disabled >{this.state.random1}</Input>
          <Input disabled>{this.state.random2}</Input>
          <Button variant="contained" color="primary" component="span" onClick={this.handleAdd}>ADD</Button>
          <Input disabled>{this.state.sum}</Input>
          <Button variant="contained" color="primary" component="span" onClick={this.handleSub}>SUB</Button>
          <Input disabled>{this.state.rem}</Input>
        </TabPanel>
        <TabPanel>
          <Input disabled>{this.state.random1}</Input>
          <Input disabled>{this.state.random2}</Input>
          <Button variant="contained" color="primary" component="span" onClick={this.handleMul}>MUL</Button>
          <Input disabled>{this.state.product}</Input>
          <Button variant="contained" color="primary" component="span" onClick={this.handleDiv}>DIV</Button>
          <Input disabled>{this.state.quotient}</Input>
        </TabPanel>
      </Tabs>
    </div>
    );
  }


}
export default Calculation;
