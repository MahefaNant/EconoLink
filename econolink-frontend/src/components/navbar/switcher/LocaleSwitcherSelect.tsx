/* eslint-disable indent */
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { FR, US } from "country-flag-icons/react/3x2"; // 🇫🇷 🇬🇧
import { ReactNode } from "react";
import { Locale } from "next-intl";
import { locales } from "@/i18n/config";
import { useTransition } from "react";
import { setUserLocale } from "@/app/services/locale";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const [isPending, startTransition] = useTransition();

  function onSelectChange(nextLocale: string) {
    const locale = nextLocale as Locale;
    startTransition(() => {
      setUserLocale(locale as "en" | "fr");
    });
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
        className={clsx(
          "w-[100px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0",
          isPending && "pointer-events-none opacity-60"
        )}
        aria-label={label}
      >
        <div className="flex items-center gap-2">
          {renderFlag(defaultValue)}
          <span className="text-sm capitalize">{defaultValue}</span>
        </div>
      </SelectTrigger>

      <SelectContent>
        {locales.map((locale) => (
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
