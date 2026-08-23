import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  playbookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Foundation',
      items: [
        'foundation/prerequisites',
      ],
    },
    {
      type: 'category',
      label: 'Playbook',
      items: [
        'playbook/framework',
        'playbook/maturity-model',
        'playbook/approaches',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'implementation/guide',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/foundation-check',
        'reference/readiness-assessment',
        'reference/domain-01',
        'reference/resources',
      ],
    },
  ],
};

export default sidebars;
