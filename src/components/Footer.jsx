'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: cvData.personal.social.github,
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: cvData.personal.social.linkedin,
      icon: 'linkedin',
    },
    {
      name: 'WhatsApp',
      url: cvData.personal.social.whatsapp,
      icon: 'whatsapp',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.687 5.48-4.687 9.072 0 1.584.292 3.124.867 4.593l-1.384 5.053 5.192-1.392c1.447.823 3.074 1.254 4.744 1.254 5.227 0 9.584-4.357 9.584-9.585 0-2.54-.981-4.913-2.761-6.72-1.78-1.806-4.154-2.8-6.532-2.8zm7.991 16.55h-.083c-1.816.124-5.652-2.082-7.926-4.200-2.274-2.118-3.885-5.95-3.885-7.889 0-4.18 3.404-7.584 7.584-7.584 2.05 0 3.977.796 5.429 2.245 1.452 1.449 2.251 3.372 2.251 5.408 0 4.179-3.405 7.583-7.584 7.583z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="section-light border-t border-black/10 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-black font-semibold text-lg">Qaiser Farooq</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI Researcher building intelligent solutions through machine learning and deep learning.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-black font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Research', href: '#research' },
                { label: 'Skills', href: '#skills' },
                { label: 'Chat', href: '#chatbot' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-black font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${cvData.personal.email}`}
                className="block text-gray-600 hover:text-black transition-colors duration-300 text-sm truncate"
              >
                {cvData.personal.email}
              </a>
              <a
                href={`tel:${cvData.personal.phone}`}
                className="block text-gray-600 hover:text-black transition-colors duration-300 text-sm"
              >
                {cvData.personal.phone}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-6 py-8 border-y border-black/10"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-black/70 hover:text-black transition-colors duration-300 p-2 border border-black/20 rounded-lg hover:border-black/40"
              title={link.name}
            >
              {getIcon(link.icon)}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2026 Qaiser Farooq. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
