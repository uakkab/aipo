import React, {useLayoutEffect} from 'react';
import {useLocation} from '@docusaurus/router';
import {
  applyFontScale,
  applyHighContrast,
  getStoredFontScale,
  getStoredHighContrast,
} from '@site/src/lib/readingPrefs';

export default function Root({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const location = useLocation();

  useLayoutEffect(() => {
    applyFontScale(getStoredFontScale());
    applyHighContrast(getStoredHighContrast());
  }, [location.pathname]);

  return <>{children}</>;
}
