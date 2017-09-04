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
