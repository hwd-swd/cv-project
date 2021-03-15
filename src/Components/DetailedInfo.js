import React from 'react'
import DetailedInput from './Items/DetailedInput'

function DetailedInfo(props) {
    const getComponent = () => {
        if(true){
            return(
                <DetailedInput/>
            )
        }else{
            return(
                <p>asd</p>
            )
        }
    }

    return (
        <div>
            {getComponent()}
        </div>
    )
}

export default DetailedInfo
