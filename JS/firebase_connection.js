const firebaseConfig = {
    apiKey: "AIzaSyBniAU1MbP8LGJVSl3_kEui9X1I0BU0tDg",
    authDomain: "chat-room-dc8f5.firebaseapp.com",
    projectId: "chat-room-dc8f5",
    storageBucket: "chat-room-dc8f5.appspot.com",
    messagingSenderId: "475779298580",
    appId: "1:475779298580:web:5152d03bb481994dea3e01",
    measurementId: "G-TN16GYXQZV"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();