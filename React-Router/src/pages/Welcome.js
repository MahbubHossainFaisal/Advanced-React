import React from 'react'
import { Route } from 'react-router'

const Welcome = () => {
    return (
        <div>
            <h1>The Welcome Page</h1>
            <Route path='/welcome/new-user'>
                <p>Welcome! Faisal</p>
            </Route>
        </div>
    )
}

export default Welcome
