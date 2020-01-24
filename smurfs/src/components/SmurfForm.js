//INPUT FORM HERE!
import React, { useState }from "react";
import axios from "axios"

const SmurfForm = props => {
    const[newSmurf, setnewSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: 0,})

    const handleChange = e => {
        setnewSmurf(
            {
            ...newSmurf,
            [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = e => {
        e.preventDefault();
        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log('success', res)
            setnewSmurf(res.data)

        })
        .catch(err => console.error(err))
    }

    return (
    <div className="smurf-form">
        <form  onSubmit={onSubmit}>
        <h3>
            Gimme a Smurf!
        </h3>
        <div>
            <p>Name</p>
            <input  
                type="text" 
                name="name"
                placeholder=" Smurf Name"
                value={newSmurf.name} 
                onChange={handleChange} />
            <p>Age</p>
            <input  
                type="number" 
                name="age" 
                placeholder=" Age (years)"
                value={newSmurf.age} 
                onChange={handleChange} />
            <p>Height</p>
            <input  
                type="number" 
                name="height" 
                placeholder=" Height (cm)"
                value={newSmurf.height} 
                onChange={handleChange} />
        </div>
        <button> Smurf Me </button>

        {/* <button>Edit</button>
            <button>Delete</button>
        */}

        </form>
    </div>
    );
};
    
export default SmurfForm;