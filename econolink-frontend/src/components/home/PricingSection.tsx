"use client";

import { motion } from "framer-motion";
import { Check, X, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const plans = [
  {
    name: "free",
    price: "0",
    period: "/month",
    features: [
      "pricing.free.features.1",
      "pricing.free.features.2",
      "pricing.free.features.3",
      "pricing.free.features.4",
    ],
    excluded: ["pricing.free.excluded.1", "pricing.free.excluded.2"],
    cta: "pricing.free.cta",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "pro",
    price: "9.99",
    period: "/month",
    features: [
      "pricing.pro.features.1",
      "pricing.pro.features.2",
      "pricing.pro.features.3",
      "pricing.pro.features.4",
      "pricing.pro.features.5",
      "pricing.pro.features.6",
    ],
    excluded: [],
    cta: "pricing.pro.cta",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "business",
    price: "29.99",
    period: "/month",
    features: [
      "pricing.business.features.1",
      "pricing.business.features.2",
      "pricing.business.features.3",
      "pricing.business.features.4",
      "pricing.business.features.5",
      "pricing.business.features.6",
      "pricing.business.features.7",
    ],
    excluded: [],
    cta: "pricing.business.cta",
    variant: "outline" as const,
    popular: false,
  },
];

export default function PricingSection() {
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
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="gap-1 bg-gradient-to-r from-primary to-secondary">
                    <Star className="h-3 w-3" />
                    {t("pricing.mostPopular")}
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full border-2 ${
                  plan.popular ? "border-primary shadow-2xl" : "shadow-lg"
                }`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl capitalize">
                    {t(`pricing.${plan.name}.name`)}
                  </CardTitle>
                  <div className="my-4">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription>
                    {t(`pricing.${plan.name}.description`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Included features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          {t("pricing.free.features.1")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Excluded features */}
                  {plan.excluded.length > 0 && (
                    <div className="space-y-3 pt-4 border-t">
                      {plan.excluded.map((excluded, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 opacity-50"
                        >
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">
                            {t("pricing.free.excluded.1")}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <Button
                    variant={plan.variant}
                    className="w-full"
                    size="lg"
                    onClick={() => router.push("/register")}
                  >
                    {t(plan.cta)}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400">
            {t("pricing.note")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
