import React from 'react';
import ConsumerUserContext from './context/4_ConsumerUserContext';

function ConsumerUserHeader(){

    return(
        <ConsumerUserContext>
            {username=>(
                <header>
                    <p>Welcome, {username}</p>
                </header>
            )}
        </ConsumerUserContext>
    )
}

export default ConsumerUserHeader

// ConsumerUserHeader.contextType = ConsumerUserContext