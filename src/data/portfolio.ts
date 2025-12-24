export const portfolio = {
    profile: {
    name: "Mehmet Acar",
    title: "Software Engineer",
    location: "Istanbul, Turkey",
    email: "mehmetacar683@gmail.com",
    phone: "+90 599 999 9999",
    website: "https://macar.space",
    github: "https://github.com/macaris64",
    linkedin: "https://linkedin.com/in/mehmetacar",
    twitter: "https://x.com/lumgoo",
    photo: "/images/profile/profile.jpg",
    bio: "Passionate software engineer with 6+ years of experience building scalable web applications and distributed systems. Specialized in TypeScript, React, Node.js, and cloud architecture. Strong advocate for clean code, test-driven development, and continuous learning."
    },
    
    about: {
    summary: "I’m a Software Engineer with 6+ years of experience specializing in full-stack web development across the EdTech and Media & Entertainment industries. Currently, I’m part of Udemy, where I work on developing AI-powered tools that enhance both the instructor and learner experience. I have hands-on experience building and maintaining large-scale systems that serve millions of users. I’m passionate about creating impactful, scalable products, continuously learning new technologies, and collaborating with teams to deliver meaningful user experiences.",
    highlights: [
            "6+ years of professional experience in full-stack web development",
            "Hands-on expertise in large-scale, high-traffic systems serving millions of users",
            "Designed and implemented scalable microservices architectures",
            "Built AI-powered tools enhancing instructor and learner experiences at Udemy",
            "Developed and maintained subscription management, user authentication, and video-on-demand platforms at Warner Bros. Discovery (BluTV)",
            "Experienced in SVOD / TVOD systems and monetization workflows for streaming services",
            "Collaborated cross-functionally with product and data teams to deliver impact-driven features",
            "Passionate about clean code, system design, and creating meaningful user experiences",
            "Participated twice in NASA Space Apps Challenge and recognized as a Global Nominee, showcasing a strong passion for innovation, teamwork, and solving real-world problems through technology"
        ]
    },
      
  experience: [
    {
    company: "Udemy",
    logo: "/images/companies/udemy-logo.png",
    position: "Software Engineer",
    location: "Istanbul, Türkiye - Remote",
    type: "Full-time",
    startDate: "2022-02",
    endDate: null,
    current: true,
    description: "Contributing to Udemy’s AI-driven transformation by developing large-scale platforms that enhance learning and teaching experiences. Involved in both the Assessment Platform and Instructor Insights teams, focusing on building intelligent, scalable, and data-driven systems.",
    achievements: [
        "Developed and maintained monolithic and microservice architectures powering Udemy’s Assessment Platform, enabling the creation and delivery of assessments to thousands of learners",
        "Built AI-assisted real-time insights tools for instructors, improving engagement and teaching effectiveness",
        "Contributed to the development of multiple instructor-facing tools such as announcements, course reviews, and interaction dashboards",
        "Worked closely with cross-functional teams to design and implement scalable, high-performance systems supporting millions of users",
        "Played an active role in Udemy’s AI initiatives by integrating machine learning capabilities into existing learning and analytics workflows"
    ],
    technologies: [
            "TypeScript",
            "React",
            "GraphQL",
            "Python",
            "Django",
            "Kotlin",
            "Spring Boot",
            "MySQL",
            "DynamoDB",
            "Redis",
            "Kafka",
            "Celery",
            "Docker",
            "Kubernetes"
        ]
    },
    {
        company: "Warner Bros. Discovery (BluTV)",
        logo: "/images/companies/wb-discovery.png",
        position: "Backend Engineer",
        location: "Istanbul, Türkiye - Remote",
        type: "Full-time",
        startDate: "2020-01",
        endDate: "2022-02",
        current: false,
        description: "Contributed to BluTV’s digital transformation journey from a growing startup into a large-scale media and entertainment platform. Worked on core backend systems that powered subscription, authentication, and video-on-demand services for millions of users.",
        achievements: [
          "Developed and maintained backend services supporting BluTV’s subscription, authentication, and video-on-demand platforms",
          "Contributed to the migration from a monolithic architecture to microservices and API gateway-based infrastructure",
          "Implemented scalable backend components improving reliability and performance across core streaming services",
          "Integrated secure authentication and authorization mechanisms leveraging OAuth 2.0 standards",
          "Collaborated with product and infrastructure teams to enhance user experience and platform stability",
          "Played an active role in transforming BluTV into a large-scale media and entertainment ecosystem prior to its acquisition by Warner Bros. Discovery"
        ],
        technologies: [
          "Python",
          "Tornado",
          "Sanic",
          "Flask",
          "Node.js",
          "MongoDB",
          "Docker",
          "OAuth2.0",
          "REST",
          "API Gateway",
          "SVOD",
          "TVOD",
          "Video-on-demand"
        ]
      },
    {
      company: "eloop Digital Solutions",
      logo: "/images/companies/eloop-logo.jpg",
      position: "Software Developer",
      location: "Denizli, Türkiye",
      type: "Full-time",
      startDate: "2019-06",
      endDate: "2019-10",
      current: false,
      description: "Worked as a Web Developer at eloop Digital Solution, a company providing cloud-based semantic integration software for e-commerce and e-conversion, helping SMEs overcome challenges in accessing global marketing. Contributed to B2B and B2C web projects with a focus on usability and performance.",
      achievements: [
        "Developed and maintained web applications in e-commerce, B2B, and B2C domains",
        "Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript",
        "Implemented backend functionality and API integrations with PHP-based frameworks",
        "Collaborated with clients and project managers to analyze system requirements and deliver tailored digital solutions",
        "Prepared system analysis reports and project documentation to support product lifecycle"
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "REST APIs"
      ]
    }
  ],

  education: [
    {
      institution: "Pamukkale University",
      logo: "/images/education/pau-logo.png",
      degree: "Bachelor of Science",
      field: "Computer Engineering",
      location: "Denizli, Türkiye",
      startDate: "2015-09",
      endDate: "2019-06",
      gpa: "2.99/4.0",
      description: "Comprehensive education in computer science fundamentals, software engineering, and system design.",
      achievements: [
        "President of IT Society",
      ]
    }
  ],

  projects: [
    {
      name: "OpenBio Cosmos (NASA Space Apps '25)",
      description: " OpenBio Cosmos is an AI-powered knowledge atlas that transforms decades of NASA and NIH bioscience data into an interactive, explorable platform. Using datasets from NASA’s Open Science Data Repository (OSDR) and NIH PubMed, we developed a lightweight web application that classifies, visualizes, and connects biological studies through an intuitive interface. Our system parses XML data, processes it with a large language model (LLM), and generates structured JSON outputs that feed into three main tools — the Atlas, Knowledge Atlas, and Article Explorer. This approach helps researchers quickly identify relationships between experiments, organs, and biological systems, bridging the gap between raw data and scientific discovery. By integrating 5,000+ articles with over 90% AI classification accuracy, OpenBio Cosmos directly addresses the “Build a Space Biology Knowledge Engine” challenge — making space bioscience more accessible, searchable, and connected. It empowers the community to Learn, Launch, and Lead the next era of human space exploration.",
      image: "/images/projects/nasa-logo.jpg",
      url: "https://openbio.earth/",
      github: "https://github.com/macaris64/openbio-cosmos",
      technologies: ["Three.js", "Javascript", "NASA OSDR", "NIH PubMed", "OpenAI", "LLM", "XML"],
      highlights: [
        "NASA Space Apps '25",
        "Build a Space Biology Knowledge Engine",
        "https://www.spaceappschallenge.org/2025/find-a-team/habcraft/"
      ],
      date: "2025"
    },
    {
      name: "GeoEqua (NASA Space Apps '24)",
      description: "A web application developed for the Human Development & the Environment challenge at the NASA Space Apps '24 hackathon. GeoEqua is a 'The Climate Change and Gender Inequality Risk Mapping Tool'. The project has been awarded the NASA 2024 Global Nominee.",
      image: "/images/projects/nasa-logo.jpg",
      url: "https://geoequa.vercel.app/",
      github: "https://github.com/macaris64/geoequa",
      technologies: ["Typescript", "React", "OpenAI", "LLM"],
      highlights: [
        "NASA Space Apps '24",
        "Human Development & the Environment",
        "United Nations Sustainable Development Goals (UN SDGs)",
        "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/geoequa/"
      ],
      date: "2024"
    },
  ],

  certifications: [
    {
      name: "NASA Space Apps '25",
      issuer: "NASA",
      logo: "/images/projects/nasa-logo.jpg",
      date: "2025-10",
      credentialId: false,
      url: "https://github.com/macaris64/certificates/blob/master/nasa-space-apps-2025-mehmet-acar.pdf"
    },
    {
      name: "AI Fluency Framework & Foundations",
      issuer: "Anthropic",
      logo: "/images/certifications/anthropic-logo.png",
      date: "2025-09",
      credentialId: "umrroeydywuz",
      url: "https://verify.skilljar.com/c/umrroeydywuz"
    },
    {
      name: "Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      logo: "/images/certifications/ibm-logo.png",
      date: "2025-08",
      credentialId: "66fb801e-52f5-477d-a122-7448baaaad3a",
      url: "https://www.credly.com/badges/66fb801e-52f5-477d-a122-7448baaaad3a/public_url"
    },
    {
      name: "Astronomy: Exploring Time and Space",
      issuer: "University of Arizona",
      logo: "/images/certifications/uoa-logo.png",
      date: "2025-03",
      credentialId: "TWXMY7MVPSQB",
      url: "https://coursera.org/verify/TWXMY7MVPSQB"
    },
    {
        name: "NASA Space Apps '24",
        issuer: "NASA",
        logo: "/images/projects/nasa-logo.jpg",
        date: "2024-10",
        credentialId: false,
        url: "https://github.com/macaris64/certificates/blob/master/nasa-space-apps-2024-mehmet-acar.pdf"
    },
    {
        name: "Amplitude Foundations - Analytics",
        issuer: "Amplitude",
        logo: "/images/certifications/amplitude-logo.png",
        date: "2024-10",
        credentialId: "5c79b9c5-490d-4da2-8c94-e0ad7f8a9601",
        url: "https://www.credly.com/badges/5c79b9c5-490d-4da2-8c94-e0ad7f8a9601/linked_in_profile"
    },
    {
        name: "Data Pipelines and Workflow Scheduling",
        issuer: "Miuul",
        logo: "/images/certifications/miuul-logo.png",
        date: "2024-03",
        credentialId: "ppm9qyojmi",
        url: "https://learning.miuul.com/certificates/ppm9qyojmi"
    },
    {
        name: "Let's Up",
        issuer: "TEB",
        logo: "/images/certifications/teb-logo.png",
        date: "2019-10",
        credentialId: "",
        url: ""
    }
  ],

  skills: {
    "Languages": ["TypeScript", "JavaScript", "Python", "Kotlin", "SQL"],
    "Frontend": ["React", "Next.js", "Mobx", "GraphQL"],
    "Backend": ["Node.js", "Django", "Spring Boot", "FastAPI"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "CI/CD"],
    "Tools & Practices": ["Git", "Jest", "Microservices", "REST APIs", "GraphQL", "Agile/Scrum", "gRPC"]
  },

  volunteer: [
    {
      organization: "IT Society",
      logo: "/images/education/pau-logo.png",
      role: "President",
      startDate: "2018-05",
      endDate: "2019-09",
      current: false,
      description: "",
      activities: [
        "Coding workshops"
      ]
    },
    {
        organization: "IT Society",
        logo: "/images/education/pau-logo.png",
        role: "Member",
        startDate: "2016-09",
        endDate: "2018-05",
        current: false,
        description: "",
        activities: [
          "BİLMÖK '17",
          "Coding workshops"
        ]
      },
    {
      organization: "Yeşilay",
      logo: "/images/volunteer/yesilay-logo.png",
      role: "Volunteer",
      startDate: "2014-10",
      endDate: "2015-08",
      current: false,
      description: "",
      activities: [
        "SAÜ Genç Yeşilay",
        "https://www.instagram.com/saugencyesilay/"
      ]
    }
  ]
};

export type Portfolio = typeof portfolio;

