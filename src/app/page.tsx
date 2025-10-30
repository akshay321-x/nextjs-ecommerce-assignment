"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  // Fetch products from API or use fallback demo data
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          // Demo fallback products (visible if DB empty)
          setProducts([
            {
              _id: "1",
              name: "Nike Air Shoes",
              price: 4500,
              image: "https://images.unsplash.com/photo-1606813902829-089d3c88f9be?w=800&q=80",
            },
            {
              _id: "2",
              name: "Apple AirPods Pro",
              price: 24999,
              image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80",
            },
            {
              _id: "3",
              name: "Classic Leather Watch",
              price: 6999,
              image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
            },
            {
              _id: "4",
              name: "Gaming Keyboard RGB",
              price: 3999,
              image: "https://images.unsplash.com/photo-1587202372775-98927d6ec0f1?w=800&q=80",
            },
            {
              _id: "5",
              name: "DSLR Camera Lens",
              price: 18999,
              image: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=800&q=80",
            },
          ]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter products based on search input
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Welcome to MyStore
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Discover premium products at unbeatable prices.
          </p>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 p-3 rounded-md text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition duration-300"
            >
              <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/next.svg"}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <p className="text-purple-400 font-bold mb-3">₹{product.price}</p>
              <Link
                href={`/products/${product._id}`}
                className="block text-center py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md hover:opacity-90 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found for “{search}”.
          </p>
        )}
      </div>
    </div>
  );
}
