import Link from "next/link";

const catalog = {
    index: [
        {
            name: "Electronics",
            slug: "electronics",
            children: [
                {
                    name: "Mobiles",
                    slug: "mobiles",
                    children: [
                        {
                            name: "iPhone 15",
                            slug: "iphone-15",
                            type: "product",
                            price: "₹79,999",
                        },
                        {
                            name: "Samsung Galaxy S24",
                            slug: "samsung-galaxy-s24",
                            type: "product",
                            price: "₹69,999",
                        },
                    ],
                },
                {
                    name: "Laptops",
                    slug: "laptops",
                    children: [
                        {
                            name: "Lenvo",
                            slug: "LenvoThinkPad",
                            type: "product",
                            price: "₹79,999",
                        },
                        {
                            name: "Dell",
                            slug: "dell",
                            type: "product",
                            price: "₹79,999",
                        }
                    ],
                },
            ],
        },
        {
            name: "Fashion",
            slug: "fashion",
            children: [
                {
                    name: "Men",
                    slug: "men",
                    children: [
                        { name: "T-Shirts", slug: "t-shirts", type: "product", price: "₹999" },
                        { name: "Shoes", slug: "shoes", type: "product", price: "₹1999" },
                    ],
                },
                { name: "Women", slug: "women", children: [] },
            ],
        },
        {
            name: "Books",
            slug: "books",
            children: [],
        },
    ],
};

function findNode(catalog, pathSegments) {
  let currentLevel = catalog.index;

  for (let segment of pathSegments) {
    const found = currentLevel.find((node) => node.slug === segment);
    if (!found) return null;
    if (found.type === "product") return found; // stop at product
    currentLevel = found.children || [];
  }

  return { children: currentLevel }; // return category with sub-items
}
export default async function ProductsPage({ params }) {
  const { slug } = await params;
  const path = slug || [];

  const node = findNode(catalog, path);

  if (!node) {
    return <h1 className="p-6 text-xl font-bold">Not Found</h1>;
  }

  // Product page
  if (node.type === "product") {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">{node.name}</h1>
        <p className="mt-2 text-gray-600">{node.price}</p>
      </div>
    );
  }

  // Category page
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {path.length === 0 ? "All Categories" : path.join(" → ")}
      </h1>
      <ul className="list-disc pl-6 space-y-2">
        {node.children.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/products/${[...path, item.slug].join("/")}`}
              className="text-blue-600 hover:underline"
            >
              {item.name}
            </Link>
            {/* <div>
              {JSON.stringify(item)}
            </div> */}
          </li>
        ))}
      </ul>
      <p>
        This is product page
      </p>
    </div>
  );
}
