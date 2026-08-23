/**
 * Open the fixed Letter-size printable worksheet (PDF).
 */
import React from 'react';
import styles from './PrintableDownload.module.css';

type Props = {
  href: string;
  label?: string;
};

export default function PrintableDownload({
  href,
  label = 'Open & print',
}: Props): React.ReactElement {
  return (
    <div className={styles.bar} role="group" aria-label="Worksheet actions">
      <a
        className={styles.primary}
        href={href}
        target="_blank"
        rel="noopener noreferrer">
        {label}
      </a>
      <p className={styles.hint}>
        Opens a US Letter worksheet. Use Print in the toolbar or your browser for a hard copy.
      </p>
    </div>
  );
}
