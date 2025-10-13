export default async function ShopCategoryPage(props) {
    const values = (await props.params)
    return <h1 className="m-50">{JSON.stringify(values)}</h1>
}