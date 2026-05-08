import type { Experience } from '../types/index';

export const experiences: Experience[] = [
  {
    company: 'IGT1 Lanka (Sitecore)',
    role: 'DevOps Engineer',
    period: 'Feb 2025 — Feb 2026',
    location: 'Sri Lanka (Remote-first)',
    summary: "Led observability and platform engineering for Sitecore's cloud infrastructure, rolling out the full Grafana LGTM stack across 20+ production services.",
    achievements: [
      'Architected and deployed Pyroscope continuous profiling across 20+ microservices, reducing average debug time from 45min to ~12min',
      'Built AI-enhanced flame graph analysis using Grafana LLM plugin, cutting P95 latency investigation time by 60%',
      'Led Project UNITE — internal developer platform on Backstage, unifying service catalog, CI/CD pipelines, and runbooks for 50+ engineers',
      'Implemented GitOps workflows with FluxCD and Helm, reducing deployment incidents by 35%',
      'Managed Mimir + Thanos long-term metrics storage serving 8M+ series/day',
      'Configured Kong Ingress for Pyroscope API auth, enforcing per-team RBAC with zero prod incidents post-launch',
    ],
    tech: ['Kubernetes', 'Grafana', 'Pyroscope', 'Loki', 'Tempo', 'Mimir', 'Thanos', 'Backstage', 'FluxCD', 'Helm', 'AWS', 'Kong'],
  },
  {
    company: 'YARL IT Hub (Uki)',
    role: 'Lead Lecturer — DevOps Track',
    period: 'Dec 2023 — Feb 2025',
    location: 'Jaffna, Sri Lanka',
    summary: 'Designed and delivered a comprehensive DevOps curriculum for 100+ students, covering CI/CD, containers, cloud fundamentals, and infrastructure automation.',
    achievements: [
      'Designed end-to-end DevOps curriculum from scratch: Linux → Docker → Kubernetes → CI/CD → Cloud',
      'Mentored 100+ students, with 30+ landing DevOps/SRE roles within 6 months of graduation',
      'Built hands-on labs with real AWS/GCP environments, keeping costs under $50/month using spot instances',
      'Created a student project showcase platform used by hiring partners to recruit directly',
      'Guest speaker at 3 regional tech events on observability and cloud-native practices',
    ],
    tech: ['Linux', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'AWS', 'Python', 'Bash'],
  },
  {
    company: 'CodeRunner',
    role: 'DevOps Engineer',
    period: 'Dec 2022 — Dec 2023',
    location: 'Sri Lanka',
    summary: 'Built and maintained CI/CD pipelines and cloud infrastructure for a fast-moving software startup, enabling daily deployments with zero-downtime releases.',
    achievements: [
      'Migrated legacy deploy process from manual FTP to fully automated GitHub Actions pipelines',
      'Containerized 8 applications with Docker, reducing environment inconsistencies to zero',
      'Set up Prometheus + Grafana monitoring stack from scratch, catching 3 production issues before users reported them',
      'Reduced cloud costs by 40% through right-sizing EC2 instances and implementing auto-scaling groups',
      'Implemented blue/green deployments with AWS ALB, achieving 99.95% uptime SLA',
    ],
    tech: ['AWS', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Terraform', 'Python', 'Bash', 'Linux'],
  },
];
