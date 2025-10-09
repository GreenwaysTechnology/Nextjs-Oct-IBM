
import Image from "next/image"

export default function LocalImage() {
    return <div>
        <Image src="/next.svg" alt="This is Next logo" height={100} width={100} />
        <Image src="/window.svg" alt="This is Next logo" height={100} width={100} />
    </div>

}