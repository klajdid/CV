export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Profile {
  fullName: string;
  title: string;
  location: string;
  summary: string;
  photoUrl: string | null;
}

export interface ContactInfo {
  email: string;
  /** WhatsApp number in international format, digits only, no + or spaces. e.g. "355691234567" */
  whatsappNumber: string;
  whatsappMessage: string;
}

export const PROFILE: Profile = {
  fullName: 'Klajdi Duçellari',
  title: 'Software Engineer',
  location: 'Tirana, Albania',
  summary:
    'Graduated in Business Informatics with a distinctive passion in Programming. Strong in design and integration with intuitive problem-solving skills. Ability to translate business requirements into technical solutions.',
  photoUrl: null
};

// Most recent first.
export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'CCBill',
    location: 'Malta',
    startDate: 'Jul 2024',
    endDate: 'Present',
    description:
      'Working on payment processing systems, including Mastercard data standard compliance, Spring Boot microservices, and ActiveMQ messaging infrastructure.',
    highlights: [
      'Investigated and implemented new Mastercard data standard fields, assessing their purpose and impact for compliance',
      'Developed and maintained microservices integrating with Apache ActiveMQ JMS queues for message consumption, production, and async processing',
      'Configured and monitored ActiveMQ Dead Letter Queues (AMQ.DLQ), automating alerts to reduce downtime and enable proactive resolution',
      'Upgraded Spring Boot microservices from Java 8 to Java 21, including migrating deprecated Hibernate/Spring Boot APIs',
      'Maintained test coverage above 80% and reduced security vulnerabilities to 0 for compliance purposes',
      'Managed ongoing patching cycles, keeping libraries and Spring Boot versions up to date'
    ]
  },
  {
    role: 'Software Developer',
    company: 'DatawizSoft',
    location: 'Tirana, Albania',
    startDate: 'Mar 2023',
    endDate: 'Jun 2024',
    description:
      'Built full-stack features across a healthcare chatbot platform and enterprise web applications using Angular and Spring Boot.',
    highlights: [
      'Built a healthcare chatbot: Angular frontend integrating the stream-chat library from scratch, and a Spring Boot backend customizing responses with OpenAI/ChatGPT assistants',
      'Built an enterprise frontend application (Comunicazioni Online) from scratch, including Angular routing, reusable components, and Spring Boot APIs',
      'Built a data pipeline (Aspen Reat) with Selenium web scraping, CSV parsing into PostgreSQL, background jobs with JobRunr, and an Angular Material table with lazy loading and filtering',
      'Deployed applications to AWS S3 and Elastic Beanstalk'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Coders shpk',
    location: 'Tirana, Albania',
    startDate: 'Mar 2022',
    endDate: 'Mar 2023',
    description:
      'Developed enterprise Angular/Spring Boot applications, including a courier management system and a workflow/decision engine for tax case management.',
    highlights: [
      'Built a Courier Management application with CRUD operations using the Presentational-Container pattern and NgRx component-store for unidirectional data flow',
      'Built a Spring Boot backend with Hibernate and PostgreSQL for the courier management system',
      'Contributed to eTax, a case management workflow/decision engine using BPMN, Nx micro-frontends with Module Federation, a dynamic form builder/renderer, and CQRS-based APIs'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Crux shpk',
    location: 'Tirana, Albania',
    startDate: 'Oct 2021',
    endDate: 'Mar 2022',
    description: 'Built Java applications and REST APIs using Spring Boot.',
    highlights: [
      'Built Java applications using Spring Boot and REST APIs',
      'Worked with MySQL/PostgreSQL databases and implemented CRUD operations',
      'Used Git, JUnit, and Agile methodologies for development and testing',
      'Assisted in debugging, testing, and code optimization'
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  { category: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'SQL'] },
  { category: 'Frameworks', items: ['Spring Boot', 'Angular', 'Hibernate', 'NgRx'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'GitLab', 'Bitbucket', 'Jenkins', 'Jira', 'Postman'] }
];

export const CONTACT: ContactInfo = {
  email: 'klajdiducellari3@gmail.com',
  whatsappNumber: '355675552407',
  whatsappMessage: 'Hi! I saw your CV page and would like to get in touch.'
};
