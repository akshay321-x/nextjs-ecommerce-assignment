import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    slug: { type: String, unique: true },
    description: String,
    price: Number,
    category: String,
    inventory: Number,
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Product = models.Product || mongoose.model("Product", productSchema);
export default Product;
