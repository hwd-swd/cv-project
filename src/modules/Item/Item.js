import React from 'react'
import './Input.css'

export class Item extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        title: ''
      };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(event.target.value)
    this.setState({
      title: event.target.value
    })
  }

  render(){
    return (
      <div className="item">
          <label htmlFor="inputName">{this.props.title}</label>
          <input id={this.props.name} name="inputName" 
          className="inputArea" 
          
          onChange = {this.handleChange}

          placeholder={this.props.placeholder} 
          type={this.props.inputType} pattern={this.props.pattern} 
          value={this.props.value} required></input>
      </div>
    )
  }
}