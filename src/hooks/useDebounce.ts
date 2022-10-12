import { useRef, useEffect, useCallback } from "react";

const useDebounce = () => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = useCallback((callback: () => void, timeout: number) => {
    debounceRef.current = setTimeout(() => {
      callback();
      debounceRef.current = null;
    }, timeout);
  }, []);

  useEffect(() => {
    const clearDebounce = () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };

    return () => clearDebounce();
  }, []);

  return debounce;
};

export { useDebounce }
