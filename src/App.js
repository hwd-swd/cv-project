import React from 'react'
import GeneralInfo from './Components/GeneralInfo'
import DetailedInfo from './Components/DetailedInfo'

function App() {
  return (
    <div className="main">
      <h1>CV-Maker</h1>
      <div className="cv">
        <h2>General Information</h2>
        <GeneralInfo/>
        <h2>Work Info</h2>
        <DetailedInfo names={['first','second','third','fourth']}/>

      </div>
    </div>
    
  );
}

export default App;
