export const html = strings => strings;
export const css = strings => strings;

export function lerp (p1, p2, t) {
  return p1 + (p2 - p1) * t;
}