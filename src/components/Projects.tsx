import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Vulnerability Assessment & Penetration Testing',
      description: 'Conducted comprehensive security assessments for various web applications, identifying and mitigating critical vulnerabilities.',
      link: 'https://drive.google.com/file/d/1WIw18CipaiPk2Hy_112ZNhkfcOBVOyYq/view?usp=sharing',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <a href={project.link} target='_blank' className="text-cyan-400 hover:underline mt-auto">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
