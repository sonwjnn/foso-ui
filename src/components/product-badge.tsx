import Image from "next/image";

export function ProductBadge() {
  return (
    <div
      className="text-[#7A0916]  text-sm font-semibold px-2 py-1 w-fit gap-x-1 rounded-full h-[25px] flex items-center"
      style={{
        background: `linear-gradient(135deg, #FFD666 0%, #FFAB00 100%)`,
      }}
    >
      <Image src="/fire.png" alt="fire" width={16} height={16} />
      Giá cực sốc
    </div>
  );
}
