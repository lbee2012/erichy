const TOKEN_PATTERN = /\b([a-zA-Z][\w]*)\b/g;

export function applyThemeTokens(value, palette) {
  if (Array.isArray(value)) {
    return value.map((item) => applyThemeTokens(item, palette));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [key, applyThemeTokens(val, palette)])
    );
  }

  if (typeof value === 'string') {
    if (palette[value]) {
      return palette[value];
    }
    return value.replace(TOKEN_PATTERN, (match) => (palette[match] ? palette[match] : match));
  }

  return value;
}
