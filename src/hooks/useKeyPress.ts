import { useEffect } from "react";
import { Key } from "../types/key";

export function useKeyPress(params: Array<{ key: Key; callback: () => void }>) {
  const handleClick = (event: KeyboardEvent) => {
    const item = params.find((i) => i.key === event.key);
    if (item) {
      event.preventDefault();
      item.callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClick, false);

    return () => {
      document.removeEventListener("keydown", handleClick, false);
    };
  }, []);
}
