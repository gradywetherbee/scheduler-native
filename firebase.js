import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDV4_ucoIV2E5gk7fDW9y1lo0rC8WA3QRo",
    authDomain: "scheduler-native.firebaseapp.com",
    databaseURL: "https://scheduler-native.firebaseio.com",
    projectId: "scheduler-native",
    storageBucket: "scheduler-native.appspot.com",
    messagingSenderId: "348965785137",
    appId: "1:348965785137:web:9fb1ed95d4e00bab428f10"
};

firebase.initializeApp(firebaseConfig);

export default firebase;