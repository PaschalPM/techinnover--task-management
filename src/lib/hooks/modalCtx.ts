import { useContext } from "react";
import { modalContext } from "../contexts";

const useModalCtx = () => {
  return useContext(modalContext);
};

export default useModalCtx