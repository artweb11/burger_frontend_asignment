import { useState } from "react";

type ImageLoaderProps = {
  src?: string;
  alt?: string;
  className?: string;
};

export default function ImageLoader({
  src,
  alt,
  className = "",
}: ImageLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Spinner */}
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-500 border-t-black" />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-sm text-gray-500">
          Failed to load
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
}
