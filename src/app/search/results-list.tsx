"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import Link from "next/link";

export default function ResultList({ files }: { files: FileObject[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {files.map((file) => {
        return (
          <Card key={file.fileId}>
            <CardHeader>
              <CardTitle>{file.customMetadata?.displayName ?? file.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <IKImage
                key={file.fileId}
                path={file.filePath}
                alt={file.name}
                width={300}
                height={300}
              />
            </CardContent>
            <CardFooter>
              <Button asChild variant={"outline"} className="font-bold">
                <Link href={`/customize/${file.fileId}`}>Customize</Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
