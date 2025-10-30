import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My eCommerce Store",
  description: "A modern shopping experience built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-950 to-black text-white min-h-screen flex flex-col`}
      >
        {/* Navbar */}
        <nav className="bg-gray-900 border-b border-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-purple-400">
              🛍️ MyStore
            </Link>

            <div className="flex gap-6 text-gray-300">
              <Link
                href="/"
                className="hover:text-purple-400 transition duration-200"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="hover:text-purple-400 transition duration-200"
              >
                Products
              </Link>
              <Link
                href="/dashboard"
                className="hover:text-purple-400 transition duration-200"
              >
                Dashboard
              </Link>
              <Link
                href="/login"
                className="hover:text-purple-400 transition duration-200"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="hover:text-purple-400 transition duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-6 text-center mt-10">
          <p>
            © {new Date().getFullYear()} MyStore. Built with ❤️ using{" "}
            <span className="text-purple-400">Next.js</span> &{" "}
            <span className="text-purple-400">Tailwind CSS</span>.
          </p>
        </footer>
      </body>
    </html>
  );
}
