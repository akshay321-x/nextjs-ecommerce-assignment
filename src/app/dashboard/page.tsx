"use client";

import { useEffect, useState } from "react";

interface Product {
  _id?: string;
  name: string;
  price: number;
  category: string;
  inventory: number;
  image?: string;
}

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Product>({
    name: "",
    price: 0,
    category: "",
    inventory: 0,
    image: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch all products
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new product
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const newProduct = await res.json();
        setProducts([...products, newProduct]);
        setFormData({
          name: "",
          price: 0,
          category: "",
          inventory: 0,
          image: "",
        });
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Admin Dashboard</h1>

      {/* Product Count */}
      <div className="mb-6">
        <p className="text-xl font-semibold text-gray-700">
          Total Products:{" "}
          <span className="text-blue-600">{products.length}</span>
        </p>
      </div>

      {/* Add Product Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Add Product
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="number"
          name="inventory"
          placeholder="Inventory"
          value={formData.inventory}
          onChange={handleChange}
          required
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <h2 className="text-xl font-semibold mb-3 text-gray-700">Product List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4"
          >
            <h3 className="font-bold text-lg text-gray-800">{p.name}</h3>
            <p className="text-gray-600">₹{p.price}</p>
            <p className="text-gray-600">Category: {p.category}</p>
            <p
              className={`font-medium ${
                p.inventory > 5 ? "text-green-600" : "text-red-500"
              }`}
            >
              Stock: {p.inventory}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
