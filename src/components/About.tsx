import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Products Managed' },
  { value: '400+', label: 'Bugs Documented' },
  { value: '90%', label: 'Training Efficiency Gain' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Professional Summary</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Results-driven IT professional with <strong className="text-slate-800">2+ years of experience</strong> in
            Product Operations, Project Management, and Quality Assurance within cross-functional product teams
            (PM, Designer, Engineer, QA).
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mt-4">
            Proven ability to build and optimize <strong className="text-slate-800">end-to-end product workflows</strong> —
            from discovery to delivery, release, and post-launch monitoring — while maintaining structured
            documentation that improved training efficiency by 90%. Experienced in Agile environments and
            managing competing priorities across 5+ concurrent products and enterprise clients.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mt-4">
            Currently expanding into <strong className="text-slate-800">Cybersecurity</strong> through a hands-on bootcamp
            focused on ethical hacking, network defense, and penetration testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
