import React from 'react'
import '../../App.css'

function DetailedInput() {
    return (
        <form>
            <div>
                <div className="col">
                    <label>lol</label>
                    <input></input>
                </div>

                <div className="col">
                    <label>lol2</label>
                    <input></input>
                </div>

                <div className="col">
                    <label>lol3</label>
                    <input></input>
                </div>
                
                <div className="col">
                    <label>lol4</label>
                    <input></input>
                </div>
            </div>

            <div>
                <button>Add</button>
                <button>Delete</button>
            </div>
            
        </form>
    )
}

export default DetailedInput
