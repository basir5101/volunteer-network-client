import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const Events = () => {

    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [events, setEvents] = useState([])


    useEffect(() =>{
        fetch('https://damp-reef-57379.herokuapp.com/volunteer?email=' + loggedInUser.email )
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    const handleDelete = (id) =>{
        console.log(id)
        fetch('https://damp-reef-57379.herokuapp.com/deleteEvents?id=' + id , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(events)
        })
        .then(res => res.json())
        .then(data =>{
            alert('success')
        })
    }
    return (
        <div className = 'row jumbotron'>
            {
                events.map(evt =>{
                    return <div key = {evt._id} className = 'col-sm-6'>
                        <div className = 'row bg-white p-4 m-4'>
                            <div className = 'col-sm-6'>
                                <img src= {evt.photoUrl} className="w-75" alt = "" />
                            </div>
                            <div className = 'col-sm-6'>
                                <h5 className = ''> {evt.volunteer} </h5>
                                <h5> {evt.date} </h5>
                                <div className = 'd-flex justify-content-end'>
                                    <button onClick = {() =>handleDelete(evt._id)} className="btn btn-secondary">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Events;