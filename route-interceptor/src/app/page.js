import Link from "next/link";
import photos from "@/app/mock-data/photo";
import Image from "next/image";

export default function Home() {
  return <div className="container mx-auto">
    <h1 className="text-center text-4xl font-bold m-10">PhotoGallary App</h1>
    {/* render photos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-6 m-10">
      {photos.map(photo => {
        return <Link key={photo.id} href={`/photos/${photo.id}`}>
          <Image alt="Your Image"
            src={photo.imageSrc}
            height={500}
            width={500}
            className="w-full object-cover aspect-square"
          />
        </Link>
      })}
    </div>
  </div>
}

