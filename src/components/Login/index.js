import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../config/firebase'
import { actionTypes } from '../../config/reducer'
import { useStateValue } from '../../config/StateProvider'
import './Login.css'

function Login() {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Whatsapp Logo"/>
                <div className="login__text">
                    <h1>
                        Sign in to Whatsapp Clone
                    </h1>
                </div> 

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
