// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyCgX787q70QkGjdzPOPYLmtsfSY0u5KoEI",
//     authDomain: "sunshine-app-cfe9a.firebaseapp.com",
//     projectId: "sunshine-app-cfe9a",
//     storageBucket: "sunshine-app-cfe9a.appspot.com",
//     messagingSenderId: "883533481198",
//     appId: "1:883533481198:web:0749176aa97f2e2bc41fff",
//     measurementId: "G-PCR0W8HTFZ"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// export default db;


import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCgX787q70QkGjdzPOPYLmtsfSY0u5KoEI",
    authDomain: "sunshine-app-cfe9a.firebaseapp.com",
    projectId: "sunshine-app-cfe9a",
    storageBucket: "sunshine-app-cfe9a.appspot.com",
    messagingSenderId: "883533481198",
    appId: "1:883533481198:web:0749176aa97f2e2bc41fff",
    measurementId: "G-PCR0W8HTFZ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;