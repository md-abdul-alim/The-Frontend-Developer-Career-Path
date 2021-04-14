import React from "react"
import UserHeader from './components/2_UserHeader';
import UserContext from './components/context/2_userContext';
class UserApp extends React.Component {
    static contextType = UserContext
    render(){
        const username = this.context
        return (
            <div>
                <UserHeader/>
                <main>
                    <p className="main">No new notifications, {username}! 🎉</p>
                </main>
            </div>
        )
    }
}

export default UserApp