type NavListItemType = {
  logo: JSX.Element;
  title: string;
  link: string;
};

type ModalContextType = {
  modalIsOpen: boolean;
  openModal: (childComponent: ReactNode, contentLabel?: string) => void;
  closeModal: () => void;
  contentLabel?: string
};

type SelectedImageType = File & { objectUrl: string };