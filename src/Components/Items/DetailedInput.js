import React,{useState} from 'react';
import '../../App.css'

function DetailedInput(props) {

    const [fields,setFields]=useState({
        [props.names[0]]:'',
        [props.names[1]]:'',
        [props.names[2]]:'',
        [props.names[3]]:'',
    });

    const handleChange = (e) => {
        setFields({...fields,...{[e.target.name]: e.target.value}});
        // console.log(fields)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(fields);
    };

    return (
        <form>
            <div>
                <div className="col">
                    <label>{props.names[0]}</label>
                    <input onChange={e=> handleChange(e)} name={props.names[0]}></input>
                </div>

                <div className="col">
                    <label>{props.names[1]}</label>
                    <input onChange={e=> handleChange(e)} name={props.names[1]}></input>
                </div>

                <div className="col">
                    <label>{props.names[2]}</label>
                    <input onChange={e=> handleChange(e)} name={props.names[2]}></input>
                </div>
                
                <div className="col">
                    <label>{props.names[3]}</label>
                    <input onChange={e=> handleChange(e)} name={props.names[3]}></input>
                </div>
            </div>

            <div>
                <button onClick={e => onSubmit(e)}>Add</button>
                <button>Delete</button>
            </div>
            
        </form>
    )
}

export default DetailedInput
