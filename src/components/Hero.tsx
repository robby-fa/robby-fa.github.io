import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaMedium, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { HiOutlineDownload, HiOutlineMail } from 'react-icons/hi';
import Avatar from './Avatar';
import cv from '../assets/Robby_Firdauzy - Project Operations.pdf';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/robby-fa', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/robbyfa/', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/robby.f_a/', label: 'Instagram' },
  { icon: <FaMedium />, href: 'https://medium.com/@robbyfirdauzy', label: 'Medium' },
];

const roles = ['Project Operations', 'Quality Assurance', 'Project Management'];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-16">

          {/* ── Left: Text Content ── */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Robby Firdauzy
              <span className="block text-blue-600">Alfenjy</span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {roles.map((role) => (
                <span
                  key={role}
                  className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p
              className="text-slate-500 text-sm flex items-center justify-center md:justify-start gap-1.5 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <FaMapMarkerAlt className="text-blue-500" />
              Balikpapan, Kalimantan Timur
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                <HiOutlineDownload size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-2.5 px-6 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-200 shadow-sm"
              >
                <HiOutlineMail size={18} />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-400 hover:text-blue-600 transition-colors duration-200 text-xl"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo with Frame ── */}
          <motion.div
            className="md:w-auto flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">

              {/* Decorative dot grid — top-left */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                }}
              />

              {/* Decorative dot grid — bottom-right */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                }}
              />

              {/* Offset accent square behind photo */}
              <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-blue-100 border border-blue-200" />

              {/* Gradient border wrapper */}
              <div className="relative p-[3px] rounded-3xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-300 shadow-xl shadow-blue-100">
                <div className="w-64 md:w-72 h-72 md:h-80 rounded-[22px] overflow-hidden bg-white">
                  <Avatar />
                </div>
              </div>

              {/* Floating badge — Open to Work */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white border border-slate-100 rounded-xl shadow-md px-3 py-2 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-slate-700">Open to Work</span>
              </motion.div>

              {/* Floating badge — Experience */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white border border-slate-100 rounded-xl shadow-md px-3 py-2 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaBriefcase className="text-blue-600 text-xs" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-none">2+ Years</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Experience</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
