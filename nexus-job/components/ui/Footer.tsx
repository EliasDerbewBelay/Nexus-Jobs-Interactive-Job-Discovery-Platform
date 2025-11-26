export default function Footer() {
  return (
    <footer className="border-t bg-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} JobNexus. All rights reserved.
      </div>
    </footer>
  );
}
