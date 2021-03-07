import React,{useState} from 'react'
import Input from './Input'

function GeneralInfo() {
    const [info,setInfo] = useState({text:'First Name'});
    const [edit,setEdit] = useState(false);

    const addInfo = (newInfo) => {
        console.log(newInfo)
        setEdit(false)
        setInfo(newInfo)
    }

    const editInfo = () => {
        setEdit(true)
    }

    const getComponent = () => {
        if(edit){
            return <Input onSubmit={addInfo} value={info.text} name="firstName" type="text" placeholder="123"/>
        }else{
            return <p onClick={editInfo}>{info.text}</p>
        }
        
    }

    return (
        <div>
            {getComponent()}
        </div>
    );
}

export default GeneralInfo;
