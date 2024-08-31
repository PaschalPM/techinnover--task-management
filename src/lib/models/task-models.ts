const TaskPriorityEnum = z.enum(["High", "Medium", "Low"])
const TaskStateEnum = z.enum(["To do", "In progress", "Completed"])

import { z } from "zod";

const Task = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  priority: TaskPriorityEnum,
  coverImageUrl: z.string().optional(),
  dueDate: z.string(),
  dueTime: z.string(),
  state: TaskStateEnum,
});

export type TaskPriorityType = z.infer<typeof TaskPriorityEnum>
export type TaskStateType = z.infer<typeof TaskStateEnum>
export type TaskType = z.infer<typeof Task>;

export type BoardListType = {
  totalTasks: number;
  title: TaskStateType;
  tasks: TaskType[];
};
