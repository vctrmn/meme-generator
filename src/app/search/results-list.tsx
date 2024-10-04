"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";

export default function ResultList({ files }: { files: FileObject[] }) {
  return (
    <div>
      <h1>
        {files.map((file) => {
          return (
            <IKImage key={file.fileId} src={file.url} alt={file.name} width={300} height={300} />
          );
        })}
      </h1>
    </div>
  );
}
