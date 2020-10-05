import React from 'react';

const SearchBar = () => {
    return (
        <div className = 'text-center m-4 p-4'>
        <h3>I GROW BY HELPING PEOPLE IN NEED</h3>
            <div className = 'd-flex justify-content-center'>
                <input type="text" placeholder = 'search...' className ="form-control w-50" />
                <button className = 'btn btn-primary'>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;