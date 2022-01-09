import useStorage from "./useStorage";
import IS_BROWSER from "./is_browser";
import { useState } from "react";

/**
 * SessionStorage-backed useState-like hook
 *
 * Sync state to session storage so that it persists through a page refresh.
 * Usage is similar to useState except a local storage key is provided to use
 * when storing/reading the value.
 *
 * @param   {String}  key           Key to store the value in
 * @param   {*}       initialValue  Initial value of the state
 *
 * @return  {Array}
 */
const useSessionStorage = (key, initialValue) =>
  IS_BROWSER ? useStorage(window.sessionStorage, key, initialValue) : useState(initialValue);

export default useSessionStorage;
