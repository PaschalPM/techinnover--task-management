import { PropsWithChildren, ReactNode, useState } from "react";
import { modalContext } from "@/lib/contexts";
import MyModal from "@/components/shared/MyModal";

export default function ModalProvider({ children }: PropsWithChildren) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contentLabel, setContentLabel] = useState("");
  const [childComponent, setChildComponent] = useState<ReactNode>(<></>);

  const openModal = (childComponent: ReactNode, contentLabel = "") => {
    setIsOpen(true);
    setContentLabel(contentLabel);
    setChildComponent(childComponent);
  };
  const closeModal = () => {
    setIsOpen(true);
  };

  return (
    <modalContext.Provider value={{ modalIsOpen, closeModal, openModal }}>
      {children}
      <MyModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        contentLabel={contentLabel}
      >
        {childComponent}
      </MyModal>
    </modalContext.Provider>
  );
}
