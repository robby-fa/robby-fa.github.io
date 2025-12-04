import { motion } from 'framer-motion';
import Avatar from './Avatar'
import SocialLinks from './SocialLinks';
import cv from '../assets/cv.pdf';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              IT professional with a Bachelor's background in Informatics and 2 years of experience in IT Project Operations and Quality Assurance (QA). Skilled in ensuring smooth system performance and maintaining product quality, with a solid understanding of the Software Development Life Cycle (SDLC).
              <br/>
              <br/>
              Currently joining a Cybersecurity Bootcamp to develop hands-on skills in ethical hacking, network defense, and vulnerability assessment. Experienced with tools such as OWASP ZAP, Nmap, SQLMap, Burp Suite, and Wireshark. Passionate about enhancing security and contributing to teams focused on penetration testing and cyber defense.
            </p>
            <a href={cv} target='_blank' className='bg-cyan-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-cyan-600 transition-colors duration-300'>
              Download CV
            </a>
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
