import React,{useState} from 'react'
import DetailedInput from './Items/DetailedInput'

function DetailedInfo(props) {
    const [visible,setVisible] = useState(true);
    const [fields,setFields] = useState({
        [props.names[0]]:'',
        [props.names[1]]:'',
        [props.names[2]]:'',
        [props.names[3]]:''
    });
    const handleSubmit = (field) => {
        setFields(field);
        setVisible(!visible)
    };

    const toggleVisible = () => {
        setVisible(!visible)
    }

    const getComponent = () => {
        if(visible){
            return(
                <DetailedInput handleSubmit={fields => handleSubmit(fields)} names={props.names} fields={fields}/>
            )
        }else{
            return(
                <div>
                    <p><strong>{props.names[0]}</strong> {fields[props.names[0]]}</p>
                    <p><strong>{props.names[1]}</strong> {fields[props.names[1]]}</p>
                    <p><strong>{props.names[2]}</strong> {fields[props.names[2]]}</p>
                    <p><strong>{props.names[3]}</strong> {fields[props.names[3]]}</p>
                    <button onClick={toggleVisible}>edit</button>
                </div>
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
