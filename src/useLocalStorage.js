import useStorage from "./useStorage";
import IS_BROWSER from "./is_browser";
import { useState } from "react";

/**
 * LocalStorage-backed useState-like hook
 *
 * Sync state to local storage so that it persists through a page refresh.
 * Usage is similar to useState except a local storage key is provided to use
 * when storing/reading the value.
 *
 * @param   {String}  key           Key to store the value in
 * @param   {*}       initialValue  Initial value of the state
 *
 * @return  {Array}
 */
const useLocalStorage = (key, initialValue) =>
  IS_BROWSER ? useStorage(window.localStorage, key, initialValue) : useState(initialValue);

export default useLocalStorage;
