import Badge from "@/components/shared/Badge";
import MoreButton from "@/components/shared/buttons/MoreButton";
import TaskFlag from "@/components/shared/svgs/TaskFlag";

type Props = {
  task: TaskType;
};

type FProps = { state: TaskStateType; dueDate: string; dueTime: string };
function FlagDisplay({ state }: FProps) {
  if (state === "Completed") {
    return <TaskFlag status="completed" />;
  }

  return <TaskFlag status="new" />;
}

export default function ListCard({
  task: { priority, name, coverImageUrl, description, dueDate, dueTime, state },
}: Props) {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="card-header space-y-4 mb-2">
        <div className="priority">
          <Badge text={priority} />
        </div>
        <div className="flex justify-between card-title text-base">
          <h2 className="font-semibold"> {name} </h2>
          <MoreButton />
        </div>
      </div>
      <div className=" w-full card-body">
        {coverImageUrl && (
          <div className="cover-image ">
            <img
              src={coverImageUrl}
              className="h-[100px] w-full object-cover rounded-md"
            />
          </div>
        )}
        {description && (
          <div className="description text-[14px] py-1">{description}</div>
        )}
      </div>
      <div className="card-footer flex justify-between text-xs pt-2">
        <div className="flex items-center space-x-1">
          <FlagDisplay state={state} dueDate={dueDate} dueTime={dueTime} />
          <span>{dueDate}</span>
        </div>
        <span>{dueTime}</span>
      </div>
    </div>
  );
}
