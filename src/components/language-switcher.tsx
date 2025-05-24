"use client";

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
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale() as Locale;

  const changeLanguage = (newLocale: Locale) => {
    if (locale === newLocale) return;

    setUserLocale(newLocale);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex items-center w-fit hover:bg-transparent focus-visible:border-0 focus-visible:ring-0"
        >
          <Image
            src={locale === "vi" ? "/vietnam.png" : "/en.png"}
            alt={locale === "vi" ? "vietnam" : "eng"}
            className="object-cover"
            width={36}
            height={36}
          />
          <p className="hidden md:block">{locale === "vi" ? "VI" : "EN"}</p>
          <ChevronDown
            className={cn(
              "size-4 transition-transform mb-1",
              open && "rotate-180"
            )}
          />
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
