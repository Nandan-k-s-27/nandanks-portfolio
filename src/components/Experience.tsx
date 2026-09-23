import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  highlights: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Software Development Intern',
    company: 'Bandhan Technologies',
    location: 'Bengaluru, India',
    period: 'April 2026 - Ongoing',
    badge: 'Cloud & Data Engineering',
    highlights: [
      'Designed a proof-of-concept cloud data warehouse using Azure Data Factory (ADF) and Azure Databricks to automate ingestion, transformation, and storage in a structured Bronze/Silver architecture.',
      'Defined weekday incremental and weekend full-load extraction pipelines using watermark columns and change-tracking mechanisms orchestrated via scheduled ADF triggers.',
      'Built Databricks notebooks for schema validation, file format standardization (Parquet / Delta Lake), data quality checks, and partitioning optimization on Azure Data Lake Storage Gen2 (ADLS Gen2).',
      'Implemented logging, automated retry mechanisms, and failure alerts to support reliable pipeline monitoring through Azure Monitor and Databricks job telemetry.',
      'Enforced enterprise security best practices including Azure RBAC for workspace access governance and Azure Key Vault for credentials/secrets management.',
    ],
    skills: [
      'Azure Data Factory',
      'Azure Databricks',
      'ADLS Gen2',
      'Delta Lake',
      'Apache Parquet',
      'Azure Key Vault',
      'Azure Monitor',
      'Azure RBAC',
      'Python / PySpark',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'UnicornReady',
    location: 'Bengaluru, India (Remote)',
    period: 'January 2026 - April 2026',
    badge: 'Full-Stack Web Engineering',
    highlights: [
      'Developed and shipped full-stack web features in a remote agile sprint environment, building responsive frontend interfaces in React and robust RESTful API endpoints in Node.js/Express.',
      'Collaborated closely with engineering teammates during sprint planning and code reviews, ensuring modular component architecture and adherence to performance standards.',
      'Integrated external service APIs and optimized database queries, ensuring reliable data delivery across client and server tiers.',
    ],
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Agile / Scrum',
      'Git & GitHub',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-label">02 / Experience</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="section-title !mb-2">Industry Experience</h2>
            <p className="text-[var(--text-sec)] text-base max-w-2xl">
              Engineering roles architecting cloud data pipelines, real-time distributed features, and production full-stack systems.
            </p>
          </div>
          <div className="text-xs font-semibold px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--text-sec)] self-start md:self-auto">
            2 Industry Roles
          </div>
        </div>

        <div className="experience-timeline">
          {EXPERIENCES.map((item, idx) => (
            <div key={item.company} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={16} />
                </div>
                {idx < EXPERIENCES.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-content">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="timeline-badge">{item.badge}</span>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mt-2">
                      {item.role}
                    </h3>
                    <div className="text-base font-semibold text-[var(--accent)]">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-[var(--text-muted)] gap-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--badge-bg)] border border-[var(--badge-border)] font-medium">
                      <Calendar size={13} className="text-[var(--accent)]" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 pt-0.5">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 my-4">
                  {item.highlights.map((point) => (
                    <li key={point.slice(0, 32)} className="flex items-start gap-2.5 text-sm text-[var(--text-sec)] leading-relaxed">
                      <CheckCircle2
                        size={15}
                        className="text-[var(--accent)] mt-1 shrink-0 opacity-80"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3.5 border-t border-[var(--border)] flex flex-wrap gap-1.5 mt-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-[var(--radius-sm)] bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
