import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx(styles.hero)}>
      <div className={clsx('container', styles.heroInner)}>
        <p className={styles.brand}>AI+OP</p>
        <Heading as="h1" className={styles.title}>
          Organization Playbook
        </Heading>
        <p className={styles.subtitle}>
          Read the playbook for understanding, then follow the Implementation Guide step by step.
        </p>
        <div className={styles.actions}>
          <Link className={clsx('button button--lg', styles.primary)} to="/docs/intro">
            Start with Overview
          </Link>
          <Link
            className={clsx('button button--lg button--outline', styles.secondary)}
            to="/docs/implementation/guide">
            Implementation Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="A process-first operating model for adopting AI safely and effectively.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={clsx('container', styles.paths)}>
          <div className={styles.path}>
            <h2>1. Foundation</h2>
            <p>Confirm the operating baseline before scaling AI.</p>
            <Link to="/docs/foundation/prerequisites">Pre-Flight Prerequisites</Link>
          </div>
          <div className={styles.path}>
            <h2>2. Playbook</h2>
            <p>Understand the framework, maturity levels, and approaches—read without detours.</p>
            <Link to="/docs/playbook/framework">Open the Framework</Link>
          </div>
          <div className={styles.path}>
            <h2>3. Implementation</h2>
            <p>After the reading pass, follow one step-by-step delivery guide.</p>
            <Link to="/docs/implementation/guide">Implementation Guide</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
