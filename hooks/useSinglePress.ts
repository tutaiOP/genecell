import { useRef } from "react";

export function useSinglePress(delay = 500) {
  const lastPress = useRef(0);

  return (callback: () => void) => {
    const now = Date.now();
    if (now - lastPress.current < delay) return;
    lastPress.current = now;
    callback();
  };
}
