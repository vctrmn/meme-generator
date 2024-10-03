"use client";

import { IKImage, IKUpload, ImageKitProvider } from "imagekitio-next";
import { useState } from "react";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(
      `Authentication request failed: ${error instanceof Error ? error.message : error}`,
    );
  }
};

export default function Home() {
  const [filePath, setFilePath] = useState("");

  return (
    <div>
      <ImageKitProvider
        publicKey={publicKey}
        authenticator={authenticator}
        urlEndpoint={urlEndpoint}
      >
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
            fileName="test-upload.png"
            onError={(error) => {
              console.error("Error uploading file: ", error);
            }}
            onSuccess={(response) => {
              console.info("File uploaded successfully", response);
              setFilePath(response.filePath);
            }}
          />
        </div>
      </ImageKitProvider>
    </div>
  );
}
