import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json({ message: "User already exists" }, { status: 400 });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}
