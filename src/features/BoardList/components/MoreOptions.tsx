import EditTaskForm from "@/features/Forms/EditTaskForm";
import useClickOutside from "@/lib/hooks/clickOutside";
import useModalCtx from "@/lib/hooks/modalCtx";
import { TaskType } from "@/lib/models/task-models";

type Props = {task: TaskType, handleClose: () => void }

export default function MoreOptions({task, handleClose}:Props) {
  const { openModal } = useModalCtx();
  
  const ref = useClickOutside(() => {
    handleClose()
  })

  const openEditTaskModal = () => {
    openModal(<EditTaskForm />);
    handleClose()
  };
  return (
    <div ref={ref} className="absolute right-1 top-6 bg-white py-3 text-gray-600 space-y-2 rounded-lg border shadow-sm">
      <button onClick={openEditTaskModal} className="px-3 w-full"> Edit</button>
      <button className="text-red-500 px-3 w-full"> Delete</button>
    </div>
  );
}
