import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/query";
import Image from "next/image";

// Define the TypeScript type for products
type ProductDataType = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

const handleFetchProducts = async () => {
  const products: ProductDataType[] = await sanityFetch({ query: allProducts });
  console.log("all fetched producs here" + products);
  return (
    <div>
      <main className="flex-1 p-4 bg-red-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[200px] bg-slate-500">
          {products.map((product) => (
            <div key={product._id}>
              <div className="bg-white rounded-lg shadow-md p-4">
                <Image
                  src={product.imageUrl}
                  width={200}
                  height={200}
                  alt="image"
                />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default handleFetchProducts;
