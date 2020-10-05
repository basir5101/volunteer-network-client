import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(result  =>{
            const newUser = {...loggedInUser};
            newUser.name = result.user.displayName;
            newUser.email = result.user.email;
            setLoggedInUser(newUser);
            history.replace(from);
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

  

    return (
        <div>
            <div className = 'jumbotron text-center'>

                <div className = 'jumbotron bg-white'>
                    <h4 className = 'm-4'>Login With</h4>
                    <button onClick = {handleSignIn} className="btn border bg-white shadow"><i className="fa text-success fa-google fa-fw">
                        </i> Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;