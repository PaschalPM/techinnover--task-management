import { TaskPriorityType } from "@/lib/models/task-models";

type Props = { text: TaskPriorityType | number };

function isPriority(text: TaskPriorityType | number): text is TaskPriorityType {
  if (typeof text === "string") {
    return true;
  }
  return false;
}

type ColorGroupType = { bg: string; text: string };

const priorityColors: Record<TaskPriorityType, ColorGroupType> = {
  High: {
    bg: "#EBFAE2",
    text: "#4F9C20",
  },
  Low: {
    bg: "#FDF2F2",
    text: "#EC5962",
  },
  Medium: {
    bg: "#EEF3FF",
    text: "#3069FE",
  },
};
export default function Badge({ text }: Props) {
  let colorGroup: ColorGroupType = {} as ColorGroupType;
  if (isPriority(text)) {
    colorGroup = priorityColors[text];
    text = text.toUpperCase() as TaskPriorityType;
  }

  return (
    <span
      className="bg-app-light-grey px-2 py-1 rounded-md font-medium text-xs"
      style={{ color: colorGroup.text, backgroundColor: colorGroup.bg }}
    >
      {text}
    </span>
  );
}
