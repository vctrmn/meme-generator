"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IKUpload } from "imagekitio-next";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function UploadMemeButton() {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Upload Meme Image</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload your meme image</DialogTitle>
          <DialogDescription>This is a meme image anyone can build upon.</DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            setIsUploading(true);
            uploadInputRef.current?.click();
          }}
        >
          <div>
            <Label htmlFor="displayName">Display Name</Label>
            <Input
              id="displayName"
              name="displayName"
              placeholder=""
              required
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
            />
            <IKUpload
              customMetadata={{ displayName }}
              onError={(error) => {
                console.error("Error uploading file: ", error);
                setIsUploading(false);
              }}
              onSuccess={(response) => {
                setIsUploading(false);
                router.push(`/customize/${response.fileId}`);
              }}
              style={{ display: "none" }}
              ref={uploadInputRef}
            />
          </div>
          <DialogFooter className="flex justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>

            <Button disabled={isUploading} type="submit">
              {isUploading && <LoaderCircle className="animate-spin h-5 w-5 mr-2" />}
              Select & Upload Image
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
