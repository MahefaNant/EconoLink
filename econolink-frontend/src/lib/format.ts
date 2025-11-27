export const currenciesList = ["AR", "EUR", "USD", "GBP", "JPY"];

export function formatMoney(val: number | string | null) {
  if (val == null) return "0.00";
  const n = typeof val === "string" ? Number(val) : val;
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export const fmtCurrency = (
  v?: string,
  currency: string = "AR",
  display?: string,
  compact: boolean = false
) => {
  const n = typeof v === "number" ? v : Number(v);
  if (isNaN(n)) return "0";

  const upper = currency.toUpperCase();
  const realCurrency = upper === "AR" ? "MGA" : upper;

  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: realCurrency,
    maximumFractionDigits: 2,
    ...(compact && {
      notation: "compact",
      compactDisplay: "short",
    }),
  });

  const parts = formatter.formatToParts(n);

  return parts
    .map((p) => {
      if (p.type === "currency") {
        if (display) return display;
        if (upper === "AR") return "Ar";
      }
      return p.value;
    })
    .join("");
};

// (ex: 1500 → 1.5K, 2,000,000 → 2M)
export const fmtNumberCompact = (v?: string | number) => {
  const n = typeof v === "number" ? v : Number(v);
  if (isNaN(n)) return "0";
  return n.toLocaleString(undefined, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  });
};

export const fmtDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString();
};
