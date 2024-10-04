"use client";

import { IKImage, IKUpload } from "imagekitio-next";
import { useState } from "react";

export default function Home() {
  const [filePath, setFilePath] = useState("");

  return (
    <div>
      {filePath && (
        <IKImage
          path={filePath}
          height={300}
          width={300}
          transformation={[{ raw: "l-text,i-helloworld,fs-50,l-end" }]}
          alt="balloons"
        />
      )}

      <div>
        <h2>File upload</h2>
        <IKUpload
          onError={(error) => {
            console.error("Error uploading file: ", error);
          }}
          onSuccess={(response) => {
            console.info("File uploaded successfully", response);
            setFilePath(response.filePath);
          }}
        />
      </div>
    </div>
  );
}
