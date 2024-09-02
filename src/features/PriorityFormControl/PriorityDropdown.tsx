import Tick from "@/components/shared/svgs/Tick";
import { priorityColors } from "@/lib/constants";
import { TaskPriorityType } from "@/lib/models/task-models";
import { useCallback } from "react";

type Props = {
  selectedPriority: TaskPriorityType | null;
  handlePrioritySelection: (priority: TaskPriorityType) => void;
};
export default function PriorityDropdrown({
  selectedPriority,
  handlePrioritySelection,
}: Props) {
  const isSelected = useCallback(
    (priority: TaskPriorityType) => {
      return selectedPriority === priority;
    },
    [selectedPriority]
  );
  const priorityList: TaskPriorityType[] = ["High", "Medium", "Low"];
  return (
    <ul className="absolute bg-white right-2 top-12 rounded-md border min-w-44 z-10 text-xs shadow-md">
      {priorityList.map((priority) => (
        <li
          onClick={(ev) =>
            handlePrioritySelection(
              (ev.target as HTMLLIElement).id as TaskPriorityType
            )
          }
          className="p-2 py-1 text-[10px] flex justify-between items-center"
          key={priority}
          id={priority}
          style={{
            backgroundColor: isSelected(priority)
              ? priorityColors[priority].lightBgColor
              : "",
            color: priorityColors[priority].fgColor,
          }}
        >
          {priority}
          {isSelected(priority) && <Tick />}
        </li>
      ))}
    </ul>
  );
}
