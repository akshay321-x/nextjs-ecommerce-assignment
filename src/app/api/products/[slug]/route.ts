import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params; // ✅ Await the Promise

  await connectDB();
  const product = await Product.findOne({ slug });

  return NextResponse.json(product);
}
