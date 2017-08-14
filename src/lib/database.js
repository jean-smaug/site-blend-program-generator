import _ from 'lodash';
import { db } from '../firebase';

const dbRef = (suffix = '') => db.ref(`2017${suffix}`);

export const writeStore = (state) => {
  db.ref('/users').push(state);
};

export const readStore = async id => (await db.ref('/users').get(id)).val();

export const getConferences = async () => {
  const conferences = (await dbRef('/conferences').once('value')).val();
  return _.map(conferences, (conference, key) => ({ ...conference, id: key }));
};
