import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  await connectDB();
  const product = await Product.findOne({ slug: params.slug });
  return NextResponse.json(product);
}
