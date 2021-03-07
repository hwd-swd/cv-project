import React,{useState} from 'react'

function Input(props) {
    const [input,setInput] = useState(props.value);

    const handleSubmit = (e) =>{
        e.preventDefault();

        props.onSubmit({
            id: props.name,
            text:input
        });

        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    return (
        <div>
            <form className={props.name} onSubmit={handleSubmit}>
                <input type={props.type} placeholder={props.placeholder} defaultValue={props.value==='First Name' ? '' : props.value} onChange={handleChange} min="1" autoFocus></input>
                <button>submit</button>
            </form>
        </div>
    );
}

export default Input;
