"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const benefits = [
    "cta.benefits.1",
    "cta.benefits.2",
    "cta.benefits.3",
    "cta.benefits.4",
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-48 -translate-x-48 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="font-medium">{t("cta.badge")}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-gray-900 dark:text-white">
              {t("cta.title.line1")}
            </span>
            <span className="block text-primary">{t("cta.title.line2")}</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            {t("cta.description")}
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t(benefit)}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 text-lg px-8 py-6 shadow-lg"
              onClick={() => router.push("/register")}
            >
              {t("cta.primary")}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => router.push("/login")}
            >
              {t("cta.secondary")}
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            {t("cta.trust")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
