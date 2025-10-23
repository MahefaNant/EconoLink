"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WifiOff, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function OfflinePage() {
  const router = useRouter();
  const t = useTranslations("offline");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-6 rounded-full bg-gray-200 dark:bg-gray-800 shadow-inner"
        >
          <WifiOff className="w-12 h-12 text-gray-700 dark:text-gray-300" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
          {t("text1")}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          {t("text2")}
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4"
        >
          <Button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-5 py-2.5 text-base font-medium rounded-xl shadow-md"
          >
            <Home className="w-5 h-5" />
            {t("home")}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
