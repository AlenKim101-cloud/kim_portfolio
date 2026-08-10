export type ProjectStatus = "completed" | "in-progress" | "experimental";

export type ArchNode = {
  label: string;
  sub?: string;
  chip?: boolean;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  /** First entry is the primary filter category. */
  category: string[];
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  year: number;
  overview: string;
  problem: string;
  objective: string;
  architecture: ArchNode[];
  implementation: string[];
  challenges: { issue: string; fix: string }[];
  results: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const GITHUB_USER = "AlenKim101-cloud";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const EMAIL = "kimalennevil@gmail.com";
export const LINKEDIN_URL = "https://linkedin.com/in/kimalen-peter-nevil";

export const projects: Project[] = [
  {
    id: "p1",
    title: "Mama's Kitchen Ordering System",
    slug: "mamas-kitchen-kiosk",
    tagline: "Full-stack kiosk ordering system for a restaurant kitchen.",
    description:
      "A self-service ordering system where customers order at a kiosk while kitchen staff track and fulfil orders on a live dashboard.",
    category: ["Software"],
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vite", "Git"],
    status: "completed",
    featured: true,
    year: 2026,
    overview:
      "A complete self-service ordering system for a restaurant kitchen. Customers browse a product catalogue, build a cart and check out at a kiosk interface, while kitchen staff see incoming orders appear on a live dashboard and move them through preparation to completion. Includes product management and an administrative dashboard for the restaurant owner.",
    problem:
      "Paper-based order taking slows service, produces lost tickets, and gives kitchen staff no real-time visibility into what is coming in.",
    objective:
      "Deliver a system where a customer can browse, order and pay at a kiosk, and kitchen staff can see, update and complete orders in real time.",
    architecture: [
      { label: "Customer", sub: "Kiosk UI" },
      { label: "API", sub: "Supabase" },
      { label: "DB", sub: "PostgreSQL" },
      { label: "Kitchen", sub: "Dashboard" },
    ],
    implementation: [
      "React + TypeScript kiosk interface with a product catalogue, cart and checkout flow.",
      "Supabase backend with PostgreSQL tables for products, orders and order items.",
      "Row-level security and role-based authentication separating admin, kitchen and customer access.",
      "Realtime subscriptions push order updates to the kitchen dashboard the moment they happen.",
    ],
    challenges: [
      {
        issue: "Order state kept drifting out of sync between the kiosk screen and the kitchen screen.",
        fix: "Moved the order lifecycle into a single state machine in PostgreSQL and let realtime subscriptions propagate changes, instead of duplicating order state in two clients.",
      },
      {
        issue: "Any client with the database key could read every order in the system.",
        fix: "Implemented PostgreSQL row-level security policies so kitchen and admin roles only see the orders their role is allowed to access.",
      },
    ],
    results: [
      "End-to-end order flow: browse → cart → checkout → kitchen queue → completion.",
      "Live kitchen dashboard where order status updates in real time.",
      "Admin panel for products, pricing and order history.",
      "Role-based access control across customer, kitchen and admin surfaces.",
    ],
    githubUrl: `${GITHUB_URL}/mamas-kitchen-ordering-system`,
  },
  {
    id: "p2",
    title: "M-Pesa-style Web Application",
    slug: "mpesa-style-web-app",
    tagline: "A money-transfer web application modelled on M-Pesa flows.",
    description:
      "A simulated mobile-money platform: register, load balance, send and receive money with PIN-protected transactions and a full ledger.",
    category: ["Software"],
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Auth"],
    status: "completed",
    featured: true,
    year: 2026,
    overview:
      "A simulated mobile-money platform built around the core M-Pesa loop. Users register an account, load balance, send and receive money, and review a complete transaction statement. Outgoing transactions are PIN-confirmed, and an admin view provides oversight across the platform.",
    problem:
      "Mobile money is central to everyday finance, yet most demo projects ignore the transaction-safety and ledger mechanics that make it trustworthy.",
    objective:
      "Build a working simulation of the core mobile-money loop — balance, send, receive, history — with proper authentication and a ledger that never loses money.",
    architecture: [
      { label: "User", sub: "Web App" },
      { label: "Auth", sub: "PIN" },
      { label: "Ledger", sub: "PostgreSQL" },
      { label: "History", sub: "Statements" },
    ],
    implementation: [
      "React + TypeScript client with an account dashboard, transfer form and statement view.",
      "Supabase authentication with PIN confirmation on outgoing transactions.",
      "PostgreSQL transactions guarantee every send is matched by a receive — money can't disappear mid-transfer.",
      "Role-based views: standard users see only their own statements; admins get an oversight dashboard.",
    ],
    challenges: [
      {
        issue: "Balances could drift if a transfer failed halfway through.",
        fix: "Wrapped each transfer in a single database transaction so the debit and credit either both commit or both roll back.",
      },
      {
        issue: "An authenticated user could query other people's statements by guessing IDs.",
        fix: "Scoped statement queries with row-level security to the authenticated user, and gated the oversight view behind an admin role.",
      },
    ],
    results: [
      "Full send/receive loop with live balance updates.",
      "Complete statement history for every account.",
      "PIN confirmation on outgoing transactions.",
      "Admin oversight view with platform-wide activity.",
    ],
    githubUrl: `${GITHUB_URL}/mpesa-web-app`,
  },
  {
    id: "p3",
    title: "Coin Sorter",
    slug: "coin-sorter",
    tagline: "A mechatronic machine that sorts coins by size using sensors and an actuator.",
    description:
      "A coin sorting machine combining a mechanical feed chute, IR detection, microcontroller logic and a servo-actuated diverter.",
    category: ["Engineering"],
    technologies: ["C", "ATmega", "IR Sensors", "Servo", "Proteus", "CAD"],
    status: "completed",
    featured: true,
    year: 2025,
    overview:
      "A mechatronic coin sorting machine. Coins drop from a hopper down a guide chute and pass a single IR detection window. The microcontroller measures the width of the sensor pulse to estimate coin diameter, classifies the denomination, and fires a servo-actuated diverter to route each coin into the correct bin.",
    problem:
      "Manually sorting mixed coins is slow and error-prone. The machine had to reliably detect each coin as it fell and actuate the diverter in time to route it to the right bin.",
    objective:
      "Detect each coin as it passes the sensor, classify it by measured diameter, and actuate the diverter fast enough to sort coins into the correct bins.",
    architecture: [
      { label: "Input", sub: "Coins" },
      { label: "Sensor", sub: "IR" },
      { label: "MCU", chip: true, sub: "ATmega" },
      { label: "Actuator", sub: "Servo" },
      { label: "Output", sub: "Bins" },
    ],
    implementation: [
      "Mechanical chute machined to feed coins edge-on through a single IR detection window.",
      "ATmega-based controller measuring sensor pulse width to estimate coin diameter.",
      "C firmware with calibrated diameter thresholds for each tested denomination.",
      "Servo-actuated diverter flaps routing coins into separate bins.",
      "Proteus simulation of the sensing and actuation logic before hardware bring-up.",
    ],
    challenges: [
      {
        issue: "Coin classification depended on how fast the coin fell, so results were inconsistent.",
        fix: "Switched from measuring raw sensor level to measuring pulse duration — classification became independent of feed speed.",
      },
      {
        issue: "The first chute prototype jammed whenever coins stacked on top of each other.",
        fix: "Redesigned the chute throat to a single-coin width and added an anti-stack lip at the hopper exit.",
      },
    ],
    results: [
      "Reliable sorting across all tested denominations.",
      "Diverter timing verified in Proteus simulation before hardware assembly.",
      "Pulse-width measurement made classification robust to feed-speed variation.",
    ],
    githubUrl: `${GITHUB_URL}/coin-sorter`,
  },
  {
    id: "p4",
    title: "AI Meal Tracker",
    slug: "ai-meal-tracker",
    tagline: "An AI-assisted meal tracker that turns food into nutrition data.",
    description:
      "Log meals by description, let an AI model identify the food and return a nutrition breakdown, then track daily goals and history.",
    category: ["AI"],
    technologies: ["React", "TypeScript", "LLM API", "Supabase", "Tailwind CSS"],
    status: "completed",
    featured: true,
    year: 2026,
    overview:
      "A web app where users log a meal with a short description and an AI model identifies the dish and returns a structured nutrition breakdown — portion, macros and calories. Entries are stored in a database so users can track daily totals, hit goals and review weekly summaries.",
    problem:
      "Manual nutrition logging is tedious and error-prone, which is why most people abandon food trackers within days.",
    objective:
      "Make logging nearly effortless by letting AI do the identification, while keeping a structured database of meals, goals and history.",
    architecture: [
      { label: "Input", sub: "Meal" },
      { label: "Model", sub: "AI" },
      { label: "Parser", sub: "JSON" },
      { label: "DB", sub: "Supabase" },
      { label: "Dashboard", sub: "Goals" },
    ],
    implementation: [
      "React + TypeScript front end with a quick-log flow and daily dashboard.",
      "LLM-based food identification that returns structured JSON — dish, portion and macros.",
      "Supabase stores meals, goals and history for longitudinal tracking.",
      "Validation layer catches malformed model output before it reaches the database.",
    ],
    challenges: [
      {
        issue: "The model occasionally returned plausible but wrong portion sizes.",
        fix: "Added a lightweight confirmation step where the user can correct portion size before the entry is committed.",
      },
      {
        issue: "Free-text meal names created noisy, near-duplicate entries.",
        fix: "Constrained the model output to a fixed schema and mapped synonyms to a canonical food list.",
      },
    ],
    results: [
      "Meal logging in under 10 seconds end-to-end.",
      "Structured nutrition history persisted across sessions.",
      "Daily goal tracking with weekly summary views.",
      "Robust handling of malformed model output.",
    ],
    githubUrl: `${GITHUB_URL}/ai-meal-tracker`,
  },
  {
    id: "p5",
    title: "Persistence of Vision Display",
    slug: "pov-display",
    tagline: "An AVR-based POV display driven by timer interrupts.",
    description:
      "A spinning LED display that paints text and patterns in mid-air using a hardware timer to keep the image stable.",
    category: ["Embedded"],
    technologies: ["C", "AVR", "ATmega", "Timers", "Proteus", "Atmel Studio"],
    status: "completed",
    featured: false,
    year: 2025,
    overview:
      "A spinning persistence-of-vision display. A column of LEDs spins on a rotor while an ATmega toggles the LEDs at precisely timed intervals, painting text and patterns that appear to float in mid-air. A hardware timer — not a software delay loop — drives the switching so the image stays stable.",
    problem:
      "A POV display only works if LED switching is timed accurately to the rotor position. Software delay loops are far too jittery for a stable image.",
    objective:
      "Drive a column of LEDs from an ATmega using timer interrupts, synchronised to a position sensor, so the rendered image stays stable as the rotor spins.",
    architecture: [
      { label: "Sensor", sub: "Position" },
      { label: "MCU", chip: true, sub: "ATmega" },
      { label: "Timer", sub: "ISR" },
      { label: "Output", sub: "LEDs" },
      { label: "Image", sub: "POV" },
    ],
    implementation: [
      "ATmega-based controller with an IR position sensor to sync each revolution.",
      "Timer1 configured for a 30 ms interrupt period driving the LED column.",
      "C firmware with lookup tables for character patterns.",
      "Circuit and timing verified in Proteus before hardware assembly.",
    ],
    challenges: [
      {
        issue: "The initial timer configuration produced an incorrect interrupt period.",
        fix: "Timer1 was selected over Timer0 because its 16-bit resolution provided sufficient range for the required 30 ms interval — Timer0's 8-bit counter needed awkward prescaler math and drifted.",
      },
      {
        issue: "The image smeared whenever rotation speed changed.",
        fix: "Added a correction loop that re-syncs the pattern to the position sensor at the start of every revolution.",
      },
    ],
    results: [
      "Stable text and patterns rendered in mid-air.",
      "Timing verified in simulation and confirmed on hardware.",
      "Demonstrated the difference between timer-driven and delay-loop-driven switching.",
    ],
    githubUrl: `${GITHUB_URL}/pov-display`,
  },
  {
    id: "p6",
    title: "Unity Conveyor & Sorting Simulation",
    slug: "conveyor-simulation",
    tagline: "A Unity simulation of a conveyor sorting line for automation coursework.",
    description:
      "An interactive Unity scene modelling a conveyor belt with sensors and diverters, used to validate sorting logic before any physical build.",
    category: ["Automation"],
    technologies: ["Unity", "C#", "State Machines", "Physics"],
    status: "completed",
    featured: false,
    year: 2025,
    overview:
      "An interactive Unity simulation of an industrial conveyor sorting line. Items travel on a belt past proximity sensors and are routed by diverter gates based on configurable sorting logic. The scene was used to validate control decisions visually before any hardware was built.",
    problem:
      "Physical conveyor iterations are slow and expensive — control-logic errors should be caught before hardware exists.",
    objective:
      "Simulate the belt, sensors and diverter logic so sorting decisions can be validated visually and the logic reused in the physical rig.",
    architecture: [
      { label: "Items", sub: "Products" },
      { label: "Belt", sub: "Physics" },
      { label: "Sensors", sub: "IR" },
      { label: "Logic", sub: "C#" },
      { label: "Diverter", sub: "Output" },
    ],
    implementation: [
      "Unity + C# scene with belt physics and proximity sensors.",
      "Finite-state-machine diverter controller matching the planned hardware behaviour.",
      "Reusable sorting rules driven by a data table.",
    ],
    challenges: [
      {
        issue: "Items clipped through the diverter at high belt speeds.",
        fix: "Tuned the physics timestep and diverter timing to match realistic servo latency rather than ideal timing.",
      },
    ],
    results: [
      "Working visual simulation of the full sorting line.",
      "Diverter control logic reused as the reference for the physical build.",
    ],
    githubUrl: `${GITHUB_URL}/conveyor-simulation`,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const categories = ["All", "Embedded", "Software", "AI", "Engineering", "Automation"];

export const timeline = [
  { year: "2023", items: ["High School"] },
  { year: "2024", items: ["Mechatronics Engineering", "Electronics", "Programming"] },
  { year: "2025", items: ["Embedded Systems", "Web Development", "Automation"] },
  {
    year: "2026",
    items: ["AI Applications", "Full-stack Systems", "Embedded Projects", "Engineering Projects"],
  },
];

export const skills = [
  {
    title: "Embedded Systems",
    items: ["C / C++", "AVR microcontrollers", "Timers & interrupts", "GPIO", "UART · SPI · I²C", "PWM"],
  },
  {
    title: "Software Engineering",
    items: ["JavaScript", "TypeScript", "React", "Vite", "HTML / CSS", "Git / GitHub"],
  },
  {
    title: "Backend / Data",
    items: ["Supabase", "PostgreSQL", "REST APIs", "Authentication", "Database design"],
  },
  {
    title: "Engineering",
    items: ["Mechatronics", "Circuit analysis", "Control systems", "Sensors & actuators", "Automation", "CAD"],
  },
  {
    title: "Tools",
    items: ["Proteus", "Atmel Studio", "Unity", "Figma", "Linux", "Vercel / Netlify"],
  },
];

export const focusAreas = [
  "Embedded systems",
  "Automation",
  "Robotics",
  "Software engineering",
  "Electronics",
  "AI systems",
  "Control systems",
];

export const repos = [
  {
    name: "mamas-kitchen-ordering-system",
    description: "Full-stack kiosk ordering system with live kitchen dashboard.",
    language: "TypeScript",
  },
  {
    name: "mpesa-web-app",
    description: "M-Pesa-style money transfer web application with a full ledger.",
    language: "TypeScript",
  },
  {
    name: "coin-sorter",
    description: "Mechatronic coin sorting machine — C firmware on ATmega.",
    language: "C",
  },
  {
    name: "ai-meal-tracker",
    description: "AI-assisted meal tracking with structured nutrition data.",
    language: "TypeScript",
  },
];
