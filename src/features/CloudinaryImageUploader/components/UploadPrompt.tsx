import UploadCloud from "@/components/shared/svgs/UploadCloud";

export default function UploadPrompt() {
  return (
    <div className="[&>p]:text-center text-xs space-y-1 flex flex-col justify-center items-center w-full cursor-pointer ">
      <div className="mb-3">
        <UploadCloud />
      </div>
      <p>
        <span className="text-app-purple font-medium">Click to upload</span>
        &nbsp;or drag and drop
      </p>
      <p className="text-[10px]">PNG or JPG</p>
    </div>
  );
}
