import { useContext } from "react";
import { modalContext } from "./contexts";

export const useModalCtx = () => {
  return useContext(modalContext);
};
