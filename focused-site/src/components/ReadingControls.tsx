import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import {
  applyFontScale,
  applyHighContrast,
  FONT_SCALES,
  getStoredFontScale,
  getStoredHighContrast,
  type FontScaleId,
} from '@site/src/lib/readingPrefs';
import styles from './ReadingControls.module.css';

export default function ReadingControls(): React.ReactElement {
  const location = useLocation();
  const [active, setActive] = useState<FontScaleId>(() => getStoredFontScale());
  const [highContrast, setHighContrast] = useState(() => getStoredHighContrast());

  useEffect(() => {
    const storedScale = getStoredFontScale();
    const storedContrast = getStoredHighContrast();
    setActive(storedScale);
    setHighContrast(storedContrast);
    applyFontScale(storedScale);
    applyHighContrast(storedContrast);
  }, [location.pathname]);

  function onSelect(id: FontScaleId) {
    setActive(id);
    applyFontScale(id);
  }

  function onToggleContrast() {
    const next = !getStoredHighContrast();
    setHighContrast(next);
    applyHighContrast(next);
  }

  return (
    <div className={styles.controls} aria-label="Reading options">
      <div className={styles.group} role="group" aria-label="Text size">
        {FONT_SCALES.map((option) => (
          <button
            key={option.id}
            type="button"
            className={clsx(styles.button, active === option.id && styles.active)}
            aria-pressed={active === option.id}
            title={option.title}
            onClick={() => onSelect(option.id)}>
            {option.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={clsx(styles.contrast, highContrast && styles.active)}
        aria-pressed={highContrast}
        title={highContrast ? 'Turn off high contrast' : 'Turn on high contrast'}
        onClick={onToggleContrast}>
        HC
      </button>
    </div>
  );
}
