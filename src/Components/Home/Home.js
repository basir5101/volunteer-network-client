import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VolunteerActivitis from '../VolunteerActivitis/VolunteerActivitis';

const Home = () => {
    return (
        <div className = 'bg-light'>
            <SearchBar></SearchBar>
           <VolunteerActivitis></VolunteerActivitis>
        </div>
    );
};

export default Home;