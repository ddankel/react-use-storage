/**
 * @jest-environment jsdom
 */
import { renderHook, act } from "@testing-library/react-hooks";
import useSessionStorage from "./useSessionStorage";

const storageKey = "test_key";
const testValue = { a: "test", b: "foo" };

beforeEach(() => {
  sessionStorage.clear();
});

it("reads existing value from sessionStorage", () => {
  sessionStorage.setItem(storageKey, JSON.stringify(testValue));
  const { result } = renderHook(() => useSessionStorage(storageKey));
  const [storedValue, _setValue] = result.current;
  expect(storedValue).toEqual(testValue);
});

it("initializes with a provided value", () => {
  const { result } = renderHook(() => useSessionStorage(storageKey, testValue));
  const [storedValue, _setValue] = result.current;
  expect(storedValue).toEqual(testValue);
});

it("sets the value correctly", () => {
  const { result } = renderHook(() => useSessionStorage(storageKey));
  const [_storedValue, setValue] = result.current;

  act(() => setValue(testValue));
  expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, JSON.stringify(testValue));
  expect(result.current[0]).toEqual(testValue);
});
