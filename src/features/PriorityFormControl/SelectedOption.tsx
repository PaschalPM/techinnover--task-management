import Badge from "@/components/shared/Badge";
import { TaskPriorityType } from "@/lib/models/task-models";

type Props = { selectedOption: TaskPriorityType | null };
export default function SelectedOption({ selectedOption }: Props) {
  return selectedOption === null ? (
    <span className="text-gray-400">Select the priority of the task</span>
  ) : (
    <Badge text={selectedOption} isUpperCase={false} />
  );
}
