import InstallAppCard from "@/components/InstallAppCard";
import { NavBar } from "@/components/navbar/NavBar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4 flex flex-col items-center gap-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("about")}
          </p>
        </div>

        {/* Section pour rediriger vers l'installation */}
        <InstallAppCard />
      </div>
    </div>
  );
}
