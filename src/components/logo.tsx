import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center w-[150px] md:w-[250px] ${className}`}
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover w-full h-auto"
      />
    </Link>
  );
}
