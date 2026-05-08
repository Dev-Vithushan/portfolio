export interface WritingPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  tags: string[];
}

export const writingPosts: WritingPost[] = [
  {
    slug: 'pyroscope-lessons',
    title: 'What I Learned Rolling Out Pyroscope to 20+ Services',
    description: 'Kong Ingress auth, Grafana Alloy pipelines, scaling profile data, and the gotchas nobody warns you about.',
    date: '2025-05-10',
    readingTime: 8,
    tags: ['Observability', 'Pyroscope', 'Kubernetes'],
  },
  {
    slug: 'observability-stack',
    title: 'Building a Modern Observability Stack with Grafana',
    description: 'A practical guide to the LGTM stack - Loki, Grafana, Tempo, Mimir - and when to use each component.',
    date: '2025-04-01',
    readingTime: 10,
    tags: ['Grafana', 'Observability', 'LGTM'],
  },
  {
    slug: 'ai-flame-graphs',
    title: 'Using LLMs to Analyze Flame Graphs Faster',
    description: 'How we integrated the Grafana LLM plugin with Pyroscope to turn cryptic stack traces into plain-English root causes.',
    date: '2025-06-15',
    readingTime: 7,
    tags: ['AI', 'Observability', 'Grafana'],
  },
  {
    slug: 'gitops-release-gates',
    title: 'Designing GitOps Release Gates That Engineers Trust',
    description: 'Prometheus health checks, FluxCD rollback behavior, and how to keep release automation understandable during incidents.',
    date: '2025-07-22',
    readingTime: 9,
    tags: ['GitOps', 'FluxCD', 'SRE'],
  },
  {
    slug: 'backstage-adoption',
    title: 'Backstage Adoption Is a Product Problem',
    description: 'What changed after treating an internal developer platform like a product instead of a pile of plugins.',
    date: '2025-09-04',
    readingTime: 6,
    tags: ['Backstage', 'Platform', 'DX'],
  },
];
