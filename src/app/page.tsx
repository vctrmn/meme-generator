"use client";

import { IKImage } from "imagekitio-next";

export default function Home() {
  return (
    <div className="">
      <IKImage
        urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
        path="balloons.png"
        height={300}
        width={300}
        transformation={[{ raw: "l-text,i-helloworld,fs-50,l-end" }]}
        alt="balloons"
      />
    </div>
  );
}
