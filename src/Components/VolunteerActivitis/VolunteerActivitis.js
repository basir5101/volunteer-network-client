import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const VolunteerActivitis = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [events, setEvents] = useState([])
    useEffect(() =>{
        fetch('https://damp-reef-57379.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    const handleClick = (volunteerName, picture) =>{
        const newUser = {...loggedInUser}
        newUser.volunteer = volunteerName;
        newUser.volunteerPhoto = picture;
        setLoggedInUser(newUser)
    }
    
    // const textStyle = {
    //     backgroundColor: randomColorCode,
    // }
    const color = () =>{
        var randomColor = Math.floor(Math.random()*10);
        var randomColorCode = '#13' + randomColor;
       return randomColorCode;
    }
    return (
        <div>
            <div className="row justify-content-around">
                {
                    events.map(evt =>{
                     return   <Link key = {evt._id} onClick = {() => handleClick(evt.eventName, evt.photoUrl)} to = {`/registration/${evt._id}`} className="col-sm-3 nav-link">
                                <div>
                                    <div>
                                        <img src={evt.photoUrl} className = 'w-100' alt=""/>
                                    </div>
                                    <div>
                                            <h3 style = {{backgroundColor: color() }} className = 'p-2 text-white'> {evt.eventName} </h3>
                                    </div>
                                </div>
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default VolunteerActivitis;