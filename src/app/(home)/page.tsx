import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f4f6f8] text-center items-center justify-center">
      This is Homepage, go to{" "}
      <Link href="/products" className="underline mx-2 text-[#025FCA]">
        Products
      </Link>{" "}
      to see more
    </div>
  );
}
