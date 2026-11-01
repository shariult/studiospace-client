import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl">404</h2>
      <p className="text-gray-500 mb-6">
        Page Not Found. Could not find requested resource.
      </p>

      <Link
        href="/"
        className="btn bg-red-500 hover:bg-red-700 text-gray-50 rounded-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
export default NotFoundPage;
