import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z"
  },
  {
    id: "2",
    userId: "user2",
    role: "Backend Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB"],
    level: "Mid",
    questions: ["Explain the event loop in Node.js"],
    finalized: true,
    createdAt: "2024-03-16T11:00:00Z"
  },
  {
    id: "3",
    userId: "user3",
    role: "Fullstack Developer",
    type: "Technical",
    techstack: ["React", "Node.js", "PostgreSQL"],
    level: "Senior",
    questions: ["Describe how you’d structure a fullstack app"],
    finalized: false,
    createdAt: "2024-03-17T09:30:00Z"
  },
  {
    id: "4",
    userId: "user4",
    role: "Data Scientist",
    type: "Mixed",
    techstack: ["Python", "Pandas", "TensorFlow"],
    level: "Junior",
    questions: ["What is overfitting?"],
    finalized: true,
    createdAt: "2024-03-18T14:00:00Z"
  },
  {
    id: "5",
    userId: "user5",
    role: "DevOps Engineer",
    type: "Mixed",
    techstack: ["Docker", "Kubernetes", "AWS"],
    level: "Mid",
    questions: ["Explain CI/CD pipeline"],
    finalized: false,
    createdAt: "2024-03-19T16:45:00Z"
  },
  {
    id: "6",
    userId: "user6",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["Vue.js", "JavaScript", "CSS"],
    level: "Mid",
    questions: ["How does Vue’s reactivity system work?"],
    finalized: true,
    createdAt: "2024-03-20T12:00:00Z"
  },
  {
    id: "7",
    userId: "user7",
    role: "Machine Learning Engineer",
    type: "Mixed",
    techstack: ["Python", "scikit-learn", "PyTorch"],
    level: "Senior",
    questions: ["Compare PyTorch and TensorFlow"],
    finalized: true,
    createdAt: "2024-03-21T18:30:00Z"
  },
  {
    id: "8",
    userId: "user8",
    role: "Product Manager",
    type: "Non-Technical",
    techstack: ["Figma", "Jira", "Confluence"],
    level: "Mid",
    questions: ["How do you prioritize features in a roadmap?"],
    finalized: false,
    createdAt: "2024-03-22T08:15:00Z"
  },
  {
    id: "9",
    userId: "user9",
    role: "QA Engineer",
    type: "Technical",
    techstack: ["Selenium", "Jest", "Cypress"],
    level: "Junior",
    questions: ["What’s the difference between unit and integration testing?"],
    finalized: true,
    createdAt: "2024-03-23T10:10:00Z"
  }
];

