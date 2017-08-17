import _ from 'lodash';
import randomString from 'randomstring';
import { db } from '../firebase';

const dbRef = (suffix = '') => db.ref(`2017${suffix}`);

/**
 * Store the state in firebase and return the userKey
 * @param {*} state
 */
export const writeStore = async (state) => {
  const userKey = randomString.generate({
    length: 4,
    capitalization: 'uppercase',
  });

  try {
    await dbRef('/users').child(userKey).set(state);
  } catch (error) {
    writeStore(state);
  }

  return userKey;
};

export const readStore = async id => (await db.ref('/users').get(id)).val();

export const getConferences = async () => {
  const conferences = (await dbRef('/conferences').once('value')).val();
  return _.map(conferences, (conference, key) => ({ ...conference, id: key }));
};
