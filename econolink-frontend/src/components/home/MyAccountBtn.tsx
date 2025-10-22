import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { User } from "lucide-react";

export default function MyAccountBtn() {
  const isReady = useDocumentReadyState();

  const router = useRouter();

  const t = useTranslations("HomePage");

  return (
    <>
      {isReady && (
        <Button
          size="lg"
          variant="default"
          onClick={() => router.push("/dashboard")}
        >
          <User className="w-5 h-5" />
          {t("NavBar.my-account-long")}
        </Button>
      )}
    </>
  );
}
