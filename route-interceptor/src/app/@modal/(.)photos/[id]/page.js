import photos from "@/app/mock-data/photo"
import Frame from "@/app/components/frame"
import Modal from "@/app/components/model"

export default async function PhotoModal({ params }) {
    const id = (await params).id 
    const photo = photos.find((p) => p.id == id)
    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    )
}
