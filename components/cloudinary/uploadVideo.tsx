"use client";
import { saveVideoToDatabase } from "../../app/actions";
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";

export default function UploadVideo() {
    const handleSuccess = (results: CloudinaryUploadWidgetResults) => {
        if (
          results.info &&
          typeof results.info === "object" &&
          "secure_url" in results.info
        ) {
          const secureUrl = results.info.secure_url as string;
          console.log("success", secureUrl);
          saveVideoToDatabase(secureUrl);
        }
      };
  return (
    <CldUploadButton
      signatureEndpoint="/api/cloudinary-sign"
      uploadPreset="ml_default"
      onSuccess={handleSuccess}
      />
  );
}
