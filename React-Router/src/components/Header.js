import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/welcome'>Welcome Page</Link>
                </li>
                <li>
                    <Link to='/products'>Products Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
