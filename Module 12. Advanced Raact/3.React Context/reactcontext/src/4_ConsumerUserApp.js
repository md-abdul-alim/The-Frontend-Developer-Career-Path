import React from "react"
import ConsumerUserHeader from './components/4_ConsumerUserHeader';
import ConsumerUserContext from './components/context/4_ConsumerUserContext';

function ConsumerUserApp() {
    return (
        <div>
            <ConsumerUserHeader/>
            <main>
                <ConsumerUserContext.Consumer>
                    {username=>(
                        <p className="main">No new notifications, {username}! 🎉</p>
                    )}
                </ConsumerUserContext.Consumer>
            </main>
        </div>
    )
    
}

export default ConsumerUserApp