import ListCard from "./ListCard";
import Badge from "@/components/shared/Badge";
import AddButton from "@/components/shared/buttons/AddButton";

type Props = { boardList: BoardListType };

export default function ListContainer({
  boardList: { title, totalTasks, tasks },
}: Props) {
  return (
    <div className="w-full bg-slate-100 max-h-full min-w-80 rounded-md">
      <div className="header flex justify-between items-center pt-4 p-2">
        <div className="space-x-2">
          <h3 className="inline font-semibold">{title}</h3>
          <Badge text={totalTasks} />
        </div>
        <AddButton />
      </div>
    <div className="overflow-auto max-h-[calc(100%-50px)]">
        <div className="cards-section p-2 space-y-4">
          {tasks.map((task) => (
            <ListCard task={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
