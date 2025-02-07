import { sanityFetch } from '@/sanity/lib/fetch';
import { allProducts } from '@/sanity/lib/query';
import Image from 'next/image';

// Define the TypeScript type for products
type ProductDataType = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

// Fetch data from Sanity using getServerSideProps
// Render the product list
// export default function  ProductCart({ products }: any) {
  // return (
    // <>
    {/* // <div style={{ padding: '20px' }}> */}
      {/* <h1>Product List</h1> */}
      {/* {products.length > 0 ? (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {products.map((product) => (
            <div key={product._id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                style={{ borderRadius: '8px' }}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                <strong>${product.price.toFixed(2)}</strong>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )} */}
    {/* </div> */}

    {/* </> */}
  // );
// }


// export async function getServerSideProps() {
//   console.log("running....")
//   try {
//     const products: ProductDataType[] = await sanityFetch({ query: allProducts });
//     console.log('Fetched products:', products);

//     return {
//       props: {
//         products,
//       },
//     };
//   } catch (error) {
//     console.error('Error in getServerSideProps:', error);
//     return {
//       props: {
//         products: [],
//       },
//     };
//   }
// }



// /////////////////////////////////// again testing ///
 const  handleFetchProducts = async  () => {
    const products:ProductDataType[] = await sanityFetch({ query: allProducts });
    console.log( "all fetched producs here" + products);
    return(
      <div>
      <main className="flex-1 p-4 bg-red-900">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[200px] bg-slate-500">
        {products.map((product) => (
          <div key={product._id}>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image src={product.imageUrl} width={200} height={200} alt="image" />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-sm text-gray-600">${product.price}</p>

            </div>

      </div>
        ))}

     </div>

      </main>
      </div>
    )

    };
    export default handleFetchProducts