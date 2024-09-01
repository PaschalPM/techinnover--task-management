import { Partial } from "rsuite/esm/internals/types/utils";
import Label from "../Label";
import Dropdown from "../svgs/Dropdown";
import { useRef, useState } from "react";
import { TaskPriorityType } from "@/lib/models/task-models";
import Badge from "../Badge";

type SProps = { selectedOption: TaskPriorityType | null };
const SelectedOption = ({ selectedOption }: SProps) => {
  return selectedOption === null ? (
    <span className="text-gray-400">Select the priority of the task</span>
  ) : <Badge text={selectedOption} isUpperCase={false}/>;
};

type Props = Partial<FormControlBasePropsType>;
export default function PrioritySelectField({ isOptional = false }: Props) {
  const [selectedTask] = useState<TaskPriorityType | null>('Low');
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="form-control">
      <Label text="Priority" isOptional={isOptional} />
      <div
        ref={ref}
        tabIndex={0}
        className="flex w-full border outline-none focus:ring-2 ring-blue-200 focus:border-blue-500 border-slate-300 h-8 rounded-md items-center cursor-pointer"
      >
        <div className="grow text-xs p-2">
          <SelectedOption selectedOption={selectedTask} />
        </div>
        <span className="px-2">
          <Dropdown />
        </span>
      </div>
    </div>
  );
}
