interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export function PlaceholderImage({
  width = 300,
  height = 300,
  text = "Product Image",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-200 ${className}`}
      style={{ width, height }}
    >
      <span className="text-gray-500 text-sm">{text}</span>
    </div>
  );
}
