import UploadVideo from '@/components/cloudinary/uploadVideo';
 
export default function Home() {
  return (
    <div className="flex justify-center items-center h-96">
    <div className=" w-full max-w-sm items-center gap-3">
      <UploadVideo />
    </div>
    </div>
  )
}
