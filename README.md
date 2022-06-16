# react-use-storage

React Hooks to store state in localStorage or sessionStorage.

If this code runs outside a browser, it will replace the functionality with react's default `useState` behavior.

## Installation

```sh
yarn add https://github.com/ddankel/react-use-storage\#main

# or

npm install https://github.com/ddankel/react-use-storage\#main
```

## Usage

The hooks (`useLocalStorage` and `useSessionStorage`) can be imported from this library for use. Usage is similar to React's `useState`, with an additional parameter to be provided to define the storage key to store the value in.

```js
import { useLocalStorage, useSessionStorage } from "react-use-storage";

const useCustomHook = () => {
  const [localValue, setLocalValue] = useLocalStorage("local-storage-key", "default-value");
  // Stores the value at localStorage["local-storage-key"]

  const [sessionValue, setSessionValue] = useSessionStorage("session-storage-key", "other-default");
  // Stores the value at sessionStorage["session-storage-key"]

  ...
};
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Project Link: [https://github.com/ddankel](https://github.com/ddankel)

## Acknowledgments

This package was inspired by the [usehook.com's useLocalStorage implementation](https://usehooks.com/useLocalStorage/)
