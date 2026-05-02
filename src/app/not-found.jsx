import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        
        {/* Code */}
        <h1 className="text-6xl font-bold text-gray-800">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
          The page you are looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Divider */}
        <div className="mt-6 border-t"></div>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href={'/'} >
                  <button className="px-5 py-2.5 border text-black border-gray-300 rounded-md text-sm hover:bg-gray-100 transition" >Go Back</button>
          </Link>
        </div>

      </div>
    </div>
  );
}