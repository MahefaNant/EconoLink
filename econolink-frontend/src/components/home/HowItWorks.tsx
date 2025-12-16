"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Settings,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const steps = [
  {
    icon: UserPlus,
    titleKey: "howItWorks.steps.register.title",
    descriptionKey: "howItWorks.steps.register.description",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: Settings,
    titleKey: "howItWorks.steps.setup.title",
    descriptionKey: "howItWorks.steps.setup.description",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    icon: TrendingUp,
    titleKey: "howItWorks.steps.track.title",
    descriptionKey: "howItWorks.steps.track.description",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: CheckCircle,
    titleKey: "howItWorks.steps.achieve.title",
    descriptionKey: "howItWorks.steps.achieve.description",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
];

export default function HowItWorks() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 text-center relative z-10">
                  <CardContent className="pt-6">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-2xl ${step.bgColor} mb-6`}
                    >
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t(step.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="gap-2 text-lg px-8 py-6"
            onClick={() => router.push("/register")}
          >
            {t("howItWorks.cta")}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
