import { cn } from "@/lib/utils";
import { useMemo } from "react";


type Props = { progress: CloudinaryUploadProgressType };

export default function ProgressBar({ progress = 0 }: Props) {
  const progressStr = useMemo(() => {
    return typeof progress === "number" ? (
      `${progress}%`
    ) : progress 
  }, [progress]);
  return (
    <div className="flex items-baseline text-[9px] gap-2 font-medium">
      <div className="w-full bg-gray-200 h-1.5 rounded-md">
        <div
          className={cn("bg-app-blue h-full rounded-md", {
            "bg-green-600": progress === "completed",
          })}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span>{progressStr}</span>
    </div>
  );
}
