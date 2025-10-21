import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function GoogleButton() {
  const t = useTranslations("Auth.common");

  return (
    <div className="mt-4">
      <Button
        variant="outline"
        className="w-full border-gray-300 hover:bg-gray-100 flex items-center justify-center"
      >
        <Image
          src="/images/google-logo.png"
          alt="EconoLink Logo"
          width={20}
          height={20}
          className="rounded-md"
        />
        {t("google-continue")}
      </Button>
    </div>
  );
}
