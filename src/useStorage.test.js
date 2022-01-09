/**
 * @jest-environment jsdom
 */
import { renderHook, act } from "@testing-library/react-hooks";
import useStorage from "./useStorage";

const storageKey = "test_key";
const testValue = { a: "test", b: "foo" };
const mockConsoleLog = jest.fn();

const getError = new Error("getItem isn't working properly");
const setError = new Error("setIgem isn't working properly");

class Storage {
  static getItem(key) {
    throw getError;
  }

  static setItem(key, value) {
    throw setError;
  }
}

beforeEach(() => {
  sessionStorage.clear();
  console.log = jest.fn();
});

afterEach(() => {
  mockConsoleLog.mockClear();
});

it("handles errors on reading the value", () => {
  const { result } = renderHook(() => useStorage(Storage, storageKey, testValue));
  const [storedValue, _setValue] = result.current;

  const subject = storedValue;

  expect(subject).toEqual(testValue);
  expect(console.log).toHaveBeenCalledWith(getError);
});

it("handles errors on setting the value", () => {
  const { result } = renderHook(() => useStorage(Storage, storageKey));
  const [_storedValue, setValue] = result.current;

  act(() => setValue(testValue));

  expect(console.log).toHaveBeenCalledWith(setError);
});
