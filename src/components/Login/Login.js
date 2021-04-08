import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firbase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig)
        }
        
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
         
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            console.log(idToken);
          }).catch(function(error) {
          });
    }


    return (
        <div className="text-center">
            <h1>This is Login</h1>
            <button className="btn-primary" onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;