export const FONT_SIZE_KEY = 'aipo-font-scale';
export const HIGH_CONTRAST_KEY = 'aipo-high-contrast';
export const HIGH_CONTRAST_CLASS = 'aipo-high-contrast';

export const FONT_SCALES = [
  {id: 'sm', label: 'A−', scale: '87.5%', title: 'Smaller text'},
  {id: 'md', label: 'A', scale: '100%', title: 'Default text size'},
  {id: 'lg', label: 'A+', scale: '112.5%', title: 'Larger text'},
  {id: 'xl', label: 'A++', scale: '125%', title: 'Largest text'},
] as const;

export type FontScaleId = (typeof FONT_SCALES)[number]['id'];

export function getStoredFontScale(): FontScaleId {
  if (typeof window === 'undefined') {
    return 'md';
  }
  const stored = window.localStorage.getItem(FONT_SIZE_KEY);
  const match = FONT_SCALES.find((item) => item.id === stored);
  return match?.id ?? 'md';
}

export function applyFontScale(id: FontScaleId): void {
  if (typeof document === 'undefined') {
    return;
  }
  const match = FONT_SCALES.find((item) => item.id === id) ?? FONT_SCALES[1];
  document.documentElement.style.fontSize = match.scale;
  window.localStorage.setItem(FONT_SIZE_KEY, match.id);
}

export function getStoredHighContrast(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.localStorage.getItem(HIGH_CONTRAST_KEY) === '1';
}

export function applyHighContrast(enabled: boolean): void {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.classList.toggle(HIGH_CONTRAST_CLASS, enabled);
  document.body?.classList.toggle(HIGH_CONTRAST_CLASS, enabled);
  window.localStorage.setItem(HIGH_CONTRAST_KEY, enabled ? '1' : '0');
}
