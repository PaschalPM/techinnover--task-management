import { priorityColors } from "@/lib/constants";
import { TaskPriorityType } from "@/lib/models/task-models";
import { cn } from "@/lib/utils";

type Props = { text: TaskPriorityType | number; isUpperCase?: boolean };

function isPriority(text: TaskPriorityType | number): text is TaskPriorityType {
  if (typeof text === "string") {
    return true;
  }
  return false;
}

export default function Badge({ text, isUpperCase = true }: Props) {
  let colorGroup: PriorityColorGroupType = {} as PriorityColorGroupType;
  if (isPriority(text)) {
    colorGroup = priorityColors[text];
    text = (isUpperCase ? text.toUpperCase() : text) as TaskPriorityType;
  }

  return (
    <span
      className={cn(
        "bg-app-light-grey px-2 py-1 rounded-sm font-medium text-xs",
        {
          "text-[9px]": isUpperCase === false,
        }
      )}
      style={{ color: colorGroup.fgColor, backgroundColor: colorGroup.bgColor }}
    >
      {text}
    </span>
  );
}
