import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import ImagePreview from "./ImagePreview";
import UploadPrompt from "./UploadPrompt";

type Props = { multiple?: boolean; maxFiles?: number };

export default function SingleImageUploader({
  multiple = false,
  maxFiles = 1,
}: Props) {
  const [selectedImage, setSelectedImage] = useState<SelectedImageType | null>(
    null
  );

  const addAcceptedImageToImageList = useCallback((acceptedImage: File) => {
    setSelectedImage(
      Object.assign(acceptedImage, {
        objectUrl: URL.createObjectURL(acceptedImage),
      })
    );
  }, []);

  const onDrop = <T extends File>(acceptedFiles: T[]) => {
    addAcceptedImageToImageList(acceptedFiles[0] as unknown as File);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple,
    maxFiles,
    maxSize: 1024 ** 3,
  });
  return (
    <div {...getRootProps({ className: "border rounded-md" })}>
      <input {...getInputProps()} />
      <div className="h-28 flex items-center">
        {selectedImage ? (
          <ImagePreview
            selectedImage={selectedImage}
            handleDeleteImage={() => setSelectedImage(null)}
          />
        ) : (
          <UploadPrompt />
        )}
      </div>
    </div>
  );
}
