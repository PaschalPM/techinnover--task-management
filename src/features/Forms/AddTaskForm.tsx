import DateTimePicker from "@/components/shared/DateTimePicker";
import Label from "@/components/shared/Label";
import SingleImageUploader from "@/features/CloudinaryImageUploader/components/SingleImageUploader";

export default function AddTaskForm() {
  return (
    <div>
      <div className="head">
        <h2>Add Task</h2>x
      </div>
      <form action="">
        <div className="form-control">
          <Label text="Task Name" />
          <div>
            <input type="text" placeholder="Enter task name" />
          </div>
        </div>
        <div className="form-control">
          <Label text="Description" isOptional={true} />
          <div>
            <textarea
              className="w-full"
              defaultValue="Write more on the task..."
            ></textarea>
          </div>
        </div>
        <div className="form-control">
          <Label text="Priority" />
          <div>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="form-control">
          <Label text="Upload cover" isOptional={true} />
          <SingleImageUploader />
        </div>
        <div className="form-group flex gap-2">
          <DateTimePicker placeholder="Due date" label="Deadline" type="date" />
          <DateTimePicker placeholder="Due time" label="Time" type="time" />
        </div>
        <div className="form-submit ">
          <button className="bg-app-blue text-center w-full">Update</button>
        </div>
      </form>
    </div>
  );
}
