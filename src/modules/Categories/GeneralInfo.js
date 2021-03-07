import React from 'react'
import {Item} from '../Item/Item'
import '../Item/Input.css'

export class GeneralInfo extends React.Component{
  constructor(){
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      edit: false
    }
    this.submitInfo = this.submitInfo.bind(this);
    this.getComponent = this.getComponent.bind(this);
    this.edit = this.edit.bind(this);
  }

  submitInfo(event){
    event.preventDefault();
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');

    this.setState({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value
    });
  };

  getComponent(){
    if(this.state.firstName===''){
      return(
      <form className="input" id={this.props.id} onSubmit={this.submitInfo}>
        <Item name="firstName" title="First Name:" inputType="text" placeholder="First Name"/>
        <Item name="lastName" title="Last Name:" inputType="text" placeholder="Last Name"/>
        <Item name="email" title="Email:" inputType="email" placeholder="example@email.com"/>
        <Item name="phoneNumber" title="Phone Numer:" inputType="tel" pattern="[0-9]{10}" placeholder="123-456-7890"/>
        <div><button>Save</button></div>
        
    </form>
    )
    }else if(this.state.edit){
      return(
      <form className="input" id={this.props.id} onSubmit={this.submitInfo}>
        <Item name="firstName" title="First Name:" inputType="text" placeholder="First Name" value={this.state.firstName}/>
        <Item name="lastName" title="Last Name:" inputType="text" placeholder="Last Name" value={this.state.lastName}/>
        <Item name="email" title="Email:" inputType="email" placeholder="example@email.com" value={this.state.email}/>
        <Item name="phoneNumber" title="Phone Numer:" inputType="tel" pattern="[0-9]{10}" placeholder="123-456-7890" value={this.state.phoneNumber}/>
        <div><button>Save</button></div>
      </form>
      )
      
    }else{
      return(
        <div>
          <p><strong>First Name:</strong> {this.state.firstName}</p>
          <p><strong>Last Name:</strong> {this.state.lastName}</p>
          <p><strong>Email:</strong> {this.state.email}</p>
          <p><strong>Phone Number:</strong> {this.state.phoneNumber}</p>
          <p className="edit" id="generalEdit" onClick={this.edit}>Edit</p>
        </div>
      )
    }
  }

  edit(){
    this.setState({
      edit: true
    })
  }

  render(){
    return (
        <div className="generalInfo">
            <h1 className="title">General Info</h1>
            <div id="generalInfo">
              {this.getComponent()}
            </div>
        </div>
    )
  }
}