import { Partial } from "rsuite/esm/internals/types/utils";
import Label from "@/components/shared/Label";
import DropdownSvg from "@/components/shared/svgs/Dropdown";
import { useRef, useState } from "react";
import { TaskPriorityType } from "@/lib/models/task-models";
import SelectedOption from "./SelectedOption";
import PriorityDropdrown from "./PriorityDropdown";

type Props = Partial<FormControlBasePropsType>;
export default function PrioritySelectField({ isOptional = false }: Props) {
  const [dropdownState, setDropdownState] = useState(false);
  const [selectedPriority, setSelectedPriority] =
    useState<TaskPriorityType | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handlePrioritySelection = (priority: TaskPriorityType) => {
    setSelectedPriority(priority);
  };

  const toggleDropdownState = () => {
    setDropdownState((state) => !state);
  };
  return (
    <div className="relative">
      <Label text="Priority" isOptional={isOptional} />
      <div
        ref={ref}
        tabIndex={0}
        className="flex w-full border outline-none focus:ring-2 ring-blue-200 focus:border-blue-500 border-slate-300 h-8 rounded-md items-center cursor-pointer"
        onClick={toggleDropdownState}
      >
        <div className="grow text-xs p-2">
          <SelectedOption selectedOption={selectedPriority} />
        </div>
        {dropdownState && (
          <PriorityDropdrown
            selectedPriority={selectedPriority}
            handlePrioritySelection={handlePrioritySelection}
          />
        )}
        <span className="px-2">
          <DropdownSvg />
        </span>
      </div>
    </div>
  );
}
