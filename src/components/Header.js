import React from 'react'
import './Header.css'
import Button from '@material-ui/core/Button'
import { auth } from '../Firebase'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

const Header = () => {
    const [{user},dispatch] = useStateValue()
    const Logout = () => {
        auth.signOut()
    }

    return (
        <div className='header'>
            <img className="header__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                alt="instagram logo"
/>


            <div className="header__logout">
            <Link to={!user && "/login"}>
                {!user ? 
                <Button>Log-in</Button>
                : 
                <Button onClick={Logout}>Logout</Button>
            }
            </Link>
            </div>
            
        </div>
    )
}

export default Header
