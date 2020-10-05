import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';

const Registration = () => {
    const history = useHistory()
   // const {volunteerId} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [volunteer, setVolunteer] = useState({})
    const handleChange = (e) =>{
        const newVolunteer = {...volunteer}
        newVolunteer[e.target.name] = e.target.value;
        newVolunteer.name = loggedInUser.name;
        newVolunteer.email = loggedInUser.email;
        newVolunteer.volunteer = loggedInUser.volunteer;
        newVolunteer.photoUrl = loggedInUser.volunteerPhoto;
        setVolunteer(newVolunteer);
    }
    const handleSubmit = (e) => {
        console.log(volunteer)
        fetch('https://damp-reef-57379.herokuapp.com/volunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteer)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            history.push('/events') 
        })
        e.preventDefault();
    }
    return (
        <div className = 'jumbotron'>
            <h3>Register as a Volunteer</h3>
            <form>
                <input onChange = {handleChange} className = "form-control" name = 'name' type="text" value = {loggedInUser.name} />
                <input onChange = {handleChange} className = "form-control" name = 'email' type="text" value = {loggedInUser.email} />
                <input onChange = {handleChange} className = "form-control" type="date" name="date" />
                <input onChange = {handleChange} className = "form-control" name = 'description' type="text" placeholder = 'Description'/>
                <input onChange = {handleChange} className = "form-control" name = "volunteer" type="text" value = {loggedInUser.volunteer}/>
                <input onClick = {handleSubmit} className = "form-control" type = "submit" value = "Registration" />
            </form>
        </div>
    );
};

export default Registration;