import React from 'react'
import {GeneralInfo} from './modules/Categories/GeneralInfo'
import {Header} from './modules/Categories/Header'
import './App.css'

export class App extends React.Component{
  render(){
    return (
      <div className="app">
        <Header/>
        <div className="cv">
          <GeneralInfo/>
        </div>
        
      </div>
    )
  }
}
