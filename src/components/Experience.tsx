import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Quality Assurance',
    company: 'Stamps',
    period: 'May 2025 – Present',
    type: 'Full-time',
    bullets: [
      'Collaborated with PM, Designers, and Engineers in Agile/Scrum environment — identified 100+ high-severity bugs and accelerated root cause analysis by 50%.',
      'Served as bridge between QA and Engineering via daily standups, reducing bug resolution cycle time by 30% and enabling predictable release schedules.',
      'Co-developed structured test case documentation and testing playbooks, establishing repeatable QA workflows that minimized production-level defects.',
      'Contributed to post-release monitoring by tracking product performance and flagging regression issues for fast incident response.',
    ],
  },
  {
    role: 'IT Project Operations',
    company: 'Stamps',
    period: 'Sep 2023 – May 2025',
    type: 'Full-time',
    bullets: [
      'Owned end-to-end operational workflows across 5+ products — from feature validation and milestone tracking to client delivery with structured quality checkpoints.',
      'Built and maintained 5+ comprehensive product documentation systems (user guides, release notes), improving client onboarding and training efficiency by 90%.',
      'Supported PM in release tracking within Agile delivery cycles, identifying risks and coordinating cross-functional alignment across Product, Engineering, and Operations.',
      'Managed multi-stakeholder relationships and delivered end-user training to enterprise clients: Marugame Udon, Richeese Factory (ID & MY), Burger King (ID & IN), and Popeyes.',
    ],
  },
  {
    role: 'Freelance Quality Assurance',
    company: 'Tumbuh Financial Technology',
    period: 'Jun 2023 – Dec 2023',
    type: 'Freelance',
    bullets: [
      'Identified and documented 400+ bugs across financial application modules through systematic UI, functional, and usability testing.',
      'Built a structured bug-tracking workflow to prioritize fixes by severity and business impact.',
      'Implemented basic test automation using Selenium IDE, reducing manual regression testing effort and laying groundwork for scalable QA processes.',
    ],
  },
  {
    role: 'Intern IT System Analyst',
    company: 'JakLingko',
    period: 'Aug 2022 – Dec 2022',
    type: 'Internship',
    bullets: [
      'Monitored system performance using Elastic Stack, maintaining 99.9% uptime and generating actionable alerts for operational issues.',
      'Developed 5+ interactive data dashboards in Google Data Studio for data-driven decision-making by operations and management stakeholders.',
      'Supported 100% of technical operational activities, contributing to incident response documentation.',
    ],
  },
];

const typeBadgeColor: Record<string, string> = {
  'Full-time': 'bg-blue-100 text-blue-700',
  'Freelance': 'bg-amber-100 text-amber-700',
  'Internship': 'bg-emerald-100 text-emerald-700',
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Work Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center shadow-sm z-10 relative">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-blue-600 font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-slate-400 font-medium">{exp.period}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeBadgeColor[exp.type]}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
