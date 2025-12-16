"use client";

import InstallButton from "@/components/InstallButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function InstallPage() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 p-6">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 mb-10"
      >
        <Image
          src="/icons/econolink-logo.png"
          alt="EconoLink Logo"
          width={100}
          height={100}
          className="rounded-2xl shadow-md"
        />
        <h1 className="text-4xl font-bold">EconoLink</h1>
        <p className="text-lg text-center max-w-md text-gray-600 dark:text-gray-300">
          {t("install.description")}
        </p>
      </motion.div>

      {/* Installation card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 max-w-md w-full flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold mb-3">{t("install.head")}</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          {t("install.desc2")}
        </p>

        <InstallButton />

        <button
          onClick={() => router.push("/")}
          className="text-emerald-600 underline hover:text-emerald-700 cursor-pointer mt-4"
        >
          {t("Auth.common.back-home")}
        </button>
      </motion.div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} EconoLink. {t("install.rights")}
      </footer>
    </main>
  );
}
