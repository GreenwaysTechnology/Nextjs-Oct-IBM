import { notFound } from "next/navigation"

const docs = {
    //url:what to be displaced for this url
    "getting-started": " Heres How to get started",
    "advanced": "This is advanced Guide"
}

export default async function DocsDetailsPage({ params }) {
    const slug = (await params).slug
    console.log(slug)
    const path = slug.join("/")
    console.log('path', path)
    const content = docs[path]
    console.log('content', content)

    if (!content) {
        notFound()
    }
    return <div className="m-30 p-6">
        <h1>Docs :{path}</h1>
        <p>{content}</p>
    </div>
}