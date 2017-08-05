/**
 * Return if storage with conferences exist
 * @return Boolean
 */
export function isStore() {
  if (localStorage.getItem('conferences') != null) {
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
 * Get conferences of user in localstorage
 * @return array
 */
export function getConferencesStore() {
  let conferences = [];
  if (isStore()) {
    conferences = JSON.parse(window.localStorage.getItem('conferences'));
  }
  return conferences;
}
