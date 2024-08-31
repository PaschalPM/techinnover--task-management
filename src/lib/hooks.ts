import { useContext, useEffect, useRef } from "react";
import { modalContext } from "./contexts";

export const useModalCtx = () => {
  return useContext(modalContext);
};


export const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)){
        handler()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handler])

  return ref
}