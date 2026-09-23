import { Internship } from '../types';

export const SAMPLE_INTERNSHIPS: Internship[] = [
  {
    id: 'int-001',
    title: 'Frontend Web Engineer Intern',
    company: 'Lumina Interactive',
    companyLogoText: 'LI',
    logoBg: 'bg-indigo-600',
    logoColor: 'text-white',
    location: 'Bangalore, India',
    workMode: 'Hybrid',
    domain: 'Web Development',
    duration: '6 Months',
    durationMonths: 6,
    stipend: '$1,200/mo (₹1,00,000/mo)',
    stipendValue: 1200,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'REST APIs'],
    postedDate: '1 day ago',
    postedTimestamp: Date.now() - 1 * 24 * 60 * 60 * 1000,
    shortDescription: 'Build high-performance web interfaces and component design systems for consumer-facing SaaS products.',
    about: 'Lumina Interactive crafts next-generation digital interfaces for fast-growing global startups. As a Frontend Web Engineer Intern, you will collaborate closely with product designers and senior engineers to build pixel-perfect, accessible, and responsive user experiences.',
    responsibilities: [
      'Develop modern client interfaces using React 19, TypeScript, and modern CSS.',
      'Contribute to our internal design system and reusable component libraries.',
      'Optimize application performance, bundle size, and Core Web Vitals.',
      'Integrate RESTful and GraphQL backend endpoints with robust client caching.',
      'Participate in code reviews, sprint planning, and team architecture discussions.'
    ],
    requiredSkills: [
      'Strong proficiency in JavaScript (ES6+), HTML5, and modern CSS.',
      'Hands-on experience building projects with React and TypeScript.',
      'Understanding of responsive design principles and cross-browser quirks.',
      'Familiarity with Git version control and collaborative workflows.'
    ],
    eligibility: [
      'Currently pursuing B.Tech/B.E./B.S./M.C.A. in Computer Science, IT, or related fields.',
      'Graduating in 2026, 2027, or 2028.',
      'Available for full-time 6 months hybrid internship.'
    ],
    benefits: [
      'Competitive monthly stipend with bi-annual performance bonus.',
      'Pre-Placement Offer (PPO) opportunity based on evaluation.',
      'Direct 1:1 mentorship from Staff Engineers.',
      'Flexible working hours and modern ergonomic equipment provided.'
    ],
    deadline: 'Oct 30, 2026',
    featured: true,
    applicantsCount: 42
  },
  {
    id: 'int-002',
    title: 'Machine Learning Research Intern',
    company: 'Synthetix AI Labs',
    companyLogoText: 'SA',
    logoBg: 'bg-emerald-600',
    logoColor: 'text-white',
    location: 'San Francisco, CA',
    workMode: 'Remote',
    domain: 'AI / Machine Learning',
    duration: '3 Months',
    durationMonths: 3,
    stipend: '$3,800/mo',
    stipendValue: 3800,
    skills: ['PyTorch', 'Python', 'LLM Fine-tuning', 'Hugging Face', 'Data Preprocessing'],
    postedDate: '2 days ago',
    postedTimestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
    shortDescription: 'Work on cutting-edge generative AI models, synthetic dataset curation, and parameter-efficient fine-tuning.',
    about: 'Synthetix AI Labs is an applied artificial intelligence research team creating domain-adapted reasoning models for enterprise workflows. You will experiment with transformer architectures, synthetic dataset generation, and distillation.',
    responsibilities: [
      'Train, fine-tune, and evaluate deep learning models using PyTorch and Hugging Face.',
      'Implement data preprocessing, augmentation pipelines, and automated filtering.',
      'Benchmark open-source foundational models against proprietary task suites.',
      'Co-author experimental documentation and contribute to open-source model repositories.'
    ],
    requiredSkills: [
      'Proficiency in Python and deep learning libraries (PyTorch or JAX).',
      'Solid foundational math: linear algebra, calculus, and probability.',
      'Experience with Hugging Face Transformers, PEFT, or LoRA techniques.',
      'Demonstrated portfolio or Kaggle / academic research project.'
    ],
    eligibility: [
      'B.S./M.S./Ph.D. student in Computer Science, AI, Mathematics, or Data Science.',
      'Strong analytical and problem-solving skills.',
      'Minimum GPA of 3.3/4.0 or 7.5/10.0 equivalent.'
    ],
    benefits: [
      'Top-tier remote stipend in USD with cloud compute credits (H100/A100 clusters).',
      'Opportunity to publish workshop papers or open-source weights.',
      'Direct mentorship from AI researchers with top conference records.'
    ],
    deadline: 'Nov 15, 2026',
    featured: true,
    applicantsCount: 78
  },
  {
    id: 'int-003',
    title: 'Full Stack Engineering Intern',
    company: 'Velocity Stack Labs',
    companyLogoText: 'VS',
    logoBg: 'bg-violet-600',
    logoColor: 'text-white',
    location: 'Austin, TX',
    workMode: 'Hybrid',
    domain: 'Full Stack Development',
    duration: '6 Months',
    durationMonths: 6,
    stipend: '$2,800/mo',
    stipendValue: 2800,
    skills: ['Node.js', 'React', 'PostgreSQL', 'TypeScript', 'Docker'],
    postedDate: '3 days ago',
    postedTimestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
    shortDescription: 'Build end-to-end features spanning React web clients, Express/Node microservices, and relational databases.',
    about: 'Velocity Stack Labs delivers high-throughput commerce infrastructure for omnichannel retailers. Our interns write production code starting in week two, with supportive pairing and architectural guidance.',
    responsibilities: [
      'Develop scalable RESTful and event-driven APIs using Node.js and TypeScript.',
      'Build responsive UI screens and stateful forms in React.',
      'Write database migrations and query optimizations for PostgreSQL.',
      'Implement automated unit and integration tests with Vitest and Playwright.',
      'Deploy services via Docker containers in staging and production pipelines.'
    ],
    requiredSkills: [
      'Familiarity with full-stack JavaScript/TypeScript ecosystem.',
      'Basic understanding of relational databases and SQL queries.',
      'Good comprehension of Git, npm/yarn, and API testing with Postman/Insomnia.'
    ],
    eligibility: [
      'Students in final or pre-final year of undergraduate studies.',
      'Available for 20-40 hours per week depending on semester schedule.'
    ],
    benefits: [
      'Flexible hybrid schedule with modern tech equipment.',
      'Full-time placement consideration post-internship.',
      'Comprehensive wellness and learning stipend.'
    ],
    deadline: 'Nov 05, 2026',
    featured: true,
    applicantsCount: 56
  },
  {
    id: 'int-004',
    title: 'Information Security & Cyber Analyst Intern',
    company: 'Aegis CyberGuard',
    companyLogoText: 'AC',
    logoBg: 'bg-rose-600',
    logoColor: 'text-white',
    location: 'Washington, DC',
    workMode: 'Remote',
    domain: 'Cyber Security',
    duration: '4 Months',
    durationMonths: 4,
    stipend: '$2,400/mo',
    stipendValue: 2400,
    skills: ['Penetration Testing', 'Wireshark', 'Python', 'OWASP Top 10', 'Linux'],
    postedDate: 'Just now',
    postedTimestamp: Date.now() - 2 * 60 * 60 * 1000,
    shortDescription: 'Assist in vulnerability assessments, security log monitoring, and threat intelligence synthesis.',
    about: 'Aegis CyberGuard provides proactive defense and threat simulation for financial institutions. Interns gain hands-on exposure to defensive blue-team operations, vulnerability scanning, and compliance audits.',
    responsibilities: [
      'Analyze network traffic logs, firewall metrics, and SIEM security alerts.',
      'Perform automated vulnerability scans and verify findings against OWASP standards.',
      'Help draft incident response playbooks and security advisory bulletins.',
      'Develop Python automation scripts to aggregate threat intelligence feeds.'
    ],
    requiredSkills: [
      'Basic knowledge of TCP/IP networking, DNS, and OSI layer protocols.',
      'Familiarity with Linux command line and system administration basics.',
      'Understanding of common vulnerabilities: SQLi, XSS, CSRF, and authentication bypasses.',
      'Curiosity for ethical hacking, CTF challenges, or TryHackMe/HackTheBox.'
    ],
    eligibility: [
      'Undergraduate or graduate student in Cybersecurity, Computer Networks, or CS.',
      'Clean background check and commitment to ethical security guidelines.'
    ],
    benefits: [
      'Sponsorship for CompTIA Security+ or CEH examination upon successful term.',
      '100% remote flexibility with home office allowance.',
      'Guidance from seasoned CISSPs and Red Team leads.'
    ],
    deadline: 'Nov 20, 2026',
    featured: false,
    applicantsCount: 31
  },
  {
    id: 'int-005',
    title: 'Data Science & Analytics Intern',
    company: 'PulseMetrics Analytics',
    companyLogoText: 'PM',
    logoBg: 'bg-sky-600',
    logoColor: 'text-white',
    location: 'New York, NY',
    workMode: 'Hybrid',
    domain: 'Data Science',
    duration: '6 Months',
    durationMonths: 6,
    stipend: '$2,600/mo',
    stipendValue: 2600,
    skills: ['Python', 'SQL', 'Pandas', 'Tableau', 'Statistical Analysis'],
    postedDate: '4 days ago',
    postedTimestamp: Date.now() - 4 * 24 * 60 * 60 * 1000,
    shortDescription: 'Transform raw behavioral telemetry into actionable business dashboards and predictive cohort models.',
    about: 'PulseMetrics helps subscription commerce platforms understand customer churn, lifetime value, and marketing attribution through rigorous statistical modeling and intuitive visual analytics.',
    responsibilities: [
      'Formulate complex SQL queries to extract cohort datasets from data warehouses.',
      'Cleanse, impute, and explore messy transactional telemetry using Python (Pandas/Polars).',
      'Construct automated executive dashboards in Tableau or PowerBI.',
      'Run A/B test power analysis and statistical hypothesis validation.'
    ],
    requiredSkills: [
      'Strong grasp of SQL (window functions, joins, aggregations).',
      'Proficiency with Python data libraries: Pandas, NumPy, Scikit-learn, Seaborn.',
      'Understanding of statistical testing: p-values, confidence intervals, regression analysis.'
    ],
    eligibility: [
      'Majors in Data Science, Statistics, Mathematics, Economics, or Computer Science.',
      'Expected graduation between Summer 2026 and Winter 2027.'
    ],
    benefits: [
      'Real-world portfolio projects using multi-terabyte production data.',
      'Mentorship from Senior Data Scientists and Analytics Directors.',
      'Hybrid office in Manhattan with transit stipend and catered lunches.'
    ],
    deadline: 'Nov 12, 2026',
    featured: false,
    applicantsCount: 64
  },
  {
    id: 'int-006',
    title: 'Cloud Infrastructure & DevOps Intern',
    company: 'StratusCloud Tech',
    companyLogoText: 'SC',
    logoBg: 'bg-cyan-600',
    logoColor: 'text-white',
    location: 'Seattle, WA',
    workMode: 'Remote',
    domain: 'Cloud Computing',
    duration: '3 Months',
    durationMonths: 3,
    stipend: '$3,200/mo',
    stipendValue: 3200,
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Linux'],
    postedDate: '3 days ago',
    postedTimestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
    shortDescription: 'Build automated CI/CD deployment pipelines, manage container clusters, and practice Infrastructure-as-Code.',
    about: 'StratusCloud Tech builds autonomous reliability management tooling for hybrid cloud environments. Interns work directly on container orchestration, cloud telemetry, and automated deployment pipelines.',
    responsibilities: [
      'Write declarative Infrastructure-as-Code modules with Terraform.',
      'Build and refine GitHub Actions workflows for continuous integration and delivery.',
      'Assist in provisioning Kubernetes namespaces and configuring ingress controllers.',
      'Monitor distributed traces and log pipelines using Prometheus and Grafana.'
    ],
    requiredSkills: [
      'Hands-on comfort with Linux/Unix shell environments and bash scripting.',
      'Foundational understanding of cloud architecture concepts (VPCs, subnets, IAM).',
      'Experience containerizing applications with Docker.',
      'Familiarity with Git branching strategies.'
    ],
    eligibility: [
      'College students with a passion for systems, reliability engineering, and cloud platforms.',
      'Self-driven learner with strong documentation habits.'
    ],
    benefits: [
      'AWS / CKA certification exam vouchers covered.',
      'Full home office equipment stipend ($800 one-time).',
      'Flexible hours across US and European timezones.'
    ],
    deadline: 'Nov 18, 2026',
    featured: false,
    applicantsCount: 39
  },
  {
    id: 'int-007',
    title: 'Product Design & UI/UX Intern',
    company: 'Aurora Studios',
    companyLogoText: 'AS',
    logoBg: 'bg-purple-600',
    logoColor: 'text-white',
    location: 'London, UK',
    workMode: 'Hybrid',
    domain: 'UI/UX',
    duration: '6 Months',
    durationMonths: 6,
    stipend: '£1,800/mo ($2,300/mo)',
    stipendValue: 2300,
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    postedDate: '5 days ago',
    postedTimestamp: Date.now() - 5 * 24 * 60 * 60 * 1000,
    shortDescription: 'Design intuitive student and educator journey maps, high-fidelity prototypes, and cohesive UI tokens in Figma.',
    about: 'Aurora Studios is an award-winning digital design agency crafting thoughtful digital experiences for social impact and education startups. You will work on user empathy, rapid interaction prototypes, and component design tokens.',
    responsibilities: [
      'Conduct qualitative student interviews and synthesize user journey maps.',
      'Design wireframes, task flows, and production-ready Figma components.',
      'Collaborate with developers to ensure faithful implementation of interactions.',
      'Maintain accessibility standards (WCAG 2.1 AA) across typography and color palettes.'
    ],
    requiredSkills: [
      'Demonstrated portfolio showing UX case studies, wireframes, and UI craft.',
      'Advanced proficiency in Figma (auto-layout, components, variables).',
      'Strong eye for typography, spatial scale, micro-copy, and information hierarchy.'
    ],
    eligibility: [
      'Students in Design, HCI, Interactive Media, or self-taught designers with strong portfolio.',
      'Available for hybrid work in Central London.'
    ],
    benefits: [
      'Portfolio review and mentorship by former Big Tech Design Leads.',
      'Access to premium design tools, typography licenses, and industry books.',
      'Regular team lunches, design crits, and exhibition passes.'
    ],
    deadline: 'Nov 10, 2026',
    featured: true,
    applicantsCount: 52
  },
  {
    id: 'int-008',
    title: 'Enterprise Java Platform Intern',
    company: 'Apex FinSystems',
    companyLogoText: 'AF',
    logoBg: 'bg-amber-600',
    logoColor: 'text-white',
    location: 'Hyderabad, India',
    workMode: 'On-site',
    domain: 'Java Development',
    duration: '6 Months',
    durationMonths: 6,
    stipend: '₹75,000/mo ($900/mo)',
    stipendValue: 900,
    skills: ['Java 21', 'Spring Boot', 'Microservices', 'Hibernate', 'MySQL', 'Kafka'],
    postedDate: '6 days ago',
    postedTimestamp: Date.now() - 6 * 24 * 60 * 60 * 1000,
    shortDescription: 'Engineer resilient transaction processing services using modern Java 21, Spring Boot 3, and Apache Kafka.',
    about: 'Apex FinSystems engineers mission-critical clearing and settlement engines for banking networks. Our interns gain deep experience in multi-threading, concurrency, distributed caching, and transactional integrity.',
    responsibilities: [
      'Design and implement microservices in Spring Boot with clean domain architecture.',
      'Construct high-speed asynchronous message queues using Apache Kafka.',
      'Write optimized relational database queries and JPA/Hibernate entities.',
      'Ensure zero-defect tolerance through JUnit 5 and Mockito test coverage.'
    ],
    requiredSkills: [
      'Deep grasp of Object-Oriented Programming (OOP) and Java core syntax.',
      'Familiarity with Spring Boot, REST APIs, and dependency injection.',
      'Basic knowledge of relational databases and transaction properties (ACID).'
    ],
    eligibility: [
      'Final year B.E./B.Tech/M.Tech in CS/IT/ECE.',
      'Willing to work on-site at Hyderabad financial district facility.'
    ],
    benefits: [
      'High conversion rate to full-time Associate Software Engineer.',
      'On-campus dining, gym, and shuttle transportation.',
      'Hands-on coaching in high-volume enterprise systems architecture.'
    ],
    deadline: 'Nov 25, 2026',
    featured: false,
    applicantsCount: 88
  },
  {
    id: 'int-009',
    title: 'Python Automation & Backend Intern',
    company: 'Cobalt DataWorks',
    companyLogoText: 'CD',
    logoBg: 'bg-teal-600',
    logoColor: 'text-white',
    location: 'Berlin, Germany',
    workMode: 'Remote',
    domain: 'Python Development',
    duration: '4 Months',
    durationMonths: 4,
    stipend: '€1,900/mo ($2,050/mo)',
    stipendValue: 2050,
    skills: ['Python 3.12', 'FastAPI', 'Celery', 'Redis', 'BeautifulSoup', 'PostgreSQL'],
    postedDate: '1 week ago',
    postedTimestamp: Date.now() - 7 * 24 * 60 * 60 * 1000,
    shortDescription: 'Build high-performance web scrapers, data pipelines, and async REST endpoints with FastAPI and Celery.',
    about: 'Cobalt DataWorks delivers market intelligence and price optimization engines for European retailers. As a Python Intern, you will engineer asynchronous data harvesting bots and lightning-fast FastAPI microservices.',
    responsibilities: [
      'Develop distributed async scraping workers using Playwright and aiohttp.',
      'Build and document public-facing REST endpoints with FastAPI and Pydantic.',
      'Manage background task queues using Celery, Redis, and message brokering.',
      'Write thorough unit tests and mock external web endpoints.'
    ],
    requiredSkills: [
      'Strong command of Python: generators, async/await, decorators, and typing.',
      'Experience with web frameworks (FastAPI, Flask, or Django).',
      'Understanding of HTTP headers, cookies, proxies, and bot detection mitigation.'
    ],
    eligibility: [
      'Students in computer science or self-taught programmers with verified GitHub repos.',
      'Proficiency in spoken and written English.'
    ],
    benefits: [
      'Fully remote with flexible European workday hours.',
      'Dedicated learning budget for courses, books, and conferences.',
      'Direct peer programming with senior backend architects.'
    ],
    deadline: 'Nov 01, 2026',
    featured: false,
    applicantsCount: 47
  },
  {
    id: 'int-010',
    title: 'Systems & Backend Software Intern',
    company: 'NexaCore Systems',
    companyLogoText: 'NC',
    logoBg: 'bg-slate-700',
    logoColor: 'text-white',
    location: 'San Jose, CA',
    workMode: 'On-site',
    domain: 'Software Development',
    duration: '3 Months',
    durationMonths: 3,
    stipend: '$4,200/mo',
    stipendValue: 4200,
    skills: ['Go', 'C++', 'gRPC', 'Distributed Systems', 'Linux Kernel', 'Memory Management'],
    postedDate: '1 week ago',
    postedTimestamp: Date.now() - 8 * 24 * 60 * 60 * 1000,
    shortDescription: 'Architect low-latency distributed storage controllers, RPC transport protocols, and edge compute services.',
    about: 'NexaCore Systems builds distributed storage backplanes for hyperscale clouds. Interns tackle hard engineering problems at the boundary between application code and operating system primitives.',
    responsibilities: [
      'Implement high-throughput RPC endpoints using Go and Protocol Buffers.',
      'Profile memory allocations and optimize CPU cache line efficiency.',
      'Write stress tests simulating network partitions and disk failures.',
      'Participate in architecture RFC debates and design document reviews.'
    ],
    requiredSkills: [
      'Solid foundations in data structures, algorithms, and OS concepts.',
      'Fluency in compiled systems languages (Go, C++, or Rust).',
      'Understanding of concurrency, mutexes, channels, and race conditions.'
    ],
    eligibility: [
      'CS/CE undergraduate or graduate student graduating within 18 months.',
      'Passionate about systems engineering and systems-level problem solving.'
    ],
    benefits: [
      'Top-tier Silicon Valley compensation package with housing stipend.',
      'Daily gourmet meals and state-of-the-art developer hardware.',
      'High likelihood of return full-time offer for standout performers.'
    ],
    deadline: 'Nov 30, 2026',
    featured: true,
    applicantsCount: 95
  },
  {
    id: 'int-011',
    title: 'Cloud Security & Compliance Intern',
    company: 'HyperScale Networks',
    companyLogoText: 'HN',
    logoBg: 'bg-blue-600',
    logoColor: 'text-white',
    location: 'Toronto, Canada',
    workMode: 'Hybrid',
    domain: 'Cloud Computing',
    duration: '4 Months',
    durationMonths: 4,
    stipend: 'CAD $3,600/mo ($2,650/mo)',
    stipendValue: 2650,
    skills: ['AWS IAM', 'Azure', 'Kubernetes Security', 'SOC2', 'Python', 'CloudTrail'],
    postedDate: '2 weeks ago',
    postedTimestamp: Date.now() - 12 * 24 * 60 * 60 * 1000,
    shortDescription: 'Automate security posture audits, enforce least-privilege IAM policies, and scan container workloads.',
    about: 'HyperScale Networks provides hybrid cloud interconnects. Interns gain industry-grade expertise securing multi-cloud AWS and Azure topologies against modern lateral movement attacks.',
    responsibilities: [
      'Audit cloud IAM roles and automate removal of excessive permissions.',
      'Integrate container vulnerability scanners into GitOps delivery pipelines.',
      'Analyze CloudTrail and Azure Monitor activity logs for anomalous spikes.',
      'Help compile compliance evidence for SOC2 and ISO27001 certifications.'
    ],
    requiredSkills: [
      'Basic knowledge of AWS or Microsoft Azure core services.',
      'Interest in cybersecurity frameworks and cloud access models.',
      'Scripting ability in Python or Bash for report generation.'
    ],
    eligibility: [
      'Students enrolled in Information Technology, Software Engineering, or Cybersecurity.',
      'Legally eligible to work in Canada or remote equivalence.'
    ],
    benefits: [
      'Hands-on experience with commercial enterprise security platforms.',
      'Certification exam support (AWS Solutions Architect / Security Specialty).',
      'Collaborative team culture with weekly tech talks and knowledge shares.'
    ],
    deadline: 'Dec 05, 2026',
    featured: false,
    applicantsCount: 28
  },
  {
    id: 'int-012',
    title: 'Deep Learning & Computer Vision Intern',
    company: 'QuantEdge Labs',
    companyLogoText: 'QE',
    logoBg: 'bg-indigo-700',
    logoColor: 'text-white',
    location: 'Bengaluru, India',
    workMode: 'On-site',
    domain: 'AI / Machine Learning',
    duration: '6 Months',
    durationMonths: 6,
    stipend: '₹60,000/mo ($720/mo)',
    stipendValue: 720,
    skills: ['OpenCV', 'PyTorch', 'YOLO', 'Object Detection', 'TensorRT', 'C++'],
    postedDate: '3 days ago',
    postedTimestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
    shortDescription: 'Develop real-time object tracking, facial feature alignment, and edge model optimization for IoT robotics.',
    about: 'QuantEdge Labs develops autonomous sensory modules for industrial inspection and edge robotics. We train custom deep neural nets that execute on low-power Jetson Nano and embedded hardware.',
    responsibilities: [
      'Train and benchmark state-of-the-art vision models (YOLOv10, Segment Anything).',
      'Optimize neural networks for embedded deployment with TensorRT and ONNX.',
      'Curate, annotate, and augment specialized industrial defect image sets.',
      'Deploy inference pipelines on Linux embedded devices.'
    ],
    requiredSkills: [
      'Strong programming in Python and familiarity with C++.',
      'Experience with computer vision libraries (OpenCV, TorchVision).',
      'Good understanding of convolutional neural nets and transformer backbones.'
    ],
    eligibility: [
      '3rd or 4th year Engineering students in CS, ECE, Data Science, or Robotics.',
      'Demonstrated project work in image processing or computer vision.'
    ],
    benefits: [
      'Access to dedicated GPU workstations and robotics hardware lab.',
      'Hands-on exposure to both AI model research and physical deployment.',
      'High conversion potential for full-time research positions.'
    ],
    deadline: 'Nov 22, 2026',
    featured: false,
    applicantsCount: 45
  },
  {
    id: 'int-013',
    title: 'React Native Mobile Developer Intern',
    company: 'NovaWave Tech',
    companyLogoText: 'NW',
    logoBg: 'bg-emerald-700',
    logoColor: 'text-white',
    location: 'Remote',
    workMode: 'Remote',
    domain: 'Web Development',
    duration: '3 Months',
    durationMonths: 3,
    stipend: '$1,500/mo',
    stipendValue: 1500,
    skills: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Mobile UI'],
    postedDate: '5 days ago',
    postedTimestamp: Date.now() - 5 * 24 * 60 * 60 * 1000,
    shortDescription: 'Create fluid cross-platform mobile apps for iOS and Android using React Native and Expo.',
    about: 'NovaWave Tech builds mobile wellness companions and community tools. We value delightful gesture interactions, offline-first reliability, and clean component architecture.',
    responsibilities: [
      'Build cross-platform mobile screens in React Native and Expo.',
      'Implement smooth 60fps animations with React Native Reanimated.',
      'Integrate push notifications, camera, and biometric device sensors.',
      'Conduct manual and automated testing across iOS and Android simulators.'
    ],
    requiredSkills: [
      'Experience building web or mobile apps with React or React Native.',
      'Good comprehension of mobile UX conventions on iOS and Android.',
      'Strong TypeScript skills.'
    ],
    eligibility: [
      'Enrolled college student or self-taught developer with published demo app.',
      'Reliable high-speed internet for remote standups.'
    ],
    benefits: [
      'App Store / Play Store publishing credits and guidance.',
      '100% remote flexibility with asynchronous sprint check-ins.',
      'Letter of recommendation and LinkedIn endorsement.'
    ],
    deadline: 'Nov 14, 2026',
    featured: false,
    applicantsCount: 36
  },
  {
    id: 'int-014',
    title: 'Data Engineering & Pipeline Intern',
    company: 'DataPrism Systems',
    companyLogoText: 'DP',
    logoBg: 'bg-orange-600',
    logoColor: 'text-white',
    location: 'Chicago, IL',
    workMode: 'Hybrid',
    domain: 'Data Science',
    duration: '6 Months',
    durationMonths: 6,
    stipend: '$2,700/mo',
    stipendValue: 2700,
    skills: ['Python', 'Apache Spark', 'SQL', 'Airflow', 'Snowflake', 'ETL'],
    postedDate: '1 week ago',
    postedTimestamp: Date.now() - 6 * 24 * 60 * 60 * 1000,
    shortDescription: 'Construct reliable ETL ingestion pipelines, manage Airflow DAGs, and curate dimensional data warehouse tables.',
    about: 'DataPrism Systems connects legacy enterprise silos with modern cloud data warehouses like Snowflake. Our interns learn to write enterprise-grade extraction and transformation jobs.',
    responsibilities: [
      'Write clean, modular Apache Spark and Python transformations.',
      'Schedule and monitor data pipelines using Apache Airflow.',
      'Model dimension and fact tables for fast business intelligence querying.',
      'Implement data quality validation checks to catch nulls and anomalies early.'
    ],
    requiredSkills: [
      'Proficiency in SQL and relational database schemas.',
      'Comfortable writing clean, testable Python code.',
      'Understanding of basic ETL/ELT concepts and columnar storage.'
    ],
    eligibility: [
      'Undergraduate or graduate student in Information Systems or CS.',
      'Available for 6 months hybrid internship.'
    ],
    benefits: [
      'Experience with modern data stack tools (Snowflake, dbt, Airflow).',
      'Coaching from senior principal data architects.',
      'Downtown Chicago office with commuter transit benefits.'
    ],
    deadline: 'Nov 28, 2026',
    featured: false,
    applicantsCount: 33
  }
];
