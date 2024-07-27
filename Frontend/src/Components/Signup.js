import { useState } from "react";
import Headers from "./Headers";
import axios from 'axios';

function SignUp() {
    const [userInput, setUser] = useState("");
    const [passInput, setPass] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    
    function store(e) {
        e.preventDefault();
        
        if (fname.length === 0 || lname.length === 0 || userInput.length === 0 || passInput.length === 0) {
            alert("Please fill in all fields");
        } else {
            const formData = new FormData();
            formData.append('fname', fname);
            formData.append('lname', lname);
            formData.append('userInput', userInput);
            formData.append('passInput', passInput);

            axios.post("http://localhost/Food%20Delivery/sign.php", formData)
                .then(response => {
                    console.log(response.data); // Assuming the response contains a message indicating success
                    alert("Registration successful");
                })
                .catch(error => {
                    console.error('There was an error registering:', error);
                    alert("Registration failed. Please try again.");
                });
        }
    }

    return (
        <>
            <Headers />
            <h1>Register</h1>
            <div className="Register-container">
                <h1 className="heading-text">Register</h1>
                <form onSubmit={store}>
                    <input type="text" name="fname" placeholder="First Name" className="input-text" onChange={(e) => setFname(e.target.value)}></input><br /><br />
                    <input type="text" name="lname" placeholder="Last Name" className="input-text" onChange={(e) => setLname(e.target.value)}></input><br /><br />
                    <input type="text" name="userInput" placeholder="Email or Username" className="input-text" onChange={(e) => setUser(e.target.value)}></input><br /><br />
                    <input type="text" name="passInput" placeholder="Enter your password" className="input-text" onChange={(e) => setPass(e.target.value)}></input><br></br>
                    <button type="submit" className="login-btn">Register</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
