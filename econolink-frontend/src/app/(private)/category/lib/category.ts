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
