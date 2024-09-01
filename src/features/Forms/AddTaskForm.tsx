import DateTimePicker from "@/components/shared/DateTimePicker";
import ImageField from "@/components/shared/form-controls/ImageField";
import InputField from "@/components/shared/form-controls/InputField";
import PrioritySelectField from "@/components/shared/form-controls/PrioritySelectField";
import TextField from "@/components/shared/form-controls/TextField";
import Label from "@/components/shared/Label";
import X from "@/components/shared/svgs/X";
import useModalCtx from "@/lib/hooks/modalCtx";

export default function AddTaskForm() {
  const {closeModal} = useModalCtx()
  return (
    <div className="max-h-screen">
      <div className="flex justify-between mb-3 items-center">
        <h2 className="text-lg font-semibold">Add Task</h2>
        <button onClick={closeModal}>
          <X />
        </button>
      </div>
      <form action="">
        <InputField labelText="Task Name" placeholder="Enter task name" />
        <TextField
          labelText="Description"
          placeholder="Write more on the task..."
          isOptional={true}
        />

        <PrioritySelectField/>
        <ImageField labelText="Upload cover" isOptional={true} />

        <div className="form-group flex gap-2">
          <DateTimePicker placeholder="Due date" label="Deadline" type="date" />
          <DateTimePicker placeholder="Due time" label="Time" type="time" />
        </div>
        <div className="form-submit mt-4">
          <button className="bg-app-blue text-center w-full text-white py-2 rounded-lg text-xs my-2 outline-none focus-visible:ring-2 ring-blue-200 focus-visible:border-blue-500">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
