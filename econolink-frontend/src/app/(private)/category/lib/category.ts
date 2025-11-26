import { Formats } from "next-intl";

export const categoryIcons = [
  "🍔", // Food
  "🚗", // Transport
  "🏠", // Housing
  "🎉", // Entertainment
  "✈️", // Travel
  "📱", // Technology
  "💡", // Utilities
  "🛠️", // Services
  "🎁", // Gifts
  "🏥", // Health
  "👕", // Clothing
  "📚", // Education
  "💎", // Luxury
  "🐶", // Pets
  "🏛️", // Government
  "💼", // Business
  "💰", // Income
  "🔁", // Transfer
] as const;

export type CategoryIcon = (typeof categoryIcons)[number];

export function getTranslatedCategorie(
  t: (
    key: string,
    values?: Record<string, string | number | Date> | undefined,
    formats?: Formats | undefined
  ) => string,
  name: string,
  desc: string | null
): Record<"name" | "desc", string | null> {
  const mapping = categoryDataKeyMap[name];
  const labelFinal = mapping ? t(mapping.label) : name;
  const descriptionFinal =
    desc !== null ? (mapping ? t(mapping.description) : desc) : null;
  return {
    name: labelFinal,
    desc: descriptionFinal,
  };
}

export const categoryDataKeyMap: Record<
  string,
  { label: string; description: string }
> = {
  // EXPENSE
  "Food & Groceries": {
    label: "Category.translation.expense.food",
    description: "Category.translation.expense.food_desc",
  },
  Transportation: {
    label: "Category.translation.expense.transportation",
    description: "Category.translation.expense.transportation_desc",
  },
  Housing: {
    label: "Category.translation.expense.housing",
    description: "Category.translation.expense.housing_desc",
  },
  Utilities: {
    label: "Category.translation.expense.utilities",
    description: "Category.translation.expense.utilities_desc",
  },
  Entertainment: {
    label: "Category.translation.expense.entertainment",
    description: "Category.translation.expense.entertainment_desc",
  },
  Health: {
    label: "Category.translation.expense.health",
    description: "Category.translation.expense.health_desc",
  },
  Education: {
    label: "Category.translation.expense.education",
    description: "Category.translation.expense.education_desc",
  },
  Clothing: {
    label: "Category.translation.expense.clothing",
    description: "Category.translation.expense.clothing_desc",
  },
  Travel: {
    label: "Category.translation.expense.travel",
    description: "Category.translation.expense.travel_desc",
  },
  Subscriptions: {
    label: "Category.translation.expense.subscriptions",
    description: "Category.translation.expense.subscriptions_desc",
  },
  "Personal Care": {
    label: "Category.translation.expense.personal_care",
    description: "Category.translation.expense.personal_care_desc",
  },
  "Gifts & Donations": {
    label: "Category.translation.expense.gifts",
    description: "Category.translation.expense.gifts_desc",
  },
  Taxes: {
    label: "Category.translation.expense.taxes",
    description: "Category.translation.expense.taxes_desc",
  },
  "Other Expenses": {
    label: "Category.translation.expense.other",
    description: "Category.translation.expense.other_desc",
  },

  // INCOME
  Salary: {
    label: "Category.translation.income.salary",
    description: "Category.translation.income.salary_desc",
  },
  Bonus: {
    label: "Category.translation.income.bonus",
    description: "Category.translation.income.bonus_desc",
  },
  Freelance: {
    label: "Category.translation.income.freelance",
    description: "Category.translation.income.freelance_desc",
  },
  Investments: {
    label: "Category.translation.income.investments",
    description: "Category.translation.income.investments_desc",
  },
  "Rental Income": {
    label: "Category.translation.income.rental",
    description: "Category.translation.income.rental_desc",
  },
  Refunds: {
    label: "Category.translation.income.refunds",
    description: "Category.translation.income.refunds_desc",
  },
  Gift: {
    label: "Category.translation.income.gift",
    description: "Category.translation.income.gift_desc",
  },
  "Other Income": {
    label: "Category.translation.income.other",
    description: "Category.translation.income.other_desc",
  },

  // TRANSFERS
  "Bank Transfer": {
    label: "Category.translation.transfer.bank",
    description: "Category.translation.transfer.bank_desc",
  },
  Savings: {
    label: "Category.translation.transfer.savings",
    description: "Category.translation.transfer.savings_desc",
  },
  "Credit Card Payment": {
    label: "Category.translation.transfer.credit_card",
    description: "Category.translation.transfer.credit_card_desc",
  },
  "Loan Payment": {
    label: "Category.translation.transfer.loan",
    description: "Category.translation.transfer.loan_desc",
  },
  "Investment Transfer": {
    label: "Category.translation.transfer.investment",
    description: "Category.translation.transfer.investment_desc",
  },
};
