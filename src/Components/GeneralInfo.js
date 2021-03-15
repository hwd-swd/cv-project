import React from 'react'
import Item from './Items/Item'
import '../App.css'

function GeneralInfo() {        
    const indexes = [0,1,2,3];
    const placeholders = ['First Name','Last Name','example@email.com','123-456-7890'];
    const names = ['First Name','Last Name','Email','Phone Number'];

    const renderContent = () =>{
        return indexes.map(ele=>{
            return <Item placeholder={placeholders[ele]} name={names[ele]}/>
        })
    }

    return (
        <div class="general">
            {renderContent()}
        </div>
    );
}

export default GeneralInfo;
