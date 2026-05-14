import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact</h2>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            I'm open to discussing new opportunities, collaborations, or projects.
            Feel free to reach out — I'd love to connect.
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="mailto:robbyfirdauzy@gmail.com"
              className="flex items-center justify-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <HiOutlineMail size={20} className="text-blue-500" />
              robbyfirdauzy@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/robbyfa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <FaLinkedin size={18} className="text-blue-500" />
              linkedin.com/in/robbyfa
            </a>
            <p className="flex items-center justify-center gap-3 text-slate-500 text-sm">
              <FaMapMarkerAlt size={16} className="text-blue-400" />
              Balikpapan, Kalimantan Timur
            </p>
          </div>

          <a
            href="mailto:robbyfirdauzy@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            <HiOutlineMail size={18} />
            Send Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
