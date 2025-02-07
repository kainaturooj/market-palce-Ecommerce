"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import filterIcon from "../../../public/images/store-filter-image.png";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/query";
import Link from "next/link";

///////////// feteched product's data type /////////////
type ProductDataType = {
  _id: string;
  status: string;
  productName: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  
};

const ProductPage = () => {
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [kidsDropdownOpen, setKidsDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  ///////////////////// testing gpt ///////////////////////
  const [products, setProducts] = useState<ProductDataType[]>([]); // State to store products
  const [isLoading, setIsLoading] = useState<boolean>(true); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: ProductDataType[] = await sanityFetch({
          query: allProducts,
        });
        console.log(fetchedProducts);

        setProducts(fetchedProducts); // Update state with fetched data
        setIsLoading(false); // Set loading to false
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products."); // Handle error
        setIsLoading(false);
      }
    };

    fetchProducts(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <div className="min-h-screen bg-gra-100  mt-[80px] px-5   ">
        <header className="bg-[#FFFFFF] bg-slat-400 shadow px-3 flex items-center justify-between space-x-2">
          <h1 className="text-xl font-bold">New (500)</h1>

          {/* /////// filtering of products */}
          <div className="flex justify-end gap-5 items-center m-4 bg-gree-400">
            <div className="flex gap-3">
              <button
                onClick={() => setFiltersVisible(!filtersVisible)}
                className="text-[#111111] "
              >
                {filtersVisible ? "Hide Filters" : "Show Filters"}
              </button>
              <Image
                src={filterIcon}
                alt="filter icon"
                width={20}
                height={20}
              ></Image>
            </div>
            <div>
              <label htmlFor="sort" className="mr-2"></label>
              <select
                id="sort"
                className="borde border-gray-300 rounded px-2 py-1"
              >
                <option value="">Sort By</option>
                <option value="">Default</option>
                <option value="price">Price</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </header>

        <div className="flex bg-slat-800">
          <div></div>
          {/* Sidebar Filters */}
          {filtersVisible && (
            <aside className="w-1/4 h-[860px] b-white p-4 shadow bg-gree-600">
              {/* <h2 className="font-bold mb-4">Filters</h2> */}
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Shoes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Sports Bras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Tops & T-Shirts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Hoodies & Sweatshirts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Jackets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Trousers & Tights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Shorts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Tracksuits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Jumpsuits & Rompers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Skirts & Dresses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Socks
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#111111] font-medium">
                    Accessories & Equipment
                  </a>
                </li>
              </ul>

              <div className="mt-6 bg-gree-700">
                {/* Gender Dropdown */}
                <div className="bg-gree-300 mt-[50px] border-t border-t-[#E5E5E5] rounded">
                  <button
                    onClick={() => setGenderDropdownOpen(!genderDropdownOpen)}
                    className="flex items-center justify-between w-full font-semibold mb-2 focus:outline-none"
                  >
                    Gender
                    <span
                      className={
                        genderDropdownOpen ? "transform rotate-180" : ""
                      }
                    >
                      ▼
                    </span>
                  </button>
                  {genderDropdownOpen && (
                    <div className="space-y-4 pl-4">
                      <div>
                        <input type="checkbox" id="men" className="mr-2" />
                        <label htmlFor="men">Men</label>
                      </div>
                      <div>
                        <input type="checkbox" id="women" className="mr-2" />
                        <label htmlFor="women">Women</label>
                      </div>
                      <div>
                        <input type="checkbox" id="unisex" className="mr-2" />
                        <label htmlFor="unisex">Unisex</label>
                      </div>
                    </div>
                  )}
                </div>

                {/* Kids Dropdown */}
                <div className="mt-9  border-t border-t-[#E5E5E5] rounded">
                  <button
                    onClick={() => setKidsDropdownOpen(!kidsDropdownOpen)}
                    className="flex items-center justify-between w-full font-semibold mb-2 focus:outline-none"
                  >
                    Kids
                    <span
                      className={kidsDropdownOpen ? "transform rotate-180" : ""}
                    >
                      ▼
                    </span>
                  </button>
                  {kidsDropdownOpen && (
                    <div className="space-y-4 pl-4">
                      <div>
                        <input type="checkbox" id="boys" className="mr-2" />
                        <label htmlFor="boys">Boys</label>
                      </div>
                      <div>
                        <input type="checkbox" id="girls" className="mr-2" />
                        <label htmlFor="girls">Girls</label>
                      </div>
                    </div>
                  )}
                </div>

                {/* Shop By Price Dropdown */}
                <div className="mt-9  border-t border-t-[#E5E5E5] rounded bg-re-400">
                  <button
                    onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
                    className="flex items-center justify-between w-full font-semibold mb-2 focus:outline-none"
                  >
                    Shop By Price
                    <span
                      className={
                        priceDropdownOpen ? "transform rotate-180" : ""
                      }
                    >
                      ▼
                    </span>
                  </button>
                  {priceDropdownOpen && (
                    <div className="space-y-4 pl-4">
                      <div>
                        <input type="checkbox" id="price1" className="mr-2" />
                        <label htmlFor="price1">Under ₹ 2,500.00</label>
                      </div>
                      <div>
                        <input type="checkbox" id="price2" className="mr-2" />
                        <label htmlFor="price2">₹ 2,501.00 - ₹ 5,000.00</label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          )}

          {/* Product Grid */}
          <main className="flex-1 p-4 bg-re-900">
            {isLoading ? (
              <p className="text-white">Loading products...</p> // Show loading state
            ) : error ? (
              <p className="text-rd-500">{error}</p> // Show error state
            ) : (
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[200px] bg-late-500">
                {products.map((product) => (
                  
                  <div key={product._id}>
                    <div className="bg-gree-200 rounded-lg shado-md p-4">
                    <Link href={`/product-store/${product._id}`}>
                      <Image
                        src={product.imageUrl}
                        width={300}
                        height={200}
                        alt={product.productName}
                        className=""
                      />
                       </Link>
                      <p className="text-[14px] font-semibold text-red-800">
                        {product.status}
                      </p>
                      
                      <h2 className="text-lg font-bold text-[#111111] ">
                        {/* <Link href={"/product-store/" + product._id}>
                          {product.productName}
                        </Link> */}
                      </h2>
                      <p className="text-[15px] text-[#757575]">
                        {product.category}
                      </p>
                      {/* <p className="text-sm text-gray-600">
                        {product.description}
                      </p> */}
                      <p className="text-lg text-[#111111] font-bold">
                        ${product.price}
                      </p>
                    </div>
                   
                  </div>
                ))}
              </div>
              
         

            )}
          </main>

          {/* /////////////////////////////////////////////////////////////////////////// ///////*/}

          {/* <main className="flex-1 p-4 bg-red-900"> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[200px] bg-slate-500"> */}

          {/* Product Cards */}
          {/* <ProductCard
              title="Nike Air Force 1 Mid '07"
              price="₹10,795.00"
              imgSrc="/images/shoe_3.png"
              gender="Men's Shoes"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Court Vision Low Next Nature"
              price="₹4,995.00"
              imgSrc="/images/shoe-_4.png"
              gender="Men's Shoes"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/shoe-_5.png"
              gender="Women's Shoes"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_1-men.png"
              gender="Men's Short-Sleeve Fitness Top"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_2-men.png"
              gender="Men's Tight-Fit Sleeveless Top"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_3-men.png"
              gender="Men's Short-Sleeve Running Top"
              color= {1}
              productStatus="Promo Exclusion"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_1-women.png"
              gender="Women's Mid-Rise 18cm (approx.) Biker Shorts"
              color= {1}
              productStatus="Promo Exclusion"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_2-women.png"
              gender="Women's Mid-Rise 18cm (approx.) Biker Shorts"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_2-women.png"
              gender="Women's Mid-Rise 18cm (approx.) Biker Shorts"
              color= {1}
              productStatus="Sustainable Materials"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_1-kids.png"
              gender="Older Kids' Oversized Woven Jacket"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_1-kids.png"
              gender="Older Kids' Oversized Woven Jacket"
              color= {1}
              productStatus="Just In"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/cloth_1-kids.png"
              gender="Older Kids' Oversized Woven Jacket"
              color= {1}
              productStatus="Just In"
            /> */}

          {/* </div>

          </main> */}

          {/* ////////////////////////////  on final delete the above code ///////////////////////////////////// */}
        </div>
      </div> 

    {/* Related Categories */}
       <section className="mt-5 bg-blu-500 w-[600px pb-[100px] ml-[360px]">
        <h2 className="text-lg font-bold mb-4">Related Categories</h2>
        <div className="grid grid-rows-2 grid-cols-5 gap-2 px-[100px bg-slat-400">
          {[
            "Best Selling Products",
            "Best Shoes",
            "New Basketball Shoes",
            "New Football Shoes",
            "New Men's Shoes",
            "New Running Shoes",
            "Best Men's Shoes",
            "New Jordan Shoes",
            "Best Women's Shoes",
            "Best Training & Gym",
          ].map((category, index) => (
            <a
              key={index}
              href="#"
              className="bg-white border border-gray-300 rounded-full px-1 py-2 text-gray-700 hover:bg-gray-200 transition text-center text-[13px font-edium"
            >
              {category}
           </a>
          ))}
        </div>
       </section>
  </>
  ); 
};

export default ProductPage;






















/////////////////////////////////////////// testing fail /////////////////////
// import Image from "next/image";
// import Link from "next/link"; // Import Link for navigation
// import { client } from "@/sanity/lib/client";

// // Define the type for a product
// type Product = {
//   productName: string;
//   price: number;
//   status: string;
//   category: string;
//   colors: string[];
//   imageUrl: string;
//   slug: {
//     current: string; // Ensure slug is defined
//   };
// };

// // Fetch products from Sanity
// const fetchProducts = async (): Promise<Product[]> => {
//   const query = `*[_type == "product"]{
//     productName,
//     price,
//     status,
//     category,
//     colors,
//     "imageUrl": image.asset->url,
//     slug
//   }`;

//   return await client.fetch(query);
// };

// const ProductsPage = async () => {
//   const products = await fetchProducts(); // Fetch data on the server

//   return (
//     <div className="flex flex-col md:flex-row gap-6 p-4">
//       {/* Sidebar */}
//       <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold mb-4">New (50)</h2>
//         <ul className="space-y-2">
//           <li className="text-gray-700 font-medium">Shoes</li>
//           <li className="text-gray-700 font-medium">Sports Bras</li>
//           <li className="text-gray-700 font-medium">Tops & T-Shirts</li>
//           <li className="text-gray-700 font-medium">Hoodies & Sweatshirts</li>
//           <li className="text-gray-700 font-medium">Jackets</li>
//           <li className="text-gray-700 font-medium">Trousers & Tights</li>
//           <li className="text-gray-700 font-medium">Shorts</li>
//           <li className="text-gray-700 font-medium">Tracksuits</li>
//           <li className="text-gray-700 font-medium">Jumpsuits & Rompers</li>
//           <li className="text-gray-700 font-medium">Socks</li>
//         </ul>
//         <h3 className="text-lg font-bold mt-6">Gender</h3>
//         <ul className="space-y-2">
//           <li className="text-gray-700">Men</li>
//           <li className="text-gray-700">Women</li>
//           <li className="text-gray-700">Unisex</li>
//         </ul>
//         <h3 className="text-lg font-bold mt-6">Kids</h3>
//         <ul className="space-y-2">
//           <li className="text-gray-700">Boys</li>
//           <li className="text-gray-700">Girls</li>
//         </ul>
//         <h3 className="text-lg font-bold mt-6">Shop by Price</h3>
//         <ul className="space-y-2">
//           <li className="text-gray-700">Under ₹2,500.00</li>
//           <li className="text-gray-700">₹2,501.00 - ₹5,000.00</li>
//         </ul>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <Link href={/product-store/ + product.slug?.current}>
//             {/* <Link href={`/product-store/${product.slug?.current || ''}`}> */}
//               <Image
//                 src={product.imageUrl}
//                 alt={product.productName}
//                 width={300}
//                 height={300}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold">{product.productName}</h3>
//                 <p className="text-sm text-gray-600">{product.category}</p>
//                 <p className="text-sm text-gray-600">{product.colors}</p>
//                 <p className="text-xl font-semibold text-green-600">
//                   ₹{product.price}
//                 </p>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
