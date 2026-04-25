/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronRight, 
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Send,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
}

// --- Data ---
const SKILLS = {
  technical: ['Python', 'SQL', 'Visual Studio', 'Data Science', 'DBMS'],
  soft: ['Communication', 'Project Management', 'Time Management'],
};

const PROJECTS: Project[] = [
  {
    title: 'Automatic Project System',
    description: 'A system built during an online course focusing on automation and data processing.',
    tech: ['Python', 'Automation'],
    image: 'https://images.unsplash.com/photo-1518433278981-2ad48867a99d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'DBMS Inventory Manager',
    description: 'A comprehensive database management system for tracking inventory and sales logistics.',
    tech: ['SQL', 'DBMS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Data Insights Tool',
    description: 'Python-based tool for analyzing datasets and generating meaningful visualizations.',
    tech: ['Python', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: 'Intern',
    company: 'Aikshetra Tech Solutions Pvt Ltd',
    duration: '1 Month',
    description: 'Worked on software development tasks, gained hands-on experience with production code and professional technical solutions.',
  },
  {
    role: 'Project Lead',
    company: 'Online Course Projects',
    duration: 'Ongoing',
    description: 'Developing and managing multiple automation-focused projects using Python and SQL.',
  }
];

const CERTIFICATIONS: Certification[] = [
  { name: 'Database Management System', issuer: 'Great Learning' },
  { name: 'SQL and Data Science', issuer: 'Great Learning' },
  { name: 'Python Fundamentals for Beginners', issuer: 'Great Learning' },
];

// --- Components ---

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-line py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <motion.a 
          href="#home" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-lg font-bold tracking-tighter uppercase"
        >
          INCHARA <span className="text-muted">K S</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="btn-primary !py-2 !px-6 text-[10px]">Hire Me</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-line py-8 px-8 flex flex-col gap-6 md:hidden"
          >
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-muted"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-16">
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-muted text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl font-light tracking-tight md:text-6xl max-w-2xl leading-[1.1]"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-bg text-white">
      <Nav />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-8 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="status-dot animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Available for Internships</span>
            </div>
            <h1 className="text-6xl md:text-[84px] font-light tracking-tighter mb-8 leading-[1]">
              Inchara <br /> 
              <span className="text-muted">K S.</span>
            </h1>
            <p className="text-xl text-muted max-w-lg mb-12 leading-relaxed font-light">
              Technical specialist bridging the gap between complexity and experience. Specialized in Python, SQL, and robust database management.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#contact" className="btn-primary group">
                Let's Talk &rarr;
              </a>
              <button className="btn-secondary">
                Download Resume
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8">
              <a href="#" className="text-muted hover:text-white transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest">Github</span>
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
              </a>
              <a href="mailto:incharabhoomika@gmail.com" className="text-muted hover:text-white transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative group overflow-hidden elegant-border">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Inchara K S" 
                referrerPolicy="no-referrer"
                className="w-full max-w-md object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-bg to-transparent">
                <p className="text-4xl font-light tracking-widest mb-1 text-white opacity-80">2026</p>
                <p className="text-[10px] text-muted uppercase font-bold tracking-[0.3em]">BCA Graduation Year</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding border-t border-line">
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <SectionHeader title="Driven by technical precision." subtitle="About" />
            <p className="text-lg text-muted font-light leading-relaxed mb-10">
              Bachelor of Computer Applications candidate with an 8.5 CGPA. Focused on engineering excellence, data integrity, and building scalable software architectures.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-14 h-14 shrink-0 elegant-border flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <GraduationCap size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Academic Qualification</h4>
                  <p className="text-muted text-sm mb-1">Vidya First Grade College</p>
                  <p className="text-white text-xs font-bold tracking-widest uppercase">8.5 CGPA • Class of '26</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-14 h-14 shrink-0 elegant-border flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <Briefcase size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Current Endeavors</h4>
                  <p className="text-muted text-sm font-light leading-relaxed">
                    Analyzing complex datasets and automating industrial-grade workflows through Python scripts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted mb-8 flex items-center gap-3">
                <div className="w-12 h-[1px] bg-line" /> Technical Stack
              </h3>
              <div className="flex flex-wrap gap-4 text-white">
                {SKILLS.technical.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted mb-8 flex items-center gap-3">
                <div className="w-12 h-[1px] bg-line" /> Methodologies
              </h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.soft.map(skill => (
                  <span key={skill} className="skill-tag hover:text-white">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted mb-8 flex items-center gap-3">
                <div className="w-12 h-[1px] bg-line" /> Certifications
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map(cert => (
                  <div key={cert.name} className="p-6 elegant-border bg-card/30">
                    <p className="font-bold text-sm uppercase tracking-widest">{cert.name}</p>
                    <p className="text-xs text-muted mt-2 tracking-widest">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-card/20 py-32 border-t border-line">
        <div className="max-w-7xl mx-auto px-8">
          <SectionHeader title="Industry Engagement" subtitle="Experience" />
          <div className="grid md:grid-cols-2 gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="elegant-border p-10 bg-card/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[9px] font-bold text-muted uppercase tracking-[0.4em] border border-line px-3 py-1">Experience / 0{idx + 1}</span>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">{exp.duration}</span>
                  </div>
                  <h4 className="text-2xl font-light mb-2">{exp.role}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted mb-6">{exp.company}</p>
                  <p className="text-muted font-light leading-relaxed text-sm">{exp.description}</p>
                </div>
                <div className="mt-12 text-[10px] font-bold uppercase tracking-widest text-white/50 group cursor-pointer hover:text-white transition-colors">
                  Details &rarr;
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding border-t border-line">
        <SectionHeader title="Project Deliverables" subtitle="Portfolio" />
        <div className="grid lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden elegant-border aspect-[4/5] mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center ring-1 ring-inset ring-white/20">
                  <p className="text-white text-sm font-bold uppercase tracking-[0.3em] mb-4">View Case Study</p>
                  <div className="flex gap-4">
                    <Github className="text-white hover:text-muted cursor-pointer transition-colors" size={20} />
                    <ExternalLink className="text-white hover:text-muted cursor-pointer transition-colors" size={20} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-[9px] font-bold text-muted uppercase tracking-[0.4em]">Project / 0{idx + 1}</span>
              </div>
              <h3 className="text-2xl font-light mb-4 group-hover:text-muted transition-colors">{project.title}</h3>
              <p className="text-muted text-sm font-light leading-relaxed mb-6 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-muted border-b border-line pb-1">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-line">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
          <div>
            <SectionHeader title="Start a Conversation." subtitle="Connect" />
            <p className="text-lg text-muted font-light mb-12 leading-relaxed max-w-md">
              Available for immediate project consultations and professional assignments. Reach out to discuss how I can contribute to your team.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 elegant-border flex items-center justify-center text-muted group-hover:text-white transition-colors">
                  <Mail size={18} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-[9px] text-muted font-bold uppercase tracking-[0.4em] mb-1">Direct Email</p>
                  <p className="text-sm font-light tracking-wider">incharabhoomika@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 elegant-border flex items-center justify-center text-muted group-hover:text-white transition-colors">
                  <Linkedin size={18} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-[9px] text-muted font-bold uppercase tracking-[0.4em] mb-1">Professional network</p>
                  <p className="text-sm font-light tracking-wider">linkedin.com/in/inchara-k-s</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 elegant-border bg-card/20 backdrop-blur-sm">
            <form onSubmit={handleContactSubmit} className="space-y-10">
              <div className="grid grid-cols-1 gap-10">
                <div>
                  <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-4">Your Name</label>
                  <input required type="text" className="w-full px-0 py-4 bg-transparent border-b border-line focus:border-white transition-all outline-none font-light placeholder:text-muted/30" placeholder="e.g. Alex Rivera" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-4">Email Address</label>
                  <input required type="email" className="w-full px-0 py-4 bg-transparent border-b border-line focus:border-white transition-all outline-none font-light placeholder:text-muted/30" placeholder="alex@nexus.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-4">Project Brief</label>
                <textarea required rows={4} className="w-full px-0 py-4 bg-transparent border-b border-line focus:border-white transition-all outline-none font-light placeholder:text-muted/30 resize-none" placeholder="Details of your request..." />
              </div>
              <button 
                disabled={formStatus !== 'idle'}
                className="w-full btn-primary py-5 flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {formStatus === 'idle' && <>Send Message &rarr;</>}
                {formStatus === 'sending' && <span className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full" />}
                {formStatus === 'sent' && <>Delivered <Award size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-line bg-card/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Open to select roles</span>
            </div>
            <p className="text-[11px] text-muted tracking-widest leading-loose max-w-sm uppercase">
              © 2026 Portfolio of Inchara K S.<br />Built with technical precision and design excellence.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 text-[10px] font-bold text-muted uppercase tracking-[0.3em]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">Archive</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
  );
}
