"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductDetails() {
  const { slug } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${slug}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-400">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-400">
        <p>Product not found.</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8"
      >
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-purple-400 mb-2">
              {product.name}
            </h1>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <p className="text-gray-400 mb-2">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-purple-400 text-2xl font-semibold mb-4">
              ${product.price}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition">
              🛒 Add to Cart
            </button>
            <Link
              href="/"
              className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
