import React, { useState } from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FireBaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'

export function BrowseContainer(){
    const [profile, setProfile] = useState({});

    const user = {
        displayName : "Milon",
        photoURL : '1'
    }

    return profile.displayName ? (
        <>

            <FooterContainer/>
        </>) : 
        (<SelectProfileContainer user={user} setProfile={setProfile}/>)
}