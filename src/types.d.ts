type PriorityType = "High" | "Medium" | "Low";
type TaskStateType = "To do" | "In progress" | "Completed";
type BoardListType = {
  totalTasks: number;
  title: TaskState;
  tasks: TaskType[];
};
type TaskType = {
  id?: string;
  name: string;
  description?: string;
  priority: PriorityType;
  coverImageUrl?: string;
  dueDate: string;
  dueTime: string;
  state: TaskStateType;
};

type NavListItemType = {
  logo: JSX.Element;
  title: string;
  link: string;
};

type ModalContextType = {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};
