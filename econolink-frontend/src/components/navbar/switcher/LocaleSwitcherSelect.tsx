/* eslint-disable indent */
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { FR, US } from "country-flag-icons/react/3x2"; // 🇫🇷 🇬🇧
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error: le typage est sûr ici car les params sont valides pour la route
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  const renderFlag = (locale: string) => {
    switch (locale) {
      case "fr":
        return <FR className="w-5 h-auto rounded-sm" title="Français" />;
      case "en":
        return <US className="w-5 h-auto rounded-sm" title="English" />;
      default:
        return null;
    }
  };

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className="w-[100px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0"
        aria-label={label}
      >
        <div className="flex items-center gap-2">
          {renderFlag(defaultValue)}
          <span className="text-sm capitalize">{defaultValue}</span>
        </div>
      </SelectTrigger>

      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            <div className="flex items-center gap-2">
              {renderFlag(locale)}
              <span className="capitalize">{locale}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
