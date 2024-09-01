import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import ImagePreview from "./ImagePreview";
import UploadPrompt from "./UploadPrompt";
import useCloudinaryUploader from "@/lib/hooks/cloudinaryUploader";

type Props = { multiple?: boolean; maxFiles?: number };
export default function SingleImageUploader({
  multiple = false,
  maxFiles = 1,
}: Props) {
  const [selectedImage, setSelectedImage] = useState<SelectedImageType | null>(
    null
  );
  const { uploadProgress, upload } = useCloudinaryUploader();

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

  useEffect(() => {
    if (selectedImage){
      upload(selectedImage)
    }
  }, [selectedImage?.name])
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
    <div {...getRootProps({ className: "border rounded-md outline-none focus-visible:ring-2 ring-blue-200 focus-visible:border-blue-500" })}>
      <input {...getInputProps()} />
      <div className="h-24 w-full flex items-center">
        {selectedImage ? (
          <ImagePreview
            selectedImage={selectedImage}
            handleDeleteImage={() => setSelectedImage(null)}
            uploadProgress={uploadProgress}
          />
        ) : (
          <UploadPrompt />
        )}
      </div>
    </div>
  );
}
