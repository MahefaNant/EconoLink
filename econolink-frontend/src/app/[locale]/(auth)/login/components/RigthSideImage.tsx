import { useTranslations } from "next-intl";
import Image from "next/image";

export default function RightSideImage() {
  const t = useTranslations("Auth.RightSide");
  return (
    <div className="hidden md:flex flex-1 items-center justify-center relative">
      <Image
        src="/images/back-log.jpg"
        alt="Finance illustration"
        fill
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-sky-800/20 flex items-center justify-center">
        <div className="text-center text-white max-w-sm">
          <h2 className="text-3xl font-bold mb-2 text-econolink-dark">
            {t("title")}
          </h2>
          <p className="text-sm text-sky-600 dark:text-white">
            {t("sub-title")}
          </p>
        </div>
      </div>
    </div>
  );
}
