export function fmtNaira(n) {
  return `₦${Number(n || 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}
