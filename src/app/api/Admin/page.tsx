"use client";
import { useState, useEffect } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", slug: "", price: "", description: "" });

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    setProducts(await res.json());
  };

  const addProduct = async () => {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", slug: "", price: "", description: "" });
    fetchProducts();
  };

  useEffect(() => { fetchProducts(); }, []);

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl mb-6">Admin Panel</h1>
      <div className="mb-6">
        <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
        <input placeholder="Slug" onChange={e=>setForm({...form,slug:e.target.value})} />
        <input placeholder="Price" onChange={e=>setForm({...form,price:e.target.value})} />
        <input placeholder="Description" onChange={e=>setForm({...form,description:e.target.value})} />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <ul>
        {products.map((p:any)=> <li key={p._id}>{p.name} - ₹{p.price}</li>)}
      </ul>
    </div>
  );
}
