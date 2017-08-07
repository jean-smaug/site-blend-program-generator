import firebase from '../firebase';

const db = firebase.database();

export const writeStore = (state) => {
  db.ref('user').push(state);
};

export const readStore = (state) => {
  db.ref('user').get(state);
};
