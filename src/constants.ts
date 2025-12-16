import { Project, Experience, Education, BlogPost, Award, BucketItem, OfflineGalleryItem } from '../types';

export const SOCIALS = {
  email: "buvanipai@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  phone: "+1 (872) 239-1418"
};

// Logos - Renamed to expect local files in /images/ folder
const LOGOS = {
  aws: "/images/logo-aws.png",
  northwestern: "/images/logo-northwestern.png",
  devpost: "/images/logo-devpost.png",
  argonne: "/images/logo-argonne.png",
  happyworld: "/images/logo-happyworld.png",
};

export const AWARDS: Award[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Associate Level Certification",
    logo: LOGOS.aws
  },
  {
    title: "Global AI Hackathon Winner",
    issuer: "DevPost",
    date: "2024",
    description: "First place out of 500+ teams for 'Agentic Healthcare Assistant'.",
    logo: LOGOS.devpost
  },
  {
    title: "Graduate Merit Scholarship",
    issuer: "Northwestern University",
    date: "2023",
    description: "Awarded for academic excellence and research potential.",
    logo: LOGOS.northwestern
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Northwestern University",
    degree: "Master of Science in Computer Science (Focus: AI & ML)",
    date: "Sep 2023 – Dec 2024",
    gpa: "3.71/4.0",
    logo: LOGOS.northwestern
  },
  {
    school: "Rajiv Gandhi Institute of Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    date: "Aug 2019 – Jun 2023",
    gpa: "3.64/4.0"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "happy-world",
    company: "Happy World Foundation, Inc.",
    role: "AI/ML Engineer (Volunteer)",
    date: "Aug 2025 – Present",
    summary: "Leading the technical overhaul of a non-profit operating in 40+ countries. I am automating the volunteer-matching process using Python and restructuring the web platform to handle higher traffic.",
    relatedProjectId: "hw-matching-algo",
    logo: LOGOS.happyworld
  },
  {
    id: "argonne",
    company: "Argonne National Laboratory",
    role: "AI Engineer",
    date: "Jan 2025 – Jun 2025",
    summary: "Worked on high-performance computing pipelines for astrophysics data. Focused on multimodal alignment of galaxy imagery and spectral data using diffusion models.",
    relatedProjectId: "argonne-diffusion",
    logo: LOGOS.argonne
  }
];

export const PROJECTS: Project[] = [
  // --- WORK EXPERIENCE PROJECTS ---
  {
    id: "argonne-diffusion",
    title: "Spectral-Spatial Galaxy Diffusion",
    date: "Jan 2025 – Jun 2025",
    shortDescription: "Fine-tuning conditional diffusion models for multimodal galaxy data alignment at Argonne National Lab.",
    role: "AI Engineer",
    companyLogo: LOGOS.argonne,
    overview: "At Argonne National Laboratory, scientists deal with massive datasets of galaxy images and their corresponding spectral data. Aligning these two modalities is crucial for classification but computationally expensive. I built a pipeline to automate this alignment using generative models.",
    challenge: "The core challenge was the 'modality gap'. Images provide spatial context, while spectra provide chemical composition. Existing models treated them separately. Additionally, training on 300k+ high-res images required optimizing distributed training across 8-GPU nodes.",
    approach: [
      "Fine-tuned a pre-trained conditional diffusion U-Net to accept spectral encodings as conditioning for image generation/reconstruction.",
      "Constructed a robust preprocessing pipeline using NumPy and Pandas to normalize 300k+ samples.",
      "Optimized the PyTorch training loop for multi-GPU distributed data parallelism (DDP), reducing training time from 7 days to 20 hours."
    ],
    results: [
      "Achieved a 12% improvement in spatial-spectral alignment metrics compared to baseline autoencoders.",
      "Reduced training latency by ~88% via distributed computing optimizations.",
      "Pipeline adopted by the research team for the upcoming sky survey analysis."
    ],
    learnings: [
      "HPC nuances: Working with Slurm and MPI for distributed training requires careful memory management distinct from single-GPU workflows.",
      "Multimodal Latent Spaces: Forcing alignment in the latent space is more efficient than pixel-space alignment for scientific data."
    ],
    techStack: [
      { name: "PyTorch", category: "Frameworks & Libraries" },
      { name: "Diffusion Models", category: "AI & Core Concepts" },
      { name: "HPC", category: "Tools & Platforms" },
      { name: "Bash", category: "Tools & Platforms" },
      { name: "Slurm", category: "Tools & Platforms" }
    ],
    images: ["/images/project-argonne-1.png", "/images/project-argonne-2.png"]
  },
  {
    id: "hw-matching-algo",
    title: "Volunteer Matching Platform",
    date: "Aug 2025 – Present",
    shortDescription: "Automated volunteer-teacher pairing algorithm for a global non-profit.",
    role: "AI/ML Engineer (Volunteer)",
    companyLogo: LOGOS.happyworld,
    overview: "Happy World Foundation connects teachers with volunteers for cross-cultural classroom exchanges. Previously, this matching was done manually via spreadsheets, which was unscalable as the organization grew to 40+ countries.",
    challenge: "The matching problem is constraint-heavy: Timezone overlap, Language proficiency (English/Spanish/French), and Topic expertise must all align. Doing this manually for hundreds of requests led to long wait times and missed opportunities.",
    approach: [
      "Modeled the matching problem as a constraint satisfaction problem (CSP) in Python.",
      "Built a request ingestion pipeline that consolidates data from Webforms, Instagram DMs, and Email into a unified structured format.",
      "Refactored the legacy website infrastructure to improve navigation and accessibility for non-technical users."
    ],
    results: [
      "Reduced manual coordination time by 70%.",
      "Enabling same-week responses for 90% of incoming requests.",
      "Created a dashboard for admins to override matches or view pending requests."
    ],
    learnings: [
      "User-Centric Engineering: Non-profit staff prefer simple, stable tools over complex AI black boxes. The matching algorithm had to be explainable.",
      "Data Cleaning is 80% of the work: Real-world user entry data is messy and required significant normalization logic."
    ],
    techStack: [
        { name: "Python", category: "Languages" },
        { name: "Django", category: "Frameworks & Libraries" },
        { name: "React", category: "Frameworks & Libraries" },
        { name: "Algorithms", category: "AI & Core Concepts" }
    ],
    images: ["/images/project-happyworld-1.png"]
  },

  // --- EXISTING PROJECTS ---
  {
    id: "agentic-crm",
    title: "Agentic CRM Entity Resolution",
    date: "Nov 2025 – Dec 2025",
    shortDescription: "A graph-based deduplication system using LLM reasoning and NetworkX clustering.",
    overview: "In large-scale CRM systems, customer data is often fragmented across multiple entries due to typos, email variations, or system migrations. I developed a graph-based entity resolution pipeline to identify and merge these duplicate profiles without human intervention.",
    challenge: "The primary challenge was ambiguity. Simple rule-based matching failed on edge cases (e.g., 'Robert Smith' vs 'Bob Smith'), while naive pairwise comparison was computationally expensive (O(n^2)) and hit API rate limits quickly.",
    approach: [
      "Engineered a graph-based system using NetworkX to model entities as nodes and potential relationships as edges.",
      "Designed a hybrid blocking strategy to group likely duplicates before expensive processing, reducing comparisons significantly.",
      "Implemented a 'Reasoning Agent' using LLMs that evaluates edge cases by looking at context (e.g., job titles, locations) rather than just string similarity.",
      "Utilized BFS-connected component analysis to form clusters of identical identities."
    ],
    results: [
      "Achieved a 96% F1 score and 92% recall on the test dataset.",
      "Zero false merges reported during validation.",
      "Reduced database redundancy by 28% while maintaining full provenance of the original data."
    ],
    learnings: [
      "Rate limits dictate architecture: I learned to prioritize batch inference and blocking strategies to make agentic workflows viable in production.",
      "Precision > Recall in Data Management: In CRM data, merging two different people is catastrophic compared to missing a merge. I tuned prompts specifically for high precision."
    ],
    techStack: [
        { name: "Python", category: "Languages" },
        { name: "LLMs", category: "AI & Core Concepts" },
        { name: "NetworkX", category: "Frameworks & Libraries" },
        { name: "Graph Algorithms", category: "AI & Core Concepts" }
    ],
    images: ["/images/project-crm-1.png", "/images/project-crm-2.png"]
  },
  {
    id: "text-to-sql",
    title: "Multi-Agent Text-to-SQL",
    date: "Apr 2025 – May 2025",
    shortDescription: "Three-agent pipeline to translate natural-language queries into SQL across 11 SQLite schemas.",
    overview: "Translating natural language questions into executable SQL queries is difficult when dealing with complex, multi-table schemas. This project implemented a multi-agent system where specialized agents collaborated to generate, refine, and select the best SQL query.",
    challenge: "Single-shot LLM prompts often hallucinated non-existent columns or failed to join tables correctly when the schema was large (11+ tables).",
    approach: [
      "Decomposer Agent: Breaks down complex questions into sub-logical steps.",
      "Refiner Agent: Takes the generated SQL and checks it against the schema metadata, attempting to 'repair' it if it references missing columns.",
      "Selector Agent: Evaluates multiple candidate queries and picks the one most likely to be correct based on execution dry-runs."
    ],
    results: [
      "Boosted SQL validity by 30% compared to baseline single-shot prompting.",
      "Achieved 58% execution accuracy on the Spider benchmark subset used for testing.",
      "Successfully handled nested queries and multi-table joins that stumped smaller models."
    ],
    learnings: [
      "Agents need narrow scopes: Specialized agents perform better than one 'smart' agent trying to do everything.",
      "Self-Correction is powerful: Letting the model see the error message from the SQL engine and retry improved success rates dramatically."
    ],
    techStack: [
        { name: "Python", category: "Languages" },
        { name: "SQLite", category: "Tools & Platforms" },
        { name: "Multi-Agent Systems", category: "AI & Core Concepts" },
        { name: "Prompt Engineering", category: "AI & Core Concepts" }
    ],
    images: ["/images/project-sql-1.png"]
  },
  {
    id: "mars-landmark",
    title: "Mars Landmark Detection",
    date: "Jun 2024 – Aug 2024",
    shortDescription: "CNN pipeline for detecting landmarks in Mars imagery with class imbalance handling.",
    overview: "Analyzing high-resolution orbital imagery of Mars to detect specific geological landmarks. This automated analysis assists planetary scientists in cataloging surface features without manual inspection.",
    challenge: "The dataset contained 8,000 images but was severely imbalanced—vast stretches of empty terrain with very few examples of specific landmarks, leading models to bias towards 'nothing found'.",
    approach: [
      "Developed a two-stage pipeline: Stage 1 detects if *any* landmark exists (Binary Classification), Stage 2 classifies the type (Multi-class).",
      "Applied targeted data augmentation (rotation, flipping, lighting noise) specifically to the minority classes.",
      "Implemented class-weighted loss functions to penalize the model more for missing a rare landmark."
    ],
    results: [
      "Achieved 75.5% accuracy and 0.74 F1-score.",
      "Outperformed a standard ResNet50 baseline (which achieved 67%) on the same dataset.",
      "Successfully identified small crater formations that were previously missed."
    ],
    learnings: [
      "Data quality often trumps model complexity. Spending time fixing the class imbalance yielded better results than simply switching to a bigger transformer model."
    ],
    techStack: [
        { name: "PyTorch", category: "Frameworks & Libraries" },
        { name: "CNN", category: "AI & Core Concepts" },
        { name: "Computer Vision", category: "AI & Core Concepts" },
        { name: "Data Augmentation", category: "AI & Core Concepts" }
    ],
    images: ["/images/project-mars-1.png", "/images/project-mars-2.png"]
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "diffusion-models-review",
    title: "Reading Note: High-Resolution Image Synthesis with Latent Diffusion Models",
    date: "October 12, 2025",
    snippet: "Exploring the efficiency of latent space diffusion versus pixel space operations.",
    content: "This paper introduces Latent Diffusion Models (LDMs) which operate in the compressed latent space of powerful autoencoders. This significantly reduces computational costs while maintaining high visual fidelity. \n\nThe core innovation lies in the separation of the training into two distinct phases: first, training a perceptual compression model (an autoencoder) that removes high-frequency details while preserving semantic structure; second, training a diffusion model in this learned latent space. \n\nBy doing so, the diffusion model doesn't need to waste capacity learning to generate imperceptible pixel-level details. My experiments reproducing the core LDM architecture on a smaller dataset confirmed that convergence is indeed much faster compared to pixel-space diffusion, though the quality of the first-stage autoencoder is critical. If the autoencoder produces blurry reconstructions, the diffusion model can never recover that lost sharpness.",
    references: [
      "Rombach, R., et al. (2022). High-Resolution Image Synthesis with Latent Diffusion Models. CVPR.",
      "Ho, J., et al. (2020). Denoising Diffusion Probabilistic Models. NeurIPS."
    ],
    tags: ["Generative AI", "Computer Vision", "Paper Review"]
  },
  {
    id: "agentic-workflows",
    title: "The Rise of Agentic Workflows in 2025",
    date: "September 28, 2025",
    snippet: "Why single-shot prompting is being replaced by iterative agentic loops.",
    content: "Agentic workflows allow LLMs to 'think' by breaking down problems, using tools, and refining their own outputs. In this post, I reflect on my experience building the CRM pipeline. \n\nThe traditional 'prompt-and-pray' method works well for creative writing but fails primarily on reasoning tasks that require intermediate verification. An agentic loop introduces a 'Thought-Action-Observation' cycle. \n\nFor instance, in my text-to-SQL project, simply asking the model to write the SQL query resulted in a 30% error rate. By wrapping the model in an agent loop where it first inspected the schema, then drafted a query, then 'ran' it (simulated) to check for syntax errors, and finally corrected itself, we saw reliability jump significantly. \n\nThe trade-off, of course, is latency and cost. An agentic workflow might make 10-20 calls for a single user request. The challenge for 2026 will be optimizing these loops—perhaps by caching common reasoning paths or distilling successful agent trajectories into smaller, single-shot models.",
    references: [
      "Wei, J., et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models.",
      "Yao, S., et al. (2023). ReAct: Synergizing Reasoning and Acting in Language Models."
    ],
    tags: ["Agents", "LLMs", "System Design"]
  }
];

export const FUN_FACTS = [
  "Been to over 400 Padres games",
  "Play Pickleball every Sunday with family",
  "Have a huge vinyl collection",
  "Enjoy traveling, trying new foods, working out & going to concerts!"
];

export const OFFLINE_GALLERY: OfflineGalleryItem[] = [
  { id: '1', image: '/images/gallery-1.png', rotation: 'rotate-2', position: 'md:top-0 md:left-10 z-10', size: 'md:w-48' },
  { id: '2', image: '/images/gallery-2.png', rotation: '-rotate-3', position: 'md:top-8 md:right-20 z-0', size: 'md:w-40' },
  { id: '3', image: '/images/gallery-3.png', rotation: 'rotate-1', position: 'md:bottom-12 md:left-24 z-10', size: 'md:w-56' },
  { id: '4', image: '/images/gallery-4.png', rotation: 'rotate-6', position: 'md:bottom-20 md:right-32 z-20', size: 'md:w-44' },
  { id: '5', image: '/images/gallery-5.png', rotation: '-rotate-2', position: 'md:top-1/3 md:-left-8 z-0', size: 'md:w-48' },
  { id: '6', image: '/images/gallery-6.png', rotation: 'rotate-3', position: 'md:top-1/2 md:-right-8 z-0', size: 'md:w-52' },
];

export const BUCKET_LIST: BucketItem[] = [
  { id: '1', text: 'Visit all 50 States', completed: false, image: '/images/bucket-states.png', size: 'large' }, // 2x2
  { id: '2', text: 'Learn Guitar', completed: false, image: '/images/bucket-guitar.png', size: 'tall' },  // 1x2
  { id: '3', text: 'Half Marathon', completed: true, image: '/images/bucket-marathon.png', size: 'small' }, // 1x1
  { id: '4', text: 'Publish in NeurIPS', completed: false, image: '/images/bucket-neurips.png', size: 'wide' }, // 2x1
  { id: '5', text: 'See Northern Lights', completed: false, image: '/images/bucket-aurora.png', size: 'small' }, // 1x1
  { id: '6', text: 'Learn Pottery', completed: false, image: '/images/bucket-pottery.png', size: 'tall' }, // 1x2
  { id: '7', text: 'Write technical book', completed: false, image: '/images/bucket-book.png', size: 'wide' }, // 2x1
  { id: '8', text: 'Europe Road Trip', completed: false, image: '/images/bucket-europe.png', size: 'small' }  // 1x1
];