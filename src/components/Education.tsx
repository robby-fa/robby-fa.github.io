import { motion } from 'framer-motion';
import { HiAcademicCap, HiShieldCheck } from 'react-icons/hi';

const educations = [
  {
    degree: 'B.Sc. Informatics Engineering',
    institution: 'Universitas Ahmad Dahlan',
    period: '2019 – 2023',
    details: [
      'GPA: 3.41 / 4.00',
      'Thesis: Web-based Sales Officer Performance Monitoring System for Telkomsel Balikpapan',
    ],
    icon: <HiAcademicCap />,
    color: 'blue',
  },
  {
    degree: 'Cybersecurity Bootcamp',
    institution: 'Dibimbing.id',
    period: 'Jul 2025 – Jan 2026',
    details: [
      'Average Score: 93.11 / 100',
      'Focus: Network security, ethical hacking, penetration testing',
      'Tools: Linux, Wireshark, Nmap, Burp Suite, Metasploit',
    ],
    icon: <HiShieldCheck />,
    color: 'emerald',
  },
];

const colorMap: Record<string, { icon: string; border: string; badge: string }> = {
  blue:    { icon: 'bg-blue-100 text-blue-600',    border: 'border-blue-200',    badge: 'bg-blue-50 text-blue-700' },
  emerald: { icon: 'bg-emerald-100 text-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-50 text-emerald-700' },
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {educations.map((edu, index) => {
            const c = colorMap[edu.color];
            return (
              <motion.div
                key={edu.degree}
                className={`bg-white rounded-xl border ${c.border} shadow-sm p-6 hover:shadow-md transition-shadow duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4 ${c.icon}`}>
                  {edu.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <p className="text-blue-600 font-medium text-sm mb-1">{edu.institution}</p>
                <p className="text-xs text-slate-400 mb-4">{edu.period}</p>
                <ul className="space-y-2">
                  {edu.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
