import { DatePicker as RsuiteDatePicker } from "rsuite";
import "rsuite/DatePicker/styles/index.css";
import Label from "./Label";

type Props = { type: "date" | "time"; label: string; placeholder: string };

export default function DatePicker({ label, type, placeholder }: Props) {
  return (
    <div>
      <Label text={label} />
      <div className="max-w-44">
        <RsuiteDatePicker
          placement="top"
          placeholder={placeholder}
          format={type === "time" ? "h:mm aa" : "MMM do yyyy"}
          editable={false}
          className="outline-none"
        />
      </div>
    </div>
  );
}
