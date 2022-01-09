import { useState } from "react";
import IS_BROWSER from "./is_browser";

/**
 * useStorage
 *
 * Sync state to local or session storage so that it persists through a page
 * refresh.  Usage is similar to useState except a local storage key is
 * provided to use when storing/reading the value.
 *
 * Technically any object that implements getItem(key) and setItem(key, value)
 * can be passed as the first argument, but this method only uses the caching
 * object if it is run inside a browser window regardless.
 *
 * @param   {Object}  storage       The caching object
 * @param   {String}  key           Key to store the value in
 * @param   {*}       initialValue  Initial value of the state
 *
 * @return  {Array}
 *
 * Inspired by:
 * @see https://usehooks.com/useLocalStorage/
 */
const useStorage = (storage, key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      let value;
      if (IS_BROWSER) value = storage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (IS_BROWSER) storage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useStorage;
