export function formatMoney(val: number | string | null) {
  if (val == null) return "0.00";
  const n = typeof val === "string" ? Number(val) : val;
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export const fmtCurrency = (v?: string) => {
  if (!v) return "0";
  try {
    const n = Number(v);
    return n.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });
  } catch {
    return v;
  }
};

export const fmtDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString();
};
