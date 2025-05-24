"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const MobileNav = () => {
  const t = useTranslations("header");

  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <SheetTitle className="text-[#013065] font-semibold text-2xl mb-12 p-4">
          Navigation
        </SheetTitle>
        <div className="flex flex-col gap-y-4 h-full">
          <div className="text-2xl p-4 text-center  hover:bg-accent">
            {t("about_us")}
          </div>
          <div className="text-2xl p-4 text-center hover:bg-accent">
            {t("blog")}
          </div>
          <div className="text-2xl p-4 text-center hover:bg-accent">
            {t("catalog")}
          </div>
          <div className="text-2xl p-4 text-center hover:bg-accent">
            {t("contact")}
          </div>
        </div>
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
