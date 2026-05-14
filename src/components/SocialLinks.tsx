import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/robby-fa', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/robbyfa/', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/robby.f_a/', label: 'Instagram' },
  { icon: <FaMedium />, href: 'https://medium.com/@robbyfirdauzy', label: 'Medium' },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center mt-6 md:justify-start space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-2xl text-slate-400 hover:text-blue-600 transition-colors duration-200"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
