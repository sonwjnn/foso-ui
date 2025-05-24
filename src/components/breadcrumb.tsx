"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbHome({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem
              className={cn(
                pathname === item.href
                  ? "font-semibold text-[#024897]"
                  : "text-[#919EAB] font-normal"
              )}
            >
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
