import Image from "next/image"

export default function Frame({ photo }) {
    return <div>
        <Image alt="Your Image"
            src={photo.imageSrc}
            height={100}
            width={100}
            className="w-full object-cover aspect-square"
        />
        <div>
            <h1 className="text-bold">{photo.name}</h1>
            <h2>Taken by{photo.username}</h2>
        </div>
    </div>
}
