"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import filterIcon from "../../../public/images/store-filter-image.png";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/query";
import Link from "next/link";
import { addToCart, setCartCount, getCartCount } from "@/app/actions/actions";

// ///////////// feteched product's data type /////////////
type ProductDataType = {
  _id: string;
  status: string;
  productName: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  inventory: number;
};

const ProductPage = () => {
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [kidsDropdownOpen, setKidsDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  ///////////////////// testing  ///////////////////////
  const [products, setProducts] = useState<ProductDataType[]>([]); // State to store products
  const [isLoading, setIsLoading] = useState<boolean>(true); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error handling
  const [cartCount, setCartCountState] = useState<number>(getCartCount());

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

  const handleAddToCart = (e: React.MouseEvent, product: ProductDataType) => {
    e.preventDefault();
    addToCart(product);
    const newCount = cartCount + 1;
    setCartCount(newCount);
    setCartCountState(newCount);
  };

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
                    <div className="bg-[#eeeeee] rounded-lg shado-md p-4">
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

                      <h2 className="text-lg font-bold text-[#111111] "></h2>
                      <p className="text-[15px] text-[#757575]">
                        {product.category}
                      </p>

                      <p className="text-lg text-[#111111] font-bold">
                        ${product.price}
                      </p>

                      {/* ////////////// addto cart button */}
                      <button
                        className="bg-[#c6c6c6] text-[#111111] font-medium  py-1 px-3 text-cente ml-[160px]  w-[115px]  rounded hover:bg-slate-400 transition"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        <Link href="#">Add to Cart</Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
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
