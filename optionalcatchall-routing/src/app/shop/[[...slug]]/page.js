import { notFound } from "next/navigation"


const products = {
    //path: path Content
    "shop": "Shop Home Page",
    "computers": "This is Computers Page",
    "mobiles": "This is Mobile Pages"
}
export default async function ShopPage({ params }) {
    const slug = (await params).slug
    const path = slug ? slug.join('/') : "shop"
    const content = products[path]
    if (!content) {
        notFound()
    }
    return <div className="m-10 p-6">
        <h1>Shops URL : {path}</h1>
        <p>
            {content}
        </p>
    </div>
}