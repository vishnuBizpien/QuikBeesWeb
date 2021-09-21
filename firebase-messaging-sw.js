importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCxOpHeZE9Aeg9FpDkuT8BMco9jfrFgMFQ",
    authDomain: "quikbees-e51d8.firebaseapp.com",
    projectId: "quikbees-e51d8",
    storageBucket: "quikbees-e51d8.appspot.com",
    messagingSenderId: "17777250803",
    appId: "1:17777250803:web:06dc10a8315f772d4e8286",
    measurementId: "G-XB01D7V6FF"
});
const messaging = firebase.messaging();