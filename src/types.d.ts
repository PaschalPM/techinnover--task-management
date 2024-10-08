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

type CloudinaryUploadProgressType = number | 'completed' | 'failed'

type FormControlBasePropsType = { labelText: string; placeholder?: string; isOptional?: boolean };

type PriorityColorGroupType = { fgColor: string, bgColor?: string; lightBgColor?: string; };
