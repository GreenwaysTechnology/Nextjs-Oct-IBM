import Image from "next/image"

export async function fetchProducts() {
    const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    return response.json()
}
export default async function ProductsPage() {
    const products = await fetchProducts()
    return <div className="m-10 p-5">
        {
            products.map(product => {
                return <section key={product.id}>
                    <h2>{product.id}</h2>
                    <h3>{product.title}</h3>
                    <Image src={product.image} height={200} alt={product.title} width={200} />
                </section>
            })
        }
    </div>
}
