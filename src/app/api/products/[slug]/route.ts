import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params; // 🔥 Must await the promise here

  await connectDB();
  const product = await Product.findOne({ slug });

  return NextResponse.json(product);
}
