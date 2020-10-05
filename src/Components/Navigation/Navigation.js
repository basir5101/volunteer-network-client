import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src="https://i.imgur.com/pNiQOv1.png?1" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/donation">Donation</Link>
                    <Link className="nav-item nav-link" to="/events">Events</Link>
                    <Link className="nav-item nav-link" to="/blog">Blog</Link>
                    <Link to = '/login'>
                        <button className="btn btn-primary mr-2">Register</button>
                    </Link>
                    <Link to = '/admin'>
                        <button className="btn btn-secondary">Admin</button>
                    </Link>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    );
};

export default Navigation;