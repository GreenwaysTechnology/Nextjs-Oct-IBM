import photos from "@/app/mock-data/photo"
import Frame from "@/app/components/frame"

export default async function PhotoDetailsPage({ params }) {
    const id = (await params).id
    const photo = photos.find(photo => photo.id === id)
    return <div className="container mx-auto my-10">
        <Frame photo={photo} />
    </div>
}
