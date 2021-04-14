import React from 'react';
import {FinalUserContextConsumer} from './context/7_finalUserContext';

function UserHeader(){
    return (
        <header>
            <FinalUserContextConsumer>
                {({username}) => (
                    <p>Welcome, {username}!</p>
                )}
            </FinalUserContextConsumer>
        </header>
    )
}

export default UserHeader
