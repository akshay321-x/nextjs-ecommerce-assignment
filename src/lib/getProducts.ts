// src/lib/getProducts.ts

export async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store", // ensures fresh data every time
    });

    if (!res.ok) {
      console.error("Failed to fetch products:", res.statusText);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
