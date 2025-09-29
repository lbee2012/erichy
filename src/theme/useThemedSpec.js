import { useMemo } from 'react';
import uiSpec from '../ui-spec';
import { applyThemeTokens } from './applyThemeTokens';
import { useTheme } from './ThemeContext';

export function useThemedSpec(sectionKey) {
  const { palette } = useTheme();

  return useMemo(() => {
    const section = sectionKey ? uiSpec[sectionKey] : uiSpec;
    return applyThemeTokens(section, palette);
  }, [palette, sectionKey]);
}

export function useThemedValue(value) {
  const { palette } = useTheme();

  return useMemo(() => applyThemeTokens(value, palette), [palette, value]);
}
