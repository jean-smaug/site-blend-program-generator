import _ from 'lodash';
import { db } from '../firebase';

const dbRef = (suffix = '') => db.ref(`2017${suffix}`);

export const writeStore = (state) => {
  db.ref('/users').push(state);
};

export const readStore = async id => (await db.ref('/users').get(id)).val();

export const getConferences = async () => (await dbRef('/conferences').once('value')).val();

export const getTags = async conferences =>
  // const conferences = await getConferences();
  _.uniq(_.flatten(_.map(conferences, item => item.tags)));
