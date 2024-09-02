import { TaskPriorityType } from "./models/task-models";

export const priorityColors: Record<TaskPriorityType, PriorityColorGroupType> =
  {
    High: {
      bgColor: "#EBFAE2",
      fgColor: "#4F9C20",
      lightBgColor: "#F6FCF2",
    },
    Low: {
      bgColor: "#FDF2F2",
      fgColor: "#EC5962",
      lightBgColor: "#FEFAFA",
    },
    Medium: {
      bgColor: "#EEF3FF",
      fgColor: "#3069FE",
      lightBgColor: "#F7F9FF",
    },
  };
