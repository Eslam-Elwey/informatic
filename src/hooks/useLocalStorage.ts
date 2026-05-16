import { useEffect, useState } from "react";

function useLocalStorage<T>(initalState: T, key: string) {
  const [value, setValue] = useState<T>(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initalState;
  });

  useEffect(function () {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key,value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
