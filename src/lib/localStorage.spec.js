import localStorageMock from 'jest-localstorage-mock';
import { isStore, getConferencesStore, setConferencesStore } from './localStorage.lib';

describe('localStorage.lib', () => {
  it('should say local storage is empty', () => {
    expect(isStore()).toBeFalsy();
  });

  // it('should set store in localStorage', () => {
  //   const data = { foo: 'bar', hey: 'ho' };
  //   expect(setConferencesStore(data)).toEqual({ foo: 'bar', hey: 'ho' });
  // });

  // it('should get store in localStorage', () => {
  //   const data = { foo: 'bar', hey: 'ho' };
  //   expect(getConferencesStore()).toEqual({ foo: 'bar', hey: 'ho' });
  // });
});
