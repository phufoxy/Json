import * as firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/database';
// import config from 'src/constants/configAPI';

// const {
//   FIREBASE_API_KEY,
//   FIREBASE_SENDER_ID
// } = config;

const configFirebase = {
  apiKey: 'AIzaSyBFWmEi2raK-sJ3v9ZCQOpBDB1smOgDW98',
  messagingSenderId: '429364986528'
};

var firebaseConfig = {
  apiKey: "AIzaSyBFWmEi2raK-sJ3v9ZCQOpBDB1smOgDW98",
  authDomain: "gshtdt-5114e.firebaseapp.com",
  databaseURL: "https://gshtdt-5114e.firebaseio.com",
  projectId: "gshtdt-5114e",
  storageBucket: "gshtdt-5114e.appspot.com",
  messagingSenderId: "429364986528",
  appId: "1:429364986528:web:44f8155dab2ae99c153fc5",
  measurementId: "G-7L360QNSGW"
};

class Firebase {
  constructor(registration) {
    firebase.initializeApp(firebaseConfig);
    this.messaging = firebase.messaging();
    this.messaging.useServiceWorker(registration);
  }

  requestToken = (callback) => {
    this.messaging.requestPermission().then(() => this.messaging.getToken()).then((currentToken) => {
      if (callback) callback(currentToken);
    }).catch((err) => {

    });
  }

  onMessage = (callback) => {
    this.messaging.onMessage((res) => {
      if (callback) {
        callback(res);
      }
    });
  }
}

export default Firebase;
