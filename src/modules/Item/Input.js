import React from 'react'
import {Item} from './Item'
import './Input.css'

export class Input extends React.Component{
  render(){
    return (
      <div>
        <form class="input" id={this.props.id}>
        <Item name="First Name:" inputType="text" placeholder="First Name"/>
        <Item name="Last Name:" inputType="text" placeholder="Last Name"/>
        <Item name="Email:" inputType="email" placeholder="example@email.com"/>
        <Item name="Phone Numer:" inputType="tel" placeholder="123-456-7890"/>
        <div class="row">
          <button type="submit" >Save</button>
          <button type="button" onClick={this.props.cancel}>Cancel</button>
        </div>
      </form>
        
        
      </div>
      
    )
  }
}