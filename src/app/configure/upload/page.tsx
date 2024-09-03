"use client";

import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

export default function UploadPage() {
    const [isDragOver, setIsDragOver] = useState<boolean>(false);

    const onDropRejected = () => {

    }

    const onDropAccepted = () => {

    }

    const isUploading = false;
    const [isPending, startTransition] = useTransition();

    return (
        <div className={cn(
            "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex col justify-center items-center", {
            "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
        )}>

            <div className="relative flex flex-1 flex-col items-center justify-center w-full">
                <Dropzone
                    onDropRejected={onDropRejected}
                    onDropAccepted={onDropAccepted}
                    accept={{
                        "image/png": [".png"],
                        "image/jpeg": [".jpeg"],
                        "image/jpg": [".jpg"],
                    }}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div
                            className="h-full w-full flex-1 flex flex-col items-center justify-center"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {isDragOver ? (
                                <MousePointerSquareDashed className="size-6 text-zinc-500 mb-2" />
                            ) : isUploading || isPending ? (
                                <Loader2 className="animate-spin size-6 text-zinc-500 mb-2" />
                            ) : (
                                <Image className="size-6 text-zinc-500 mb-2" />
                            )}
                            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">

                            </div>
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    );
}

