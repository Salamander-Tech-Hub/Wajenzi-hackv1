/**
 * RAG knowledge base for the Salamander chatbot.
 * Each entry has keywords (for retrieval) and content (the answer).
 */

export interface KnowledgeEntry {
  id: string;
  keywords: string[];
  title: string;
  content: string;
  /** Optional link to learn more */
  link?: { label: string; url: string };
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: 'who',
    keywords: ['who', 'what', 'salamander', 'company', 'team', 'about', 'intro', 'introduction'],
    title: 'About Salamander',
    content: "Salamander is a tech hub and community dedicated to elite engineering and modern product development. We build battle-tested software and contribute to the global open-source ecosystem. Our mission: Build. Burn. Evolve. We're a bridge between corporate excellence and open-source freedom.",
    link: { label: 'Learn more about us', url: '/about' },
  },
  {
    id: 'mission',
    keywords: ['mission', 'vision', 'goal', 'purpose', 'believe', 'open source', 'opensource'],
    title: 'Our Mission',
    content: "We believe open source is for everyone. Our mission is to demystify open source contribution and create a welcoming space for learners at all levels. We forge the tools that power the future, one pull request at a time. Everything we build is open by design—accessible, transparent, and community-driven.",
    link: { label: 'About Salamander', url: '/about' },
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'get in touch', 'hello', 'inquire', 'talk', 'support', 'help'],
    title: 'Contact',
    content: "You can get in touch with us anytime. Use the Inquire button in the nav or visit our Contact page to send a message. For quick questions, we're happy to help here—or head to the Contact page for the full form.",
    link: { label: 'Go to Contact', url: '/contact' },
  },
  {
    id: 'projects',
    keywords: ['projects', 'work', 'what do you do', 'services', 'build', 'develop', 'github', 'open source projects'],
    title: 'Projects & Work',
    content: "We work on high-end developer services, open-source initiatives, and infrastructure. Our projects span from developer tools to community platforms. Check our GitHub (Salamander-Tech-Hub) and the Projects section on the site for the latest.",
    link: { label: 'View our GitHub', url: 'https://github.com/Salamander-Tech-Hub' },
  },
  {
    id: 'consultation',
    keywords: ['consultation', 'book', 'hire', 'collaborate', 'partnership', 'work with', 'engagement'],
    title: 'Consultations',
    content: "We offer consultations for ambitious teams. Book a consultation from the homepage or use the Inquire button to start a conversation. We'll get back to you soon.",
    link: { label: 'Contact us', url: '/contact' },
  },
  {
    id: 'community',
    keywords: ['community', 'members', 'contributors', 'join', 'contribute', 'participate'],
    title: 'Community',
    content: "Salamander has 500+ active members and 1k+ contributions. We're 100% open source and community-driven. If you want to contribute or join, check our GitHub and the About page to see how we work.",
    link: { label: 'About us', url: '/about' },
  },
  {
    id: 'founders',
    keywords: ['founder', 'founders', 'ceo', 'cto', 'andrew', 'martha', 'leadership'],
    title: 'Leadership',
    content: "Our co-founders are Andrew Kim (Co-Founder & CTO) and Martha Sharon (Co-Founder & CEO). We have a strong core team across infrastructure, community, design, DevOps, and security. Meet everyone on the About page.",
    link: { label: 'Meet the team', url: '/about' },
  },
  {
    id: 'tech',
    keywords: ['tech', 'stack', 'technologies', 'linux', 'docker', 'python', 'apache', 'tools'],
    title: 'Tech & Stack',
    content: "We pioneer open infrastructure and use a modern stack: Linux, Apache, GitHub, Docker, Python, and more. We focus on battle-tested, open-source-friendly technologies.",
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'howdy'],
    title: 'Greeting',
    content: "Hi! I'm the Salamander assistant. Ask me about our company, mission, projects, or how to get in touch. Try: \"What is Salamander?\" or \"How can I contact you?\"",
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thankyou', 'appreciate', 'helpful'],
    title: 'You\'re welcome',
    content: "You're welcome! If you have more questions about Salamander, projects, or contact, just ask.",
  },
  {
    id: 'fallback',
    keywords: [],
    title: 'Not sure',
    content: "I couldn't find a precise answer for that. Try asking about Salamander, our mission, projects, or how to contact us. You can also visit the About or Contact page for more.",
    link: { label: 'Contact us', url: '/contact' },
  },
];

/** Normalize text for matching: lowercase, strip punctuation, split into words */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

/** Score how well a query matches an entry (keyword overlap + title relevance) */
function scoreEntry(entry: KnowledgeEntry, queryTokens: Set<string>): number {
  let score = 0;
  const contentTokens = new Set(tokenize(entry.title + ' ' + entry.content));
  const keywordSet = new Set(entry.keywords.map((k) => k.toLowerCase()));

  for (const q of queryTokens) {
    if (keywordSet.has(q)) score += 3;
    if (contentTokens.has(q)) score += 1;
  }
  return score;
}

/**
 * RAG-style retrieval: find the best matching knowledge entry for the user message.
 * Returns the top entry; if no match, returns the fallback entry.
 */
export function retrieveAnswer(userMessage: string): KnowledgeEntry {
  const trimmed = userMessage.trim();
  if (!trimmed) {
    return knowledgeBase.find((e) => e.id === 'greeting')!;
  }

  const queryTokens = new Set(tokenize(trimmed));
  let best = knowledgeBase.find((e) => e.id === 'fallback')!;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    if (entry.id === 'fallback') continue;
    const s = scoreEntry(entry, queryTokens);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  }

  return best;
}
