import axios from "axios";
import { useState } from "react";

const uploadPreset = "techinnover-task-management";
const cloudName = "dize5khql";
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
const createFormData = (img: File) => {
  const formData = new FormData();
  formData.append("file", img);
  formData.append("upload_preset", uploadPreset);
  return formData;
};

const useCloudinaryUploader = () => {
  const [uploadProgress, setUploadProgress] =
    useState<CloudinaryUploadProgressType>(0);
  const [url, setUrl] = useState<string | null>(null);
  const upload = async (img: File) => {
    try {
      const res = axios.post(cloudinaryUrl, createFormData(img), {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress(progressEvent) {
          if (
            progressEvent.lengthComputable &&
            progressEvent.loaded &&
            progressEvent.total
          ) {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(() => progress);
          }
        },
      });
      setUrl((await res).data.url);
      setUploadProgress("completed");
    } catch (e) {
      setUploadProgress("failed")
    }
  };

  return { uploadProgress, url, upload };
};

export default useCloudinaryUploader;
