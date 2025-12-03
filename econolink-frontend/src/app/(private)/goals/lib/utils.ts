export function getProgressColor(progress: number): string {
  if (progress >= 100) return "bg-emerald-500";
  if (progress >= 75) return "bg-green-500";
  if (progress >= 50) return "bg-yellow-500";
  if (progress >= 25) return "bg-amber-500";
  return "bg-red-500";
}
