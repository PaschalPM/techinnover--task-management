import Thrash from "@/components/shared/svgs/Thrash";
import { convertBytes } from "../utils";
import { MouseEventHandler } from "react";

type Props = {
  selectedImage: SelectedImageType;
  handleDeleteImage: () => void;
};

export default function ImagePreview({
  selectedImage,
  handleDeleteImage,
}: Props) {
  const onLoad = () => {
    if (selectedImage) URL.revokeObjectURL(selectedImage.objectUrl);
  };

  const onClick: MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();
  };
  return (
    <div className="size-full py-4 px-2 flex gap-3 text-xs" onClick={onClick}>
      <img
        src={selectedImage.objectUrl}
        onLoad={onLoad}
        className="basis-1/2 object-cover rounded-md"
      />
      <div className=" flex flex-col justify-between py-1 grow">
        <div>
          <h3 className="font-medium max-w-[75%]">{selectedImage.name}</h3>
          <div className="flex justify-between ">
            <span className="opacity-50 text-[10px]">
              {convertBytes(selectedImage.size)}
            </span>
            <button onClick={handleDeleteImage}>
              <Thrash />
            </button>
          </div>
        </div>
        <div>loading...</div>
      </div>
    </div>
  );
}
