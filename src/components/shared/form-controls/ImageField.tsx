import SingleImageUploader from "@/features/ImageKitUploader/components/SingleImageUploader";
import Label from "../Label";

type Props = FormControlBasePropsType
export default function ImageField({labelText, isOptional = false}:Props) {
  return (
    <div className="my-3">
      <Label text={labelText} isOptional={isOptional} />
      <SingleImageUploader />
    </div>
  );
}
