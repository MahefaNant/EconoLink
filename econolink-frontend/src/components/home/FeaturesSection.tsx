"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Target,
  Bell,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Lock,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

const features = [
  {
    icon: Wallet,
    titleKey: "features.tracking.title",
    descriptionKey: "features.tracking.description",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: Target,
    titleKey: "features.goals.title",
    descriptionKey: "features.goals.description",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    icon: Bell,
    titleKey: "features.reminders.title",
    descriptionKey: "features.reminders.description",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: BarChart3,
    titleKey: "features.analytics.title",
    descriptionKey: "features.analytics.description",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    icon: Shield,
    titleKey: "features.security.title",
    descriptionKey: "features.security.description",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/30",
  },
  {
    icon: Smartphone,
    titleKey: "features.mobile.title",
    descriptionKey: "features.mobile.description",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
  },
];

export default function FeaturesSection() {
  const t = useTranslations("HomePage");

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("features.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                <CardHeader>
                  <div
                    className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">
                    {t(feature.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {t(feature.descriptionKey)}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-4 rounded-2xl shadow-md">
            <Lock className="h-5 w-5 text-green-600" />
            <span className="font-medium">{t("features.securityBadge")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
