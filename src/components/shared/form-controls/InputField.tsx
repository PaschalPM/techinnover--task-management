import Label from "../Label";

type Props = FormControlBasePropsType;
export default function InputField({
  labelText,
  placeholder,
  isOptional = false,
}: Props) {
  return (
    <div className="my-3">
      <Label text={labelText} isOptional={isOptional} />
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className="placeholder:text-xs w-full p-2 text-xs border rounded-md border-slate-300 outline-none focus-visible:ring-2 ring-blue-200 focus-visible:border-blue-500"
        />
      </div>
    </div>
  );
}
