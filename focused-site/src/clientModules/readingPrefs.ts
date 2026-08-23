import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {
  applyFontScale,
  applyHighContrast,
  getStoredFontScale,
  getStoredHighContrast,
} from '../lib/readingPrefs';

function restoreReadingPrefs(): void {
  applyFontScale(getStoredFontScale());
  applyHighContrast(getStoredHighContrast());
}

if (ExecutionEnvironment.canUseDOM) {
  restoreReadingPrefs();
}

export function onRouteDidUpdate(): void {
  restoreReadingPrefs();
}
