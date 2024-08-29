import EditTaskForm from "@/features/Forms/EditTaskForm";
import { useModalCtx } from "@/lib/hooks";

type Props = {task: TaskType}

export default function MoreOptions({}:Props) {
  const { openModal } = useModalCtx();

  const openEditTaskModal = () => {
    openModal(<EditTaskForm />);
  };
  return (
    <div className="absolute right-1 top-6 bg-white py-3 text-gray-600 space-y-2 rounded-lg border shadow-sm">
      <button onClick={openEditTaskModal} className="px-3 w-full"> Edit</button>
      <button className="text-red-500 px-3 w-full"> Delete</button>
    </div>
  );
}
