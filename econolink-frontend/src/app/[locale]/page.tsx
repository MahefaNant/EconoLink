import { NavBar } from "@/components/navbar/NavBar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <NavBar />
      <div className="container p-4">
        <h1>{t("title")}</h1>
        <p className="text-5xl">{t("about")}</p>
      </div>
    </div>
  );
}
