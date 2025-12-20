import { Project, Experience, Education, BlogPost, Award, BucketItem, OfflineGalleryItem } from './types';

export const SOCIALS = {
  email: "buvanipai@gmail.com",
  linkedin: "https://www.linkedin.com/in/buvanipai/",
  github: "https://github.com/buvanipai",
  phone: "+1 (872) 239-1418"
};

// Logos - Renamed to expect local files in /images/ folder
const LOGOS = {
  northwestern: "/images/nu.png",
  mu: "/images/mu.webp",
  argonne: "/images/anl.png",
  happyworld: "/images/hwf.jpeg",
  nvidia: "/images/nvidia.png",
  google: "/images/google.webp",
  mckinsey: "/images/mckinsey.png",
  salesforce: "/images/salesforce.png",
  amazon: "/images/amazon.png",
  bcg: "/images/bcg.png",
  ba: "/images/ba.png",
};

export const AWARDS: Award[] = [
  {
    title: "Agentic AI Hackathon (2nd Place)",
    issuer: "Google Cloud x Endava",
    date: "Sept 2025",
    description: "Awarded 2nd place for designing a scalable Agentic AI product launch strategy.",
    logo: LOGOS.google
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "2024",
    description: "Selected for the global leadership development program focused on problem-solving and digital resilience.",
    logo: LOGOS.mckinsey
  },
  {
    title: "Amazon Campus Prep Series",
    issuer: "Amazon",
    date: "2025",
    description: "Intensive preparation series focused on distributed systems and cloud architecture interviews.",
    logo: LOGOS.amazon
  },
  {
    title: "Technical Product Manager Job Simulation",
    issuer: "BCG X",
    date: "Nov 2024",
    description: "Achieved 92% recall in churn analysis with simulations and visualizations, delivering insights with a 0.87 F1-score model summary.",
    logo: LOGOS.bcg
  },
  {
    title: "Data Scientist Job Simulation",
    issuer: "British Airways",
    date: "Oct 2024",
    description: "Achieved 90% accuracy in sentiment analysis and 0.85 precision in buying behavior prediction, enabling data-driven strategies.",
    logo: LOGOS.ba
  },
  {
    title: "GenAI Developer Job Simulation",
    issuer: "BCG X",
    date: "Sept 2024",
    description: "Developed an AI-powered financial chatbot with rule-based logic, achieving 92% recall in transforming 10-K/10-Q data into insights.",
    logo: LOGOS.bcg
  },
  // --- IN PROGRESS ---
  {
    title: "Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    date: "In Progress", // <--- explicitly marked
    description: "Architecting retrieval-augmented generation pipelines for autonomous agents.",
    logo: LOGOS.nvidia
  },
  {
    title: "Agentforce Specialist",
    issuer: "Salesforce",
    date: "In Progress", // <--- explicitly marked
    description: "Certification in building autonomous AI agents using the Salesforce Agentforce platform.",
    logo: LOGOS.salesforce
  },
  {
    title: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    date: "In Progress", // <--- explicitly marked
    description: "Deep dive into training and fine-tuning conditional diffusion U-Nets.",
    logo: LOGOS.nvidia
  },
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
    gpa: "3.64/4.0",
    logo: LOGOS.mu
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "happy-world",
    company: "Happy World Foundation, Inc.",
    role: "AI/ML Engineer (Volunteer)",
    date: "Aug 2025 – Present",
    summary: "Designing an intelligent matching algorithm to connect volunteers with educators globally, streamlining coordination for a nonprofit platform that operates across 40+ countries.",
    relatedProjectId: "hw-matching-algo",
    logo: LOGOS.happyworld
  },
  {
    id: "argonne",
    company: "Argonne National Laboratory",
    role: "AI Engineer",
    date: "Jan 2025 – Jun 2025",
    summary: "Trained deep learning models on galaxy data, combining images & spectral information to understand astronomical properties and optimize HPC training workflows across large-scale datasets.",
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
    shortDescription: "Trained deep learning models on galaxy data, combining images and spectral information to understand astronomical properties and optimize HPC training workflows across large-scale datasets.",
    role: "AI Engineer",
    companyLogo: LOGOS.argonne,
    overview: "Researchers at Argonne analyze massive datasets of galaxy images paired with spectral data. Aligning these two modalities is critical for understanding galaxy properties but computationally expensive. I built a diffusion-based pipeline to automate this alignment and optimize training at scale.",
    challenge: "The core problem was the modality gap. Images capture spatial structure while spectra reveal chemical composition. Existing approaches treated them separately and missed opportunities for joint learning. Training on 300k+ high-resolution samples required distributed computing optimization across multi-GPU nodes.",
    approach: [
      "Fine-tuned a pre-trained conditional diffusion U-Net to use spectral encodings as conditioning signals for generating aligned image representations.",
      "Built a preprocessing pipeline to normalize, truncate, and filter 300k+ image-spectra pairs, ensuring spatial-spectral consistency across the dataset.",
      "Optimized PyTorch training with distributed data parallelism across 8 GPUs, implementing adaptive learning strategies and systematic troubleshooting to handle HPC constraints."
    ],
    results: [
      "Improved spatial-spectral alignment by 12% over baseline autoencoders.",
      "Reduced training time from 7 days to 20 hours (88% speedup).",
      "Pipeline adopted for upcoming sky survey analysis."
    ],
    learnings: [
      "HPC workflows demand different thinking. Memory management, batch scheduling, and fault tolerance matter as much as model architecture.",
      "Multimodal latent spaces work better than pixel-space reconstruction for scientific data where precision matters more than perceptual quality."
    ],
    techStack: [
      { name: "PyTorch", category: "Frameworks & Libraries" },
      { name: "Diffusion Models", category: "AI & Core Concepts" },
      { name: "HPC", category: "Tools & Platforms" },
      { name: "Bash", category: "Tools & Platforms" },
      { name: "Slurm", category: "Tools & Platforms" }
    ],
    images: ["/images/anl-1.png", "/images/anl-2.png"]
  },
  {
    id: "hwf-matching-algo",
    title: "Global Volunteer Matching System",
    date: "Aug 2025 – Present",
    shortDescription: "Designing an intelligent matching algorithm to connect volunteers with educators globally, streamlining coordination for a nonprofit platform that operates across 40+ countries.",
    role: "AI/ML Engineer (Volunteer)",
    companyLogo: LOGOS.happyworld,
    overview: "Happy World Foundation connects volunteers with teachers across 40+ countries for classroom exchanges. Manual coordination was time-intensive and often took weeks. I built an automated matching system to pair volunteers with educators based on language, timezone, and availability.",
    challenge: "The nonprofit relied on manual processes to match volunteers with teachers, leading to coordination bottlenecks and delayed responses. Matching had to account for multiple constraints like language fluency, timezone compatibility, and scheduling availability while handling requests from web forms, Instagram DMs, and email.",
    approach: [
      "Designed a Python-based matching algorithm that evaluates volunteers and teachers across language, timezone, and availability criteria to generate optimal pairings.",
      "Built a consolidated request pipeline that ingests inquiries from web forms, Instagram, and email into a unified system for processing.",
      "Refactored the website infrastructure to improve navigation and usability for both educators and volunteers on the platform."
    ],
    results: [
      "Reduced manual coordination overhead by 70%, enabling same-week responses to requests.",
      "Automated matching across 40+ countries with support for multiple languages and timezones.",
      "Streamlined inquiry handling by consolidating three different input channels into one pipeline."
    ],
    learnings: [
      "Real-world constraints matter more than optimal algorithms. Simple heuristics that account for human preferences often outperform complex optimization.",
      "Building for nonprofits requires balancing automation with flexibility. The system needed to handle edge cases and manual overrides gracefully."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "Algorithm Design", category: "AI & Core Concepts" },
      { name: "Web Development", category: "Frameworks & Libraries" },
      { name: "API Integration", category: "Tools & Platforms" }
    ],
    // images: ["/images/project-hwf-1.png", "/images/project-hwf-2.png"]
  },

  // --- ACADEMIC / PERSONAL PROJECTS ---
  {
    id: "crm-entity-resolution",
    title: "Agentic CRM Entity Resolution Pipeline",
    date: "Nov 2025 – Dec 2025",
    githubUrl: "https://github.com/buvanipai/crm-entity-resolver",
    liveUrl: "https://crm-entity-resolver.streamlit.app/",
    shortDescription: "Built a graph-based deduplication system using LLM reasoning and NetworkX clustering to resolve ambiguous customer identities with 96% F1 score and zero false merges.",
    role: "Academic Project",
    overview: "CRM databases accumulate duplicate customer records over time due to data entry errors, typos, and variations in names or contact info. I built an agentic pipeline that uses LLM reasoning and graph-based clustering to intelligently identify and merge duplicate entities while avoiding false positives.",
    challenge: "Traditional rule-based deduplication systems struggle with ambiguous cases like similar names, typos, or partial matches. The goal was to achieve high recall without creating false merges that could damage data integrity. The system also needed to operate under API rate limits while maintaining full provenance tracking for every merge decision.",
    approach: [
      "Engineered a graph-based system where nodes represent customer records and edges represent potential duplicates identified through hybrid blocking strategies.",
      "Used LLM reasoning with few-shot prompt engineering and hard negative examples to evaluate potential matches, prioritizing precision to avoid false merges.",
      "Implemented BFS-based connected component analysis with NetworkX to group duplicate clusters and batch inference pipelines to work within API rate limits."
    ],
    results: [
      "Achieved 96% F1 score and 92% recall with zero false merges across the test dataset.",
      "Reduced database redundancy by 28% through intelligent deduplication.",
      "Maintained 95% average confidence across predictions with full provenance tracking for audit trails."
    ],
    learnings: [
      "LLM-based reasoning shines in ambiguous cases where rule-based systems fail. Few-shot prompting with hard negatives was critical for teaching the model edge cases.",
      "Graph algorithms like BFS for connected components are perfect for entity resolution because duplicates naturally form clusters that need to be merged together."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "LLMs", category: "AI & Core Concepts" },
      { name: "NetworkX", category: "Frameworks & Libraries" },
      { name: "Graph Algorithms", category: "AI & Core Concepts" },
      { name: "Prompt Engineering", category: "AI & Core Concepts" }
    ],
    // images: ["/images/project-crm-1.png", "/images/project-crm-2.png"]
  },
  {
    id: "text-to-sql",
    title: "Multi-Agent Text-to-SQL System",
    date: "Apr 2025 – May 2025",
    shortDescription: "Built a three-agent pipeline to translate natural language queries into SQL across 11 database schemas, improving execution accuracy from 53% to 58% through iterative refinement.",
    role: "Academic Project",
    overview: "Translating natural language into SQL is challenging because queries can be ambiguous and databases have complex schemas. I built a multi-agent system where three specialized agents work together to decompose queries, generate SQL, and select the best solution across 11 different SQLite schemas.",
    challenge: "Natural language queries are often vague or incomplete, making it hard to generate valid SQL that matches the intended meaning. The system needed to handle diverse schemas, validate SQL syntax and semantics, and improve query accuracy without access to execution feedback during development.",
    approach: [
      "Designed a three-agent pipeline where a decomposer breaks down complex queries, a refiner generates SQL candidates, and a selector chooses the best solution based on schema context.",
      "Iterated on few-shot prompts and sampling parameters by testing diverse natural language queries to improve SQL validity and execution accuracy.",
      "Added schema-aware repair loops with metadata-driven validation to catch table and column mismatches before execution."
    ],
    results: [
      "Improved SQL validity by 30% through iterative prompt refinement and schema validation.",
      "Increased Valid Efficiency Score from 55% to 61% and execution accuracy from 53% to 58%.",
      "Boosted table and column match rate by 12% using metadata-driven validation and repair loops."
    ],
    learnings: [
      "Multi-agent systems work well when each agent has a clear responsibility. Decomposition, generation, and selection as separate steps reduced errors at each stage.",
      "Schema-aware validation is critical. Catching table and column mismatches before execution prevents entire classes of errors."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "LLMs", category: "AI & Core Concepts" },
      { name: "SQL", category: "Programming Languages" },
      { name: "SQLite", category: "Tools & Platforms" },
      { name: "Prompt Engineering", category: "AI & Core Concepts" }
    ],
    // images: ["/images/project-sql-1.png", "/images/project-sql-2.png"]
  },
  {
    id: "mars-landmark",
    title: "Mars Landmark Detection",
    date: "Jun 2024 – Aug 2024",
    shortDescription: "Built a two-stage CNN pipeline to detect and classify Mars landmarks from satellite images, achieving 75.5% accuracy and outperforming ResNet50 and DenseNet121 baselines.",
    role: "Academic Project",
    companyLogo: LOGOS.northwestern,
    overview: "Identifying landmarks in Mars satellite imagery is challenging due to severe class imbalance and visual similarity across terrain types. Working with two teammates, I developed a two-stage CNN approach that first detects whether a landmark exists and then classifies its type.",
    challenge: "The 8K-image dataset had severe class imbalance with some landmark types having only a handful of examples. Traditional single-stage classifiers struggled because they had to learn both detection and classification simultaneously. The team needed to coordinate design choices and validate that data augmentation strategies actually improved model performance.",
    approach: [
      "Addressed class imbalance through targeted data augmentation, tripling the count of underrepresented landmark classes to balance the training distribution.",
      "Developed a two-stage pipeline where the first CNN detects landmark presence and the second classifies landmark type, reducing the complexity of each task.",
      "Implemented class-weighted training to ensure the model learned from minority classes effectively, coordinating augmentation and training strategies with teammates."
    ],
    results: [
      "Achieved 75.5% accuracy and 0.74 F1-score on the test set.",
      "Outperformed ResNet50 baseline (67% accuracy) and DenseNet121 baseline (52% accuracy).",
      "Validated that targeted augmentation and class-weighting strategies effectively handled severe class imbalance."
    ],
    learnings: [
      "Two-stage pipelines simplify complex tasks. Separating detection from classification let each model focus on one problem and improved overall performance.",
      "Class imbalance needs aggressive intervention. Augmentation alone isn't enough. Class-weighted loss functions are essential for learning from minority classes."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "PyTorch", category: "Frameworks & Libraries" },
      { name: "CNNs", category: "AI & Core Concepts" },
      { name: "Computer Vision", category: "AI & Core Concepts" },
      { name: "Data Augmentation", category: "AI & Core Concepts" }
    ],
    // images: ["/images/project-mars-1.png", "/images/project-mars-2.png"]
  },
  {
    id: "recipe-recommendation",
    title: "Cloud-Based Recipe Recommendation",
    date: "Oct 2024 – Dec 2024",
    shortDescription: "Built an AWS serverless pipeline using Rekognition and Comprehend to extract ingredients from user images and text, achieving 73% identification accuracy for recipe matching.",
    role: "Academic Project",
    companyLogo: LOGOS.northwestern,
    overview: "Finding recipes based on available ingredients is tedious when you have to manually type everything out. Working with two teammates, I built a serverless system that lets users upload images of their pantry or write notes and automatically extracts ingredients for recipe recommendations.",
    challenge: "Users input ingredients in different formats like images, typed lists, or casual notes. The system needed to handle this variability and standardize ingredient names for consistent recipe matching. Building this on AWS required coordinating serverless components and ensuring accurate ingredient extraction across different input types.",
    approach: [
      "Developed an AWS serverless pipeline using API Gateway and Lambda to process user inputs including images, pantry lists, and text notes.",
      "Integrated Amazon Rekognition for image-based ingredient detection and Amazon Comprehend for extracting ingredients from natural language text.",
      "Implemented rule-based mapping to standardize 85% of common ingredient variants, ensuring consistent matching across different naming conventions."
    ],
    results: [
      "Achieved 73% ingredient identification accuracy on the validation set across image and text inputs.",
      "Standardized 85% of common ingredient variants for reliable recipe matching.",
      "Built a fully serverless pipeline that scaled automatically with user requests."
    ],
    learnings: [
      "Serverless architectures simplify deployment but require careful design for data flow between services. Lambda timeouts and cold starts need consideration.",
      "Rule-based standardization is essential for real-world NLP tasks. Even with good extraction accuracy, variant names break downstream matching without normalization."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "AWS Lambda", category: "Tools & Platforms" },
      { name: "API Gateway", category: "Tools & Platforms" },
      { name: "Amazon Rekognition", category: "Tools & Platforms" },
      { name: "Amazon Comprehend", category: "Tools & Platforms" }
    ],
    // images: ["/images/project-recipe-1.png", "/images/project-recipe-2.png"]
  },
  {
    id: "mental-health-network",
    title: "Mental Health Citation Network Analysis",
    date: "Oct 2024 – Present",
    shortDescription: "Analyzing how mental health research citations influence academic performance and university rankings through network analysis and statistical modeling using ERGM.",
    role: "Academic Project",
    companyLogo: LOGOS.northwestern,
    overview: "Academic citations reveal patterns of influence and collaboration between universities. I'm investigating how mental health research citations correlate with academic performance and institutional rankings by building citation networks and applying statistical models to test hypotheses about research impact.",
    challenge: "Understanding the relationship between research citations and university performance requires analyzing complex networks with thousands of nodes and edges. The challenge was to collect comprehensive citation data, build meaningful network representations, and apply rigorous statistical models to test hypotheses about research influence.",
    approach: [
      "Scraped comprehensive citation data from the OpenAlex API to build a structured dataset of mental health research papers and their citation relationships across universities.",
      "Constructed citation networks using NetworkX where universities are nodes and citations are edges, visualizing collaboration patterns and inter-institutional connections.",
      "Applied Exponential Random Graph Models (ERGM) to statistically test how citation patterns correlate with academic performance metrics and institutional rankings.",
      "Performed exploratory data analysis and created visualizations to identify key patterns in citation networks and research collaboration."
    ],
    results: [
      "Built a comprehensive citation network mapping mental health research across multiple universities.",
      "Identified collaboration patterns and citation flows between institutions through network visualization.",
      "Applied statistical modeling to evaluate relationships between research influence and academic performance."
    ],
    learnings: [
      "Network analysis reveals hidden patterns in academic research that aren't obvious from citation counts alone. The structure of connections matters as much as volume.",
      "ERGM models are powerful for testing hypotheses in network data because they account for network dependencies that standard regression models miss."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "NetworkX", category: "Frameworks & Libraries" },
      { name: "ERGM", category: "AI & Core Concepts" },
      { name: "OpenAlex API", category: "Tools & Platforms" },
      { name: "Data Visualization", category: "AI & Core Concepts" }
    ],
    // images: ["/images/project-network-1.png", "/images/project-network-2.png"]
  },
  {
    id: "fitguide-posture",
    title: "FitGuide – AI Posture Coach",
    date: "Date Range",
    shortDescription: "Built an AI-powered posture coaching app using computer vision to analyze squat form in real-time, reducing posture deviations by 30% and improving exercise safety.",
    role: "Academic Project",
    companyLogo: LOGOS.northwestern,
    overview: "Poor exercise form leads to injuries and reduces workout effectiveness. I developed FitGuide, an AI posture coach that analyzes squat videos in real-time and provides corrective feedback to help users maintain proper form and reduce injury risk.",
    challenge: "Detecting posture errors requires accurate tracking of body keypoints and understanding biomechanics to identify deviations. The system needed to work on user-uploaded videos, provide clear feedback, and be accessible to non-technical users without specialized equipment.",
    approach: [
      "Implemented pose estimation using OpenCV to detect key body points in real-time and track joint movements throughout squat exercises.",
      "Processed video frames to calculate joint angles and identify posture deviations from proper squat form using a pre-trained machine learning model.",
      "Built a user-friendly Gradio interface for easy video uploads and immediate feedback display, making the tool accessible to anyone without technical setup.",
      "Designed modular Python scripts for data processing, pose analysis, and feedback generation to enable future expansion to other exercises."
    ],
    results: [
      "Reduced posture deviations by over 30% after users received corrective feedback.",
      "Achieved 90% positive usability rating from initial testers on interface design and feedback clarity.",
      "Demonstrated measurable improvements in squat form among test users with positive feedback on practical usability."
    ],
    learnings: [
      "Real-time pose estimation works well for exercise coaching but requires careful calibration of angle thresholds to balance sensitivity with false positives.",
      "User interface matters as much as the model. Simple video upload and clear visual feedback made the difference between a technical demo and a usable tool."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "OpenCV", category: "Frameworks & Libraries" },
      { name: "Computer Vision", category: "AI & Core Concepts" },
      { name: "Gradio", category: "Frameworks & Libraries" },
      { name: "Pose Estimation", category: "AI & Core Concepts" }
    ],
    // images: ["/images/project-fitguide-1.png", "/images/project-fitguide-2.png"]
  },
  {
    id: "ai-interview-questions",
    title: "AI Generated Questions for Interviews",
    date: "Jan 2024 – Mar 2024",
    shortDescription: "Built an AI-powered tool that transcribes interviews in real-time and generates personalized follow-up questions, reducing interviewer prep time by 15% and improving engagement.",
    role: "Academic Project",
    companyLogo: LOGOS.northwestern,
    overview: "Conducting good interviews requires preparation, active listening, and thinking of relevant follow-up questions on the fly. I built an AI tool that transcribes interviews in real-time and automatically generates contextual follow-up questions based on the conversation and interviewee background.",
    challenge: "Interviewers often struggle to balance listening, taking notes, and thinking of good follow-up questions simultaneously. This reduces eye contact and engagement. The system needed to transcribe accurately, understand context from both the interviewee's background and the conversation, and generate relevant questions that maintained conversational flow.",
    approach: [
      "Integrated Deepgram API for real-time speech transcription to capture interview conversations as they happen without manual note-taking.",
      "Used OpenAI API to analyze interviewee backgrounds, conversation topics, and responses to generate at least 3 contextual follow-up questions per session.",
      "Built a pipeline that processes transcribed text and interviewee details to create personalized questions that maintain conversational flow and cover relevant topics.",
      "Iterated on question generation based on demo feedback to improve readability, tone consistency, and context-linking between questions."
    ],
    results: [
      "Reduced interviewer prep time by 15% through automated question generation and real-time transcription.",
      "Generated over 300 unique, contextually relevant questions across multiple interview sessions.",
      "Improved interviewer engagement by allowing better eye contact and focus on the conversation rather than note-taking."
    ],
    learnings: [
      "Real-time transcription changes interview dynamics. Removing the note-taking burden lets interviewers focus on listening and building rapport.",
      "Context matters more than quantity. Generating 3 highly relevant questions beats 10 generic ones. Analyzing both background and conversation history was key."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "OpenAI API", category: "Tools & Platforms" },
      { name: "Deepgram API", category: "Tools & Platforms" },
      { name: "Real-Time Transcription", category: "AI & Core Concepts" },
      { name: "NLP", category: "AI & Core Concepts" }
    ],
    // images: ["/images/project-interview-1.png", "/images/project-interview-2.png"]
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection System",
    date: "2021 – Apr 2022",
    shortDescription: "Built a machine learning system to detect fraudulent credit card transactions in real-time, achieving 98.1% recall with Random Forest and reducing response time by 25% through automated alerts.",
    role: "Academic Project",
    companyLogo: LOGOS.mu,
    overview: "Credit card fraud causes billions in losses annually and damages customer trust. I developed a machine learning system that analyzes transaction patterns to detect fraud in real-time and automatically notifies cardholders of suspicious activity.",
    challenge: "Fraud detection requires high recall to catch fraudulent transactions while minimizing false positives that inconvenience customers. The system needed to handle 300,000+ transaction records, identify subtle patterns that indicate fraud, and respond fast enough to prevent unauthorized charges.",
    approach: [
      "Conducted exploratory data analysis on 300,000+ transaction records to identify patterns, standardize inputs, and remove anomalies that could reduce model reliability.",
      "Trained and compared multiple machine learning classifiers including Random Forest, Decision Trees, and Logistic Regression to find the best model for fraud detection.",
      "Implemented an automated notification system using Django that sends real-time email alerts to cardholders when suspicious transactions are detected.",
      "Evaluated models across key metrics with focus on recall to ensure fraudulent transactions were caught even at the cost of some false positives."
    ],
    results: [
      "Achieved 98.1% recall with Random Forest, improving detection accuracy by 15% compared to baseline models.",
      "Improved model reliability by 20% through comprehensive data cleaning and standardization.",
      "Reduced fraud response time by 25% through automated real-time email notifications to cardholders."
    ],
    learnings: [
      "In fraud detection, recall matters more than precision. Missing a fraudulent transaction is far more costly than investigating a false positive.",
      "Real-time notifications are critical for fraud prevention. Fast alerts give customers time to block cards before significant damage occurs."
    ],
    techStack: [
      { name: "Python", category: "Programming Languages" },
      { name: "Django", category: "Frameworks & Libraries" },
      { name: "Machine Learning", category: "AI & Core Concepts" },
      { name: "Random Forest", category: "AI & Core Concepts" },
      { name: "Data Mining", category: "AI & Core Concepts" }
    ],
    // images: ["/images/project-fraud-1.png", "/images/project-fraud-2.png"]
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
  {
    emoji: "💃",
    // Focuses on the activity/community rather than the specific style
    text: "Always part of a dance team (it's my favorite workout)."
  },
  {
    emoji: "🎨",
    // Humble but sweet—shows you paint a lot without bragging
    text: "Love to paint (my parents' walls are full of them)."
  },
  {
    emoji: "⚛️",
    // Your exact curiosity!
    text: "Always curious about universe secrets (like electron null planes)."
  },
  {
    emoji: "👃",
    text: "Secret Talent: Can identify ingredients just by smell."
  },
  {
    emoji: "📺",
    text: "Ask me for Anime or K-Drama recommendations."
  }
];

export const OFFLINE_GALLERY: OfflineGalleryItem[] = [
  { id: '1', image: '/images/IMG_1983.JPG', rotation: 'rotate-2', position: 'md:top-0 md:left-10 z-10', size: 'md:w-48' },
  { id: '2', image: '/images/IMG_1983.JPG', rotation: '-rotate-3', position: 'md:top-8 md:right-20 z-0', size: 'md:w-40' },
  { id: '3', image: '/images/IMG_1983.JPG', rotation: 'rotate-1', position: 'md:bottom-12 md:left-24 z-10', size: 'md:w-56' },
  { id: '4', image: '/images/IMG_1983.JPG', rotation: 'rotate-6', position: 'md:bottom-20 md:right-32 z-20', size: 'md:w-44' },
  { id: '5', image: '/images/IMG_1983.JPG', rotation: '-rotate-2', position: 'md:top-1/3 md:-left-8 z-0', size: 'md:w-48' },
  { id: '6', image: '/images/IMG_1983.JPG', rotation: 'rotate-3', position: 'md:top-1/2 md:-right-8 z-0', size: 'md:w-52' },
  { id: '7', image: '/images/IMG_1983.JPG', rotation: 'rotate-3', position: 'md:top-1/2 md:-right-8 z-0', size: 'md:w-52' },
];