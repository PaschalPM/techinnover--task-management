import Badge from "@/components/shared/Badge";
import MoreButton from "@/components/shared/buttons/MoreButton";
import MoreOptions from "./MoreOptions";
import FlagDisplay from "./FlagDisplay";
import { useState } from "react";

type Props = {
  task: TaskType;
};

export default function ListCard({ task }: Props) {
  const [moreOptionsIsOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((v) => !v);
  };
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="card-header space-y-4 mb-2">
        <div className="priority">
          <Badge text={task.priority} />
        </div>
        <div className="flex justify-between card-title text-base">
          <h2 className="font-semibold"> {task.name} </h2>
          <div className="relative">
            <MoreButton handleClick={toggleIsOpen} />
            {moreOptionsIsOpen && <MoreOptions task={task} />}
          </div>
        </div>
      </div>
      <div className=" w-full card-body">
        {task.coverImageUrl && (
          <div className="cover-image ">
            <img
              src={task.coverImageUrl}
              className="h-[100px] w-full object-cover rounded-md"
            />
          </div>
        )}
        {task.description && (
          <div className="description text-[14px] py-1">{task.description}</div>
        )}
      </div>
      <div className="card-footer flex justify-between text-xs pt-2">
        <div className="flex items-center space-x-1">
          <FlagDisplay
            state={task.state}
            dueDate={task.dueDate}
            dueTime={task.dueTime}
          />
          <span>{task.dueDate}</span>
        </div>
        <span>{task.dueTime}</span>
      </div>
    </div>
  );
}
