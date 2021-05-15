import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase'

import { seedDatabase } from './seed';

const firebaseConfig = {
    apiKey: "AIzaSyAJoSGwr48Rw50JqIef3EWf_Attwp_3DtE",
    authDomain: "netflix-practic-project.firebaseapp.com",
    databaseURL: "https://netflix-practic-project.firebaseio.com",
    projectId: "netflix-practic-project",
    storageBucket: "netflix-practic-project.appspot.com",
    messagingSenderId: "709362508871",
    appId: "1:709362508871:web:970fea8f4cdf1da72dbd62",
    measurementId: "G-WXLPYZ7R0T"
  };

const firebase = window.firebase.initializeApp(firebaseConfig)
// firebase.initializeApp(firebaseConfig)
ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);

