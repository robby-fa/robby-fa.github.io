import { motion } from 'framer-motion';
import {
  FaCogs, FaTools, FaDatabase, FaCheckDouble,
  FaShieldAlt, FaCode, FaUsers
} from 'react-icons/fa';

const skillCategories = [
  {
    category: 'Process & Ops',
    icon: <FaCogs />,
    color: 'blue',
    skills: [
      'Workflow Design (Discovery → Delivery → Release → Monitoring)',
      'SOP & Manual Book Authoring',
      'Product Documentation Systems',
      'Release Tracking',
      'Milestone Validation',
    ],
  },
  {
    category: 'Tools',
    icon: <FaTools />,
    color: 'indigo',
    skills: [
      'Git / GitHub',
      'Notion',
      'Postman',
      'Katalon',
      'Playwright',
      'Selenium IDE',
      'Google Data Studio',
      'WordPress',
    ],
  },
  {
    category: 'API & Data',
    icon: <FaDatabase />,
    color: 'cyan',
    skills: [
      'API Testing (Postman, Swagger)',
      'Basic Data Querying',
      'Dashboard Reading',
      'Performance Metrics Interpretation',
      'Actionable Reporting',
    ],
  },
  {
    category: 'Testing & QA',
    icon: <FaCheckDouble />,
    color: 'emerald',
    skills: [
      'Functional Testing',
      'Regression Testing',
      'Exploratory Testing',
      'UI & Usability Testing',
      'Test Case Design',
    ],
  },
  {
    category: 'Security Tools',
    icon: <FaShieldAlt />,
    color: 'rose',
    skills: [
      'Burp Suite',
      'OWASP ZAP',
      'Nmap',
      'Wireshark',
      'Metasploit',
    ],
  },
  {
    category: 'Dev & Infra',
    icon: <FaCode />,
    color: 'violet',
    skills: [
      'JavaScript',
      'Python',
      'Linux',
      'Database Design',
    ],
  },
  {
    category: 'Soft Skills',
    icon: <FaUsers />,
    color: 'amber',
    skills: [
      'Stakeholder Management',
      'Cross-functional Communication',
      'Problem-solving',
      'Structured & Detail-oriented',
      'Proactive Ownership',
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string; badgeText: string }> = {
  blue:    { bg: 'bg-blue-50',   text: 'text-blue-600',   badge: 'bg-blue-100',   badgeText: 'text-blue-700' },
  indigo:  { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-100', badgeText: 'text-indigo-700' },
  cyan:    { bg: 'bg-cyan-50',   text: 'text-cyan-600',   badge: 'bg-cyan-100',   badgeText: 'text-cyan-700' },
  emerald: { bg: 'bg-emerald-50',text: 'text-emerald-600',badge: 'bg-emerald-100',badgeText: 'text-emerald-700' },
  rose:    { bg: 'bg-rose-50',   text: 'text-rose-600',   badge: 'bg-rose-100',   badgeText: 'text-rose-700' },
  violet:  { bg: 'bg-violet-50', text: 'text-violet-600', badge: 'bg-violet-100', badgeText: 'text-violet-700' },
  amber:   { bg: 'bg-amber-50',  text: 'text-amber-600',  badge: 'bg-amber-100',  badgeText: 'text-amber-700' },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">What I Bring</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Skills & Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, index) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.category}
                className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${c.bg} ${c.text} mb-4 text-lg`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-3">{cat.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.badge} ${c.badgeText}`}
                    >
                      {skill}
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

export default Skills;
