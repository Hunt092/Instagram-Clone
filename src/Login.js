import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import {auth, provider} from './Firebase'
import "./Login.css";

const Login = () => {
   const history = useHistory()
    const signIn =()=>{
        auth.signInWithPopup(provider)
            .then((user)=>{
                if (user) {
                    console.log(user)
                    history.push("/")
                }
            })
            .catch(console.log('fail'))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img className="login__img" src="https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png
" alt="instagrame logo"/>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
