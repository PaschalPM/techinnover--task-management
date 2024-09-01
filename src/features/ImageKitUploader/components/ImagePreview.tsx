import Thrash from "@/components/shared/svgs/Thrash";
import { convertBytes } from "../utils";
import { MouseEventHandler, useEffect, useState } from "react";
import ProgressBar from "@/components/shared/ProgressBar";
import { cn } from "@/lib/utils";

type Props = {
  selectedImage: SelectedImageType;
  handleDeleteImage: () => void;
  uploadProgress: CloudinaryUploadProgressType;
};

export default function ImagePreview({
  selectedImage,
  handleDeleteImage,
  uploadProgress,
}: Props) {
  const [displayProgressBar, setDisplayProgressBar] = useState(false);

  const onLoad = () => {
    if (selectedImage) URL.revokeObjectURL(selectedImage.objectUrl);
  };

  const onClick: MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();
  };

  useEffect(() => {
    let timeoutId: unknown;
    if (uploadProgress === "completed") {
      timeoutId = setTimeout(() => {
        setDisplayProgressBar(false);
      }, 1500);
    } else if (uploadProgress === "failed") {
      handleDeleteImage();
      setDisplayProgressBar(false);
      alert("Oops... Failed to upload");
    } else {
      setDisplayProgressBar(true);
    }

    return () => clearTimeout(timeoutId as number);
  }, [uploadProgress]);
  return (
    <div className="size-full p-2 flex gap-3 text-xs" onClick={onClick}>
      <img
        src={selectedImage.objectUrl}
        onLoad={onLoad}
        className={cn("basis-1/2 object-cover rounded-md opacity-25", {
          "opacity-100":
            uploadProgress === "completed" && displayProgressBar === false,
        })}
      />
      <div className=" flex flex-col justify-evenly gap-2 grow">
        <div>
          <h3 className="font-medium max-w-[90%]">{selectedImage.name}</h3>
          <div className="flex justify-between ">
            <span className="opacity-50 text-[10px]">
              {convertBytes(selectedImage.size)}
            </span>
            <button onClick={handleDeleteImage}>
              <Thrash />
            </button>
          </div>
        </div>
        {displayProgressBar ? <ProgressBar progress={uploadProgress} /> : null}
      </div>
    </div>
  );
}
