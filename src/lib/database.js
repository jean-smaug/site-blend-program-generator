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
    await dbRef('/users')
      .child(userKey)
      .set(state);
  } catch (error) {
    writeStore(state);
  }

  return userKey;
};


/**
* Write smoothie modification into firebase
*/
export const writeSmoothie = (userKey, smoothie) => {
  dbRef('/users')
    .child(userKey).child('customSmoothie')
    .set(smoothie);
};

export const readStoreByKey = async id => (await dbRef(`/users/${id}`).once('value')).val();

export const readStoreByEmail = async (email) => {
  const users = (await dbRef('/users').once('value')).val();
  return _.filter(users, user => user.blender.informations.email === email)[0];
};

export const getConferences = async () => {
  const conferences = (await dbRef('/conferences').once('value')).val();
  return _.map(conferences, (conference, key) => ({ ...conference, id: key }));
};
