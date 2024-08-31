import TaskFlag from "@/components/shared/svgs/TaskFlag";
import { TaskStateType } from "@/lib/models/task-models";

type Props = { state: TaskStateType; dueDate: string; dueTime: string };

export default function FlagDisplay({ state }: Props) {
  if (state === "Completed") {
    return <TaskFlag status="completed" />;
  }

  return <TaskFlag status="new" />;
}