"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";

export default function ResultList({ files }: { files: FileObject[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {files.map((file) => {
        return (
          <Card key={file.fileId}>
            <CardHeader></CardHeader>
            <CardContent>
              <IKImage
                key={file.fileId}
                path={file.filePath}
                alt={file.name}
                width={300}
                height={300}
              />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
