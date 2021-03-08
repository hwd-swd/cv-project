import React,{useState} from 'react'
import Input from './Input'

function GeneralInfo(props) {
    const [info,setInfo] = useState({text:props.name});
    const [edit,setEdit] = useState(false);

    const addInfo = (newInfo) => {
        console.log(newInfo)
        setEdit(false)
        setInfo(newInfo)
        setEdit(false)
    }

    const editInfo = () => {
        setEdit(true)
    }

    const getComponent = () => {
        if(edit){
            return <Input onSubmit={addInfo} value={info.text} name="firstName" placeholder={props.placeholder}/>
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
