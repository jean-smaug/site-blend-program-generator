/**
 * Return if storage with name exist
 * @param name
 * @returns {boolean}
 */
export function isStore(name) {
  if (localStorage.getItem(name) != null) {
    return true;
  }
  return false;
}

/**
 * Remove a key in localstorage
 * @param name
 */
export function remove(name) {
  window.localStorage.removeItem(name);
}

/**
 * Set conferences of user in localstorage
 * @param data
 * @return void
 */
export function setConferencesStore(data) {
  const conferences = JSON.stringify(data);
  window.localStorage.setItem('conferences', conferences);
}

/**
 * Set key of user in localstorage
 * @param key
 * @return void
 */
export function setKeyStore(key) {
  window.localStorage.setItem('key', key);
}

/**
 * Set if popup which give the user's key is alreader show one time
 * @return void
 */
export function setOneShow() {
  window.localStorage.setItem('isAlreadyShow', true);
}


/**
 * Get conferences of user in localstorage
 * @return array
 */
export function getConferencesStore() {
  let conferences = {};
  if (isStore('conferences')) {
    conferences = JSON.parse(window.localStorage.getItem('conferences'));
  }
  return conferences;
}

/**
 * Get key of user in localstorage
 * @return array
 */
export function getKeyStore() {
  if (isStore('key')) {
    return window.localStorage.getItem('key');
  }
  return null;
}
