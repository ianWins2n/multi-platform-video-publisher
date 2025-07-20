"use client";
import { saveVideoToDatabase } from "../../app/actions";
import { CldUploadButton } from "next-cloudinary";

export default function UploadVideo() {
  const handleSuccess = (success: any) => {
    console.log("success", success.info.secure_url);
    saveVideoToDatabase(success.info.secure_url);
  };
  return (
    <CldUploadButton
      signatureEndpoint="/api/cloudinary-sign"
      uploadPreset="ml_default"
      onSuccess={handleSuccess}
      />
  );
}
