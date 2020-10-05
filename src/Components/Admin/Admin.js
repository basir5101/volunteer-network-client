import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [events, setEvents] = useState({})
    const [volunteerList, setVolunteerList] = useState([])
    const handleChange = (e) =>{
        const newEvent = {...events}
        newEvent[e.target.name] = e.target.value
        setEvents(newEvent);
    }
    const handleSubmit = (e) => {
        console.log(events)
        fetch('https://damp-reef-57379.herokuapp.com/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(events)
        })
        .then(res =>res.json())
        .then(data => console.log(data))
        e.preventDefault();
    }

    useEffect(() =>{
        fetch('https://damp-reef-57379.herokuapp.com/volunteerList')
        .then(res => res.json())
        .then(data => setVolunteerList(data))
    }, [])



    const handleDelete = (e,id) =>{
        console.log(e.target)
        fetch('https://damp-reef-57379.herokuapp.com/deleteEvents?id=' + id , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(events)
        })
        .then(res => res.json())
        .then(data =>{
            alert('delete done')
        })
    }
    return (
        <div>
            <div>
                <h3 className = 'text-center text-success'>Events Creation Form</h3>
                <div>
                    <form onSubmit = {handleSubmit}>
                        <input onChange = {handleChange} name = 'eventName' type="text" placeholder ="event name" className="form-control"/>
                        <input  onChange = {handleChange}  name = 'photoUrl' type="text" placeholder ="image url" className="form-control"/>
                        <input type="submit" value = "submit" className="form-control btn btn-success"/>
                    </form>
                </div>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Volunteer list</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteerList.map(volunteer =>{
                                return <tr key = {volunteer._id}>
                                            <td> {volunteer.name} </td>
                                            <td> {volunteer.email} </td>
                                            <td> {volunteer.date} </td>
                                            <td> {volunteer.volunteer} </td>
                                            <td> <button onClick = {() => handleDelete ('event', volunteer._id)} className="btn btn-danger">Remove</button> </td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;