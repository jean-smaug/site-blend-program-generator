import firebase from 'firebase';

require('dotenv').config();

const config = {
  apiKey: 'AIzaSyA0Kf7uR1jIr2yZGO9478fULgjPTK1NIfE',
  authDomain: 'blender-dev.firebaseapp.com',
  databaseURL: 'https://blender-dev.firebaseio.com',
  projectId: 'blender-dev',
  storageBucket: 'blender-dev.appspot.com',
  messagingSenderId: '353658456877',
};

firebase.initializeApp(config);
