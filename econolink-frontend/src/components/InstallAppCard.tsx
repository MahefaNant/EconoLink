"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function InstallAppCard() {
  const router = useRouter();
  const t = useTranslations("install");

  const handleRedirect = () => {
    router.push("/install");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex flex-col items-center justify-between gap-4 text-center"
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {t("text-button")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{t("desc3")}</p>
      </div>

      <motion.button
        onClick={handleRedirect}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-2 btn-econolink font-medium px-5 py-3 rounded-xl transition-all shadow-sm w-full sm:w-auto"
      >
        <Download className="w-5 h-5" />
        {t("head")}
      </motion.button>
    </motion.div>
  );
}
