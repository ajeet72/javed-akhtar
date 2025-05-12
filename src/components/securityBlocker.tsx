'use client';
import { useEffect } from "react";

export default function SecurityBlocker() {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();

    const disableDevTools = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableDevTools);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableDevTools);
    };
  }, []);

  return null;
}
