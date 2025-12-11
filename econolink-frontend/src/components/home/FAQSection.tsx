"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const faqs = [
  {
    question: "faq.items.0.question",
    answer: "faq.items.0.answer",
  },
  {
    question: "faq.items.1.question",
    answer: "faq.items.1.answer",
  },
  {
    question: "faq.items.2.question",
    answer: "faq.items.2.answer",
  },
  {
    question: "faq.items.3.question",
    answer: "faq.items.3.answer",
  },
  {
    question: "faq.items.4.question",
    answer: "faq.items.4.answer",
  },
  {
    question: "faq.items.5.question",
    answer: "faq.items.5.answer",
  },
];

export default function FAQSection() {
  const t = useTranslations("HomePage");
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-2xl px-6 data-[state=open]:bg-white dark:data-[state=open]:bg-gray-800"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold text-lg">
                      {t(faq.question)}
                    </span>
                    {openItems.includes(`item-${index}`) ? (
                      <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(faq.answer)}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-4">{t("faq.help.title")}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t("faq.help.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-primary text-white dark:text-black rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t("faq.help.contact")}
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {t("faq.help.docs")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
