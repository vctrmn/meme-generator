"use client";

import { ImageKitProvider } from "imagekitio-next";

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

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ImageKitProvider publicKey={publicKey} authenticator={authenticator} urlEndpoint={urlEndpoint}>
      {children}
    </ImageKitProvider>
  );
}
