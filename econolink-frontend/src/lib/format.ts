export function formatMoney(val: number | string | null) {
  if (val == null) return "0.00";
  const n = typeof val === "string" ? Number(val) : val;
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
