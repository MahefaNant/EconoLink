"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import MyAccountBtn from "./MyAccountBtn";
import InstallAppCard from "../InstallAppCard";

export default function HeroSection() {
  const router = useRouter();
  const t = useTranslations("HomePage");

  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <MyAccountBtn />
              <br />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900 dark:text-white">
                  {t("hero.title.line1")}
                </span>
                <span className="block text-primary">
                  {t("hero.title.line2")}
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                {t("hero.description")}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 max-w-md"
            >
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t("hero.stats.accuracy")}
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t("hero.stats.availability")}
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t("hero.stats.users")}
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="gap-2 text-lg px-8 py-6"
                onClick={() => router.push("/register")}
              >
                {t("hero.cta.primary")}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => router.push("/login")}
              >
                {t("hero.cta.secondary")}
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-8"
            >
              <Shield className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {t("hero.trust")}
              </span>
            </motion.div>
          </div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="mb-8">
              <InstallAppCard />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Mockup device frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl">
                {/* Mock dashboard */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10" />
                      <div className="h-8 w-8 rounded-full bg-secondary/10" />
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                      <div className="h-4 w-16 bg-primary/20 rounded mb-2" />
                      <div className="h-6 w-24 bg-primary/30 rounded" />
                    </div>
                    <div className="p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
                      <div className="h-4 w-16 bg-secondary/20 rounded mb-2" />
                      <div className="h-6 w-24 bg-secondary/30 rounded" />
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4">
                    <div className="flex items-end h-full gap-1">
                      {[30, 60, 45, 80, 65, 90, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Recent transactions */}
                  <div className="space-y-3">
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
