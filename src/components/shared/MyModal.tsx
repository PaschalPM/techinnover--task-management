import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import Modal from "react-modal";


const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

Modal.setAppElement("#root");

type Props = PropsWithChildren & {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  contentLabel?: string;
};

export default function MyModal({
  children,
  modalIsOpen,
  setIsOpen,
  contentLabel,
}: Props) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
}
