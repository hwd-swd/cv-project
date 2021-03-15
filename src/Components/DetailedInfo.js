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
    const handleSubmit = (fields) => {
        console.log(fields);
        setVisible(!visible)
    };

    const getComponent = () => {
        if(visible){
            return(
                <DetailedInput handleSubmit={fields => handleSubmit(fields)} names={props.names} fields={fields}/>
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
