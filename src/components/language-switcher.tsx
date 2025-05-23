import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const changeLanguage = (newLocale: "vi" | "en") => {
    setUserLocale(newLocale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex w-fit hover:bg-transparent"
        >
          <Image
            src={locale === "vi" ? "/vietnam.png" : "/en.png"}
            alt={locale === "vi" ? "vietnam" : "eng"}
            className="object-cover"
            width={36}
            height={36}
          />
          <p className="hidden md:block">{locale === "vi" ? "VI" : "EN"}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className="flex items-center gap-2"
        >
          <Image
            src="/en.png"
            alt="English"
            className="object-cover"
            width={24}
            height={24}
          />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("vi")}
          className="flex items-center gap-2"
        >
          <Image
            src="/vietnam.png"
            alt="Vietnamese"
            className="object-cover"
            width={24}
            height={24}
          />
          <span>Tiếng Việt</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
