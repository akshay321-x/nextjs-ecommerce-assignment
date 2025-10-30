"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      name: "Nike Air Shoes",
      description: "Comfortable and stylish running shoes.",
      price: 4500,
      image: "https://images.unsplash.com/photo-1606813902829-089d3c88f9be?w=800&q=80",
      slug: "nike-air-shoes",
    },
    {
      name: "Adidas Ultraboost",
      description: "Energy-returning comfort for long runs.",
      price: 5999,
      image: "https://images.unsplash.com/photo-1606813902929-91e8cfb7d93c?w=800&q=80",
      slug: "adidas-ultraboost",
    },
    {
      name: "Puma Classic",
      description: "Timeless design with superior grip.",
      price: 3999,
      image: "https://images.unsplash.com/photo-1606813902665-b1f43ad2e5d3?w=800&q=80",
      slug: "puma-classic",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10">✨ Our Premium Collection</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center items-center">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
          >
            <div className="relative w-full h-60">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-300 mb-3">{product.description}</p>
              <p className="text-xl font-bold text-green-400 mb-5">₹{product.price}</p>

              <div className="flex justify-between">
                <Link href={`/products/${product.slug}`}>
                  <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </Link>
                <Button variant="outline" className="text-white border-gray-500 hover:bg-gray-700">
                  Add to Cart
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
