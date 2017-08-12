import { db } from '../firebase';

const dbRef = (suffix = '') => db.ref(`2017${suffix}`);

export const writeStore = (state) => {
  db.ref('/analytics').push(state);
};

export const readStore = async id => (await db.ref('/analytics').get(id)).val();

export const getConferences = async () => (await dbRef('/conferences').once('value')).val();
