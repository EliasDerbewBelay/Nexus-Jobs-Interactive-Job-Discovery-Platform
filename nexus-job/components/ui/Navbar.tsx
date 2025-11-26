import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JobNexus
        </Link>

        <ul className="flex items-center gap-6 font-medium">
          <li>
            <Link href="/jobs" className="hover:text-blue-600">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
