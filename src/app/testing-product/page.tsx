import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/query";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allProducts });
  console.log("all products fetche scessfully")

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded  p-4"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={800}
              height={800}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{product.description}</p>
            <p className="text-green-600 font-bold text-lg">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}