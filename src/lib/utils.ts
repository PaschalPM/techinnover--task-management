import { tasks } from "@/fixtures";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BoardListType } from "./models/task-models";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBoardLists(): BoardListType[] {
  const tasksTodo = tasks.filter(({ state }) => state === "To do");
  const tasksInProgress = tasks.filter(({ state }) => state === "In progress");
  const tasksCompleted = tasks.filter(({ state }) => state === "Completed");

  return [
    {
      totalTasks: tasksTodo.length,
      title: "To do",
      tasks: tasksTodo,
    },
    {
      totalTasks: tasksInProgress.length,
      title: "In progress",
      tasks: tasksInProgress,
    },
    {
      totalTasks: tasksCompleted.length,
      title: "Completed",
      tasks: tasksCompleted,
    },
  ];
}
