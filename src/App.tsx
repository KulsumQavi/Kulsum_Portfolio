import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  BriefcaseBusiness,
  Check,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Radio,
  Send,
  Sparkles,
  Trophy,
  X,
  Zap,
  FileText,
} from 'lucide-react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Publication', id: 'publication' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const heroWords = ['IoT & Embedded Systems', 'AI Enthusiast', 'Generative AI'];

const projects = [
  {
    number: '01',
    title: 'FoodResQ',
    eyebrow: 'AI + IoT-based food surplus redistribution system',
    description: 'An edge-intelligent food quality and redistribution platform that combines multi-sensor monitoring, on-device classification, and live donor–recipient coordination.',
    tags: ['ESP32', 'DHT22', 'MQ135', 'HX711', 'Firebase', 'Random Forest'],
    metrics: [
      ['92', '%', 'classification accuracy'],
      ['<150', 'ms', 'edge inference'],
    ],
    icon: Radio,
    tone: 'cyan',
    caseStudy: {
      challenge: 'Cooked food can spoil quickly, while visual checks and fixed disposal times are subjective, delayed, and difficult to coordinate with people who need the surplus.',
      solution: 'FoodResQ captures gas concentration, temperature, humidity, weight variation, and preparation time. A Random Forest model on the ESP32 classifies food as edible, spoiling, or spoiled before Firebase synchronizes the result with the web portal.',
      workflow: ['Collect calibrated sensor readings', 'Preprocess five input features', 'Classify locally on the ESP32', 'Sync status and history to Firebase', 'Alert stakeholders and coordinate pickup'],
      contribution: 'Designed the multi-sensor monitoring and edge-AI workflow, supported the web dashboard and role-based donor/recipient flow, and helped validate the system across cooked-food categories.',
      outcome: 'The prototype achieved 92.1% accuracy, 91.4% precision, 90.8% recall, and an average inference latency below 150 milliseconds. Cloud updates typically appeared within 1–3 seconds.',
    },
  },
  {
    number: '02',
    title: 'AgroSense',
    eyebrow: 'AI-driven IoT solution for sustainable campus water management',
    description: 'A multi-sensor irrigation system using decision trees, ESP-NOW, and sensor fusion to cut simulated campus water use by 30–50%.',
    tags: ['ESP32', 'Decision Trees', 'ESP-NOW', 'Python', 'C++', 'Multi-Sensor Fusion'],
    metrics: [
      ['50', '%', 'water-use reduction'],
      ['Real', 'time', 'zone decisions'],
    ],
    icon: CircuitBoard,
    tone: 'lime',
    caseStudy: {
      challenge: 'Campus landscapes waste water through fixed irrigation schedules that ignore real-time soil moisture, weather, and plant needs, leading to overwatering, underwatering, and runoff that damages both greenery and budgets.',
      solution: 'AgroSense deploys ESP32 nodes across campus zones, each fusing soil-moisture, temperature, humidity, and light readings. A decision-tree model trained in Python evaluates per-zone conditions and triggers irrigation only when needed, communicating between nodes via ESP-NOW for low-latency, WiFi-free coordination.',
      workflow: ['Distribute ESP32 sensor nodes across irrigation zones', 'Fuse multi-sensor readings per zone', 'Run decision-tree inference for each zone', 'Coordinate irrigation actions over ESP-NOW', 'Log and visualize water usage over time'],
      contribution: 'Designed the sensor-fusion architecture and trained the decision-tree model in Python, implemented ESP-NOW communication between nodes in C++, and simulated campus irrigation zones to validate water savings.',
      outcome: 'Simulation showed a 30–50% reduction in campus water usage compared to fixed-schedule irrigation, with real-time per-zone decisions that adapt to changing environmental conditions.',
    },
  },
  {
    number: '03',
    title: 'Virtual Health Instructor',
    eyebrow: 'Smart health companion for everyday well-being',
    description: 'A Raspberry Pi health assistant combining live vitals, environmental sensing, and voice interaction for responsive guidance.',
    tags: ['Raspberry Pi 4', 'MAX30100', 'LM35', 'GSR', 'OLED Display', 'Python'],
    metrics: [
      ['2', 'bpm', 'heart-rate accuracy'],
      ['<1', 's', 'response time'],
    ],
    icon: BrainCircuit,
    tone: 'cyan',
    caseStudy: {
      challenge: 'Everyday health tracking is fragmented — people need separate devices for vitals, environmental awareness, and guidance, and most systems lack real-time feedback or an accessible interface for non-technical users.',
      solution: 'The Virtual Health Instructor runs on a Raspberry Pi 4, combining a MAX30100 heart-rate/SpO2 sensor, LM35 temperature sensor, GSR stress sensor, and environmental readings with voice interaction. An OLED display shows live vitals while a voice assistant interprets the data and offers responsive well-being guidance.',
      workflow: ['Capture heart rate, SpO2, body temperature, and GSR', 'Read environmental temperature and humidity', 'Display live vitals on the OLED screen', 'Analyze combined readings for well-being insights', 'Deliver voice-based guidance and recommendations'],
      contribution: 'Built the sensor integration pipeline on Raspberry Pi, developed the Python-based data analysis and voice interaction layer, and designed the OLED display interface for real-time vitals feedback.',
      outcome: 'The prototype delivered heart-rate readings within 2 bpm of clinical reference, sub-second response to voice queries, and a unified health companion experience that combined vitals, environment, and guidance in one device.',
    },
  },
  {
    number: '04',
    title: 'TrashFlow',
    eyebrow: 'IoT-based smart waste segregation system',
    description: 'An IoT-based smart waste management system that monitors bin capacity, alerts collection partners, and turns waste data into cleaner, more efficient city operations.',
    tags: ['Ultrasonic Sensors', 'Capacitive Sensors', 'GPS', 'Arduino UNO', 'Flutter', 'Data Visualization'],
    metrics: [
      ['95', '%', 'classification accuracy'],
      ['60', '%', 'overflow reduction'],
    ],
    icon: Cpu,
    tone: 'amber',
    caseStudy: {
      challenge: 'Bins are often emptied only after overflowing, creating unhygienic public spaces, inefficient collection routes, and missed opportunities to separate recyclable and organic waste.',
      solution: 'TrashFlow places ultrasonic or capacitive sensors in bins, tracks locations, and sends near-full alerts to Waste Management Partners through a mobile experience. The platform also supports partner scoring and actionable collection data.',
      workflow: ['Sense bin fill level', 'Attach the reading to a location', 'Notify nearby collection partners', 'Track response time and effectiveness', 'Use trends to improve routes and schedules'],
      contribution: 'Worked as the business analyst, translating the public-space problem into a feasible product concept, defining target users and workflows, and connecting the hardware, app, and data-analysis requirements.',
      outcome: 'The concept earned 1st place at SmartIDEAthon 2024 and demonstrated a practical path to reduce overflow, improve accountability, and support recycling and energy recovery.',
    },
  },
];

const skillGroups = [
  { title: 'Programming & AI/ML', icon: BrainCircuit, items: ['Python', 'Java', 'C', 'MATLAB', 'Generative AI', 'Groq API', 'LLaMA', 'Ollama', 'Prompt Engineering', 'RAG', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'] },
  { title: 'Backend & APIs', icon: Code2, items: ['Flask', 'RESTful APIs', 'MVC Architecture', 'SQLAlchemy', 'JSON', 'Input Validation', 'Error Handling'] },
  { title: 'Databases & Caching', icon: CircuitBoard, items: ['ChromaDB', 'Redis', 'Vector Embeddings', 'Docker', 'Local Storage'] },
  { title: 'IoT & Embedded Hardware', icon: Radio, items: ['Arduino', 'Raspberry Pi', 'ESP32', 'Sensor Integration', 'MQTT', 'HTTP', 'PCB Design', 'DSCH2', 'Microwind'] },
  { title: 'Frontend, DevOps & Tools', icon: Globe2, items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Git', 'GitHub', 'Postman', 'Jupyter Notebook', 'VS Code', 'Tinkercad', 'Xilinx Vivado'] },
  { title: 'Soft Skills', icon: Sparkles, items: ['Project Management', 'Problem Solving', 'Team Collaboration', 'Creativity', 'Adaptability'] },
];

/* ── Hooks ── */

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function useMouseParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.setProperty('--px', `${x * 20}px`);
      el.style.setProperty('--py', `${y * 20}px`);
    };
    const onLeave = () => {
      el.style.setProperty('--px', '0px');
      el.style.setProperty('--py', '0px');
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return ref;
}

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, inView, duration]);
  return value;
}

/* ── Components ── */

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`);
      el.style.setProperty('--gx', `${(x * 50).toFixed(0)}%`);
      el.style.setProperty('--gy', `${(y * 50).toFixed(0)}%`);
    };
    const onLeave = () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return (
    <div ref={ref} className={className}>
      <div className="tilt-shine" />
      {children}
    </div>
  );
}

function MagneticButton({ children, className, onClick, href, download }: {
  children: React.ReactNode; className: string; onClick?: () => void; href?: string; download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} download={download} className={`magnetic ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} onClick={onClick} className={`magnetic ${className}`}>
      {children}
    </button>
  );
}

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const num = parseFloat(value);
  const isNumeric = !isNaN(num);
  const animated = useCountUp(isNumeric ? num : 0, inView);
  return (
    <div ref={ref}>
      <strong>
        {isNumeric ? animated : value}
        <small>{suffix}</small>
      </strong>
    </div>
  );
}

/* ── App ── */

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [publicationOpen, setPublicationOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const typedText = useTypewriter(heroWords);
  const heroRef = useMouseParallax();

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <CursorGlow />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="background-grid" aria-hidden="true" />
      <div className="aurora" aria-hidden="true">
        <span className="aurora-blob a1" />
        <span className="aurora-blob a2" />
        <span className="aurora-blob a3" />
      </div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Kulsum Syed Abdul Qavi home">
          <span className="brand-mark"><CircuitBoard size={18} /></span>
          <span>KS<span className="brand-dot">.</span></span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.id} className={activeSection === item.id ? 'active' : ''} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
          <a className="nav-linkedin" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={17} />
          </a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for opportunities <span className="eyebrow-line" /></div>
            <p className="hero-kicker">Electronics & Communication Engineering</p>
            <h1 className="hero-name">Kulsum Syed<br /><em>Abdul Qavi</em></h1>
            <p className="hero-title"><span className="typewriter">{typedText}<span className="cursor" /></span></p>
            <p className="hero-intro">Electronics and Communication Engineering graduate specializing in IoT, AI, and Embedded Systems, with experience developing real-time monitoring and automation solutions using ESP32, Raspberry Pi, and Python-based ML models.</p>
            <div className="hero-actions">
              <MagneticButton className="button button-primary" onClick={() => scrollTo('projects')}>View projects <ArrowUpRight size={17} /></MagneticButton>
              <MagneticButton className="button button-ghost" href="/Kulsum_Syed_Abdul_Qavi.pdf" download>Download resume <Download size={16} /></MagneticButton>
            </div>
            <div className="hero-contact-row">
              <a href="mailto:kulsumqavi@gmail.com"><Mail size={15} /> kulsumqavi@gmail.com</a>
              <a href="tel:+918660867203"><Phone size={15} /> +91 8660867203</a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay" ref={heroRef} aria-label="Abstract circuit board illustration">
            <div className="scene-3d">
              <div className="cube-3d">
                <div className="cube-face cube-front"><CircuitBoard size={36} strokeWidth={1.2} /><span>IoT</span></div>
                <div className="cube-face cube-back"><Cpu size={36} strokeWidth={1.2} /><span>EDGE</span></div>
                <div className="cube-face cube-right"><BrainCircuit size={36} strokeWidth={1.2} /><span>AI</span></div>
                <div className="cube-face cube-left"><Radio size={36} strokeWidth={1.2} /><span>RF</span></div>
                <div className="cube-face cube-top"><Code2 size={36} strokeWidth={1.2} /><span>CODE</span></div>
                <div className="cube-face cube-bottom"><Zap size={36} strokeWidth={1.2} /><span>PWR</span></div>
              </div>
            </div>
            <div className="orbital orbital-one" /><div className="orbital orbital-two" />
            <div className="node node-a"><span /> ESP32</div>
            <div className="node node-b"><span /> ML MODEL</div>
            <div className="node node-c"><span /> IoT</div>
            <div className="hero-visual-caption"><span>01</span> Connecting ideas to impact</div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><div className="scroll-line" /></div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="section-heading reveal"><span className="section-index">01 /</span><h2>Curious by nature.<br /><span>Purposeful by design.</span></h2></div>
          <div className="about-layout">
            <div className="about-lead reveal"><p>I am an Electronics and Communication Engineering graduate specializing in <strong>IoT, AI, and Embedded Systems.</strong></p><p>My experience spans real-time monitoring, automation, Generative AI, and connected hardware using ESP32, Raspberry Pi, and Python-based ML models. I enjoy turning complex technical challenges into practical, human-centered products and continuously learning along the way.</p></div>
            <div className="about-aside reveal reveal-delay"><div className="quote-mark">“</div><p>Seeking opportunities to apply practical skills to real-world technology challenges, with a strong commitment to continuous learning.</p><span className="aside-label">CURRENTLY EXPLORING</span><div className="explore-tags"><span>Edge AI</span><span>Smart Cities</span><span>Sensor Networks</span></div></div>
          </div>
        </section>

        <section id="experience" className="section-pad experience-section">
          <div className="section-heading reveal"><span className="section-index">02 /</span><h2>Experience<br /><span>in practice.</span></h2></div>
          <div className="experience-card reveal">
            <div className="experience-top"><div><span className="experience-label"><BriefcaseBusiness size={15} /> Generative AI Intern</span><h3>CampusPe Technologies Private Limited</h3><p>Bengaluru, Karnataka · Remote</p></div><span className="experience-date">Feb 2026 — May 2026</span></div>
            <div className="experience-points"><p>Built a production-ready Flask AI microservice for an SOC 2 Readiness Manager capstone project, implementing 8 REST API endpoints using Groq API with LLaMA-3.3-70B model.</p><p>Developed a complete RAG pipeline using ChromaDB and sentence-transformers, ingesting 10 SOC 2 domain knowledge documents into 47 vector chunks for accurate knowledge-grounded AI responses.</p><p>Implemented SSE streaming on the report endpoint to deliver tokens in real time, Redis caching with SHA256 keys and 15-minute TTL, and pre-loaded sentence-transformers at startup for optimized performance.</p><p>Wrote 10 pytest unit tests with mocked Groq responses, all passing; containerized the service using Docker and maintained daily commits and pull requests on GitHub.</p></div>
            <div className="tag-list experience-tags"><span>Flask</span><span>Groq API</span><span>LLaMA-3.3-70B</span><span>ChromaDB</span><span>Redis</span><span>Docker</span><span>Pytest</span></div>
          </div>
        </section>

        <section id="education" className="section-pad education-section">
          <div className="section-heading reveal"><span className="section-index">03 /</span><h2>Learning in<br /><span>layers.</span></h2></div>
          <div className="timeline">
            <div className="timeline-item reveal"><div className="timeline-year">2022 — 2026</div><div className="timeline-dot" /><div className="timeline-content"><div className="timeline-top"><div><h3>Anjuman Institute of Management and Technology</h3><p>Bachelor of Engineering in Electronics and Communication</p></div><strong>9.11 <small>CGPA</small></strong></div></div></div>
            <div className="timeline-item reveal"><div className="timeline-year">2020 — 2022</div><div className="timeline-dot" /><div className="timeline-content"><div className="timeline-top"><div><h3>Anjuman Pre-University College for Women</h3><p>Pre-University — Science (PCMB)</p></div><strong>91.5 <small>%</small></strong></div></div></div>
            <div className="timeline-item reveal"><div className="timeline-year">2019 — 2020</div><div className="timeline-dot" /><div className="timeline-content"><div className="timeline-top"><div><h3>Anjuman English Medium High School for Girls</h3><p>10th Standard</p></div><strong>97.12 <small>%</small></strong></div></div></div>
          </div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <div className="section-heading section-heading-wide reveal"><div><span className="section-index">04 /</span><h2>Selected<br /><span>projects.</span></h2></div><p>Where sensors become signals,<br />and signals become solutions.</p></div>
          <div className="project-grid">{projects.map((project, i) => { const Icon = project.icon; const isOpen = openProject === project.title; return <TiltCard key={project.title} className={`project-card ${project.tone} reveal stagger stagger-${(i % 4) + 1}`}><div className="project-card-top"><span className="project-number">{project.number}</span><Icon size={24} strokeWidth={1.4} /><span className="project-arrow"><ArrowUpRight size={18} /></span></div><div className="project-illustration"><div className="illustration-lines" /><Icon size={54} strokeWidth={1} /><span>PROJECT / {project.number}</span></div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="metric-row">{project.metrics.map(([value, suffix, label]) => <AnimatedCounter key={label} value={value} suffix={suffix} />)}</div><button className="details-toggle" onClick={() => setOpenProject(isOpen ? null : project.title)} aria-expanded={isOpen}>{isOpen ? 'Hide case study' : 'Explore case study'} <ChevronDown size={15} /></button>{isOpen && <div className="project-details"><div><span>THE CHALLENGE</span><p>{project.caseStudy.challenge}</p></div><div><span>THE APPROACH</span><p>{project.caseStudy.solution}</p></div><div><span>YOUR CONTRIBUTION</span><p>{project.caseStudy.contribution}</p></div><div className="workflow"><span>SYSTEM FLOW</span><ol>{project.caseStudy.workflow.map((step) => <li key={step}>{step}</li>)}</ol></div><div><span>OUTCOME</span><p>{project.caseStudy.outcome}</p></div></div>}</TiltCard>; })}</div>
        </section>

        <section id="publication" className="section-pad publication-section">
          <div className="section-heading reveal"><span className="section-index">05 /</span><h2>Publication<br /><span>in print.</span></h2></div>
          <TiltCard className="publication-card reveal">
            <div className="publication-icon"><FileText size={28} /></div>
            <div className="publication-body">
              <span className="highlight-label">2025 · International Journal of Engineering Research & Applications (IJERA)</span>
              <h3>FoodResQ: An AI and IoT-Based System for Food Quality Classification and Surplus Redistribution</h3>
              <p>Co-authored a peer-reviewed publication detailing a complete edge–cloud framework for cooked-food monitoring, safety-aware alerts, and structured redistribution.</p>
              <div className="publication-meta"><span>Research focus <strong>Edge AI + multi-sensor fusion</strong></span><span>Application <strong>Food safety and sustainability</strong></span></div>
              <button className="details-toggle" onClick={() => setPublicationOpen(!publicationOpen)} aria-expanded={publicationOpen}>{publicationOpen ? 'Hide research summary' : 'Read research summary'} <ChevronDown size={15} /></button>
              {publicationOpen && <div className="publication-details"><div><span>RESEARCH GAP</span><p>Most existing systems focus on packaged food, cold-chain monitoring, or single-sensor measurements. FoodResQ addresses the underexplored problem of cooked-food spoilage with embedded intelligence and an end-to-end redistribution workflow.</p></div><div><span>METHOD</span><p>A calibrated ESP32 module combines MQ-135 gas, DHT22 temperature and humidity, HX711 load-cell measurements, and elapsed preparation time. A Random Forest classifier is trained offline and deployed locally for low-latency decisions.</p></div><div><span>KEY RESULTS</span><p>The model reached 92.1% accuracy with 91.4% precision, 90.8% recall, and a 91.0% F1-score. The system classified food into edible, spoiling, and spoiled states while synchronizing live results and alerts through Firebase.</p></div><div><span>FUTURE SCOPE</span><p>Next steps include richer sensors, larger and more diverse datasets, predictive shelf-life estimation, lower-power hardware, location-aware pickup planning, and more advanced dashboards for donors, recipients, and administrators.</p></div></div>}
              <div className="tag-list publication-tags"><span>IoT</span><span>Edge AI</span><span>Random Forest</span><span>Firebase</span><span>Food Safety</span><span>Sustainability</span></div>
            </div>
          </TiltCard>
        </section>

        <section id="skills" className="section-pad skills-section">
          <div className="section-heading reveal"><span className="section-index">06 /</span><h2>The tools<br /><span>in my kit.</span></h2></div>
          <div className="skills-layout"><div className="skills-intro reveal"><p>A growing toolkit shaped by building, testing, and learning in public.</p><div className="skill-stat"><strong>6</strong><span>skill domains<br />& counting</span></div></div><div className="skill-groups">{skillGroups.map((group, i) => { const Icon = group.icon; return <div className={`skill-group reveal stagger stagger-${(i % 4) + 1}`} key={group.title}><div className="skill-group-title"><Icon size={18} /><h3>{group.title}</h3></div><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>; })}</div></div>
        </section>

        <section className="section-pad highlights-section">
          <div className="section-heading reveal"><span className="section-index">07 /</span><h2>Small wins.<br /><span>Real momentum.</span></h2></div>
          <div className="highlights-grid"><div className="highlight-card featured reveal"><Trophy size={28} /><span className="highlight-label">01 / Recognition</span><h3>1st Place</h3><p>SmartIDEAthon 2024<br /><span>for TrashFlow — an IoT-based smart waste segregation system</span></p></div><div className="highlight-card reveal reveal-delay"><Zap size={24} /><span className="highlight-label">02 / Leadership</span><h3>Spark 2025<br />TechNexus 2024</h3><p>Coordinated both events as an active member of the Technovate ECE student organization.</p></div><div className="highlight-card reveal reveal-delay-2"><Trophy size={24} /><span className="highlight-label">03 / Competition</span><h3>Top 3</h3><p>Mastermind Ultimate Quiz<br /><span>organized by Makers Hub, competing with UG & PG students across the city</span></p></div></div>
          <div className="languages reveal"><span className="highlight-label">LANGUAGES</span><div><span><Globe2 size={16} /> English</span><span><Globe2 size={16} /> Hindi</span><span><Globe2 size={16} /> Urdu</span></div></div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="contact-glow" aria-hidden="true" /><div className="section-heading reveal"><span className="section-index">08 /</span><h2>Let's build<br /><span>what's next.</span></h2></div>
          <div className="contact-layout"><div className="contact-copy reveal"><p>Have an idea, an opportunity, or a technical challenge worth exploring? I'd love to hear from you.</p><div className="contact-details"><a href="mailto:kulsumqavi@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small>kulsumqavi@gmail.com</span></a><a href="tel:+918660867203"><span className="contact-icon"><Phone size={18} /></span><span><small>PHONE</small>+91 8660867203</span></a><div className="contact-detail"><span className="contact-icon"><MapPin size={18} /></span><span><small>BASED IN</small>Bhatkal, Karnataka</span></div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18} /></span><span><small>CONNECT</small>LinkedIn profile <ExternalLink size={13} /></span></a></div></div><form className="contact-form reveal reveal-delay" onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Message<textarea name="message" rows={4} required placeholder="Tell me a little about your idea..." /></label><button className="button button-primary" type="submit">{sent ? <>Message ready to send <Check size={17} /></> : <>Send message <Send size={16} /></>}</button>{sent && <p className="form-note">Thanks — your message is ready. Please connect via email to complete the conversation.</p>}</form></div>
        </section>
      </main>
    </div>
  );
}

export default App;
