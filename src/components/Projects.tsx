import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaProjectDiagram, FaShieldAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Pencak Silat Scoring System',
    role: 'Product Manager',
    company: 'Daftrix & Digiscore',
    period: 'Jan 2023 – Present',
    description:
      'Led end-to-end product development lifecycle for a Pencak Silat digital scoring system. Managed a backlog of 20+ features across multiple sprint cycles while ensuring alignment with UI/UX standards and client requirements.',
    highlights: [
      'Managed 20+ feature backlog across multiple sprints',
      'Produced cooperation agreements & system training guides',
      'Facilitated smooth product adoption and stakeholder buy-in',
    ],
    tags: ['Product Management', 'Agile / Scrum', 'Documentation', 'Stakeholder Management'],
    icon: <FaProjectDiagram />,
    color: 'blue',
    link: null,
  },
  {
    title: 'Vulnerability Assessment & Penetration Testing',
    role: 'Security Analyst',
    company: 'Independent Project',
    period: '2025',
    description:
      'Conducted comprehensive security assessments for web applications, identifying and mitigating critical vulnerabilities using industry-standard methodologies and tools.',
    highlights: [
      'Full VAPT lifecycle — recon to report',
      'Used Burp Suite, Nmap, OWASP ZAP, Metasploit',
      'Documented findings with severity classification',
    ],
    tags: ['Penetration Testing', 'OWASP', 'Burp Suite', 'Nmap', 'Security Reporting'],
    icon: <FaShieldAlt />,
    color: 'rose',
    link: 'https://drive.google.com/file/d/1PYSMYwrqSpNSytEKk2F6dxe90J1a8FZp/view?usp=sharing',
  },
];

const colorMap: Record<string, { icon: string; tag: string; tagText: string; border: string }> = {
  blue: {
    icon: 'bg-blue-100 text-blue-600',
    tag: 'bg-blue-50 text-blue-700',
    tagText: 'text-blue-700',
    border: 'hover:border-blue-300',
  },
  rose: {
    icon: 'bg-rose-100 text-rose-600',
    tag: 'bg-rose-50 text-rose-700',
    tagText: 'text-rose-700',
    border: 'hover:border-rose-300',
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const c = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                className={`bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col transition-all duration-300 hover:shadow-md ${c.border}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${c.icon}`}>
                    {project.icon}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                      aria-label="View project"
                    >
                      <HiOutlineExternalLink size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{project.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-1">{project.role} · {project.company}</p>
                <p className="text-xs text-slate-400 mb-3">{project.period}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
