export const accountTypesData = [
  { value: "CASH", icon: "💵" },
  { value: "MOBILE_MONEY", icon: "📱" },
  { value: "BANK_ACCOUNT", icon: "🏦" },
  { value: "CREDIT_CARD", icon: "💳" },
  { value: "SAVINGS", icon: "💰" },
  { value: "INVESTMENT", icon: "📊" },
  { value: "OTHER", icon: "⭐" },
] as const;

export type AccountTypeDataValue = (typeof accountTypesData)[number]["value"];

export const getIconByAccountType = (type: string): string => {
  return accountTypesData.find((item) => item.value === type)?.icon || "💰";
};
