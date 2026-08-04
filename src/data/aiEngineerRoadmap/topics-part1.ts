import type { RoadmapTopic } from "./types";

export const roadmapTopics: RoadmapTopic[] = [
  {
    id: "01",
    slug: "what-is-ai-engineering",
    number: 1,
    phase: 0,
    title: "What is AI Engineering?",
    oneLiner: "You wire smart models into real products — not train them from scratch.",
    analogy:
      "Think of the LLM as a brilliant intern who read the whole internet. AI engineering is giving that intern a desk, rules, company files, and APIs — then shipping what they produce to users.",
    sections: [
      {
        title: "Small talk version",
        paragraphs: [
          "ChatGPT feels like magic. Under the hood it's: your app → your server → model API → answer back.",
          "ML engineer = trains models. AI engineer = builds the product layer: prompts, RAG, agents, APIs, evals, deploy.",
          "You're already doing this in enterprise multi-agent apps. This roadmap fills the gaps so you can own the full stack confidently.",
        ],
      },
      {
        title: "What you do day-to-day",
        paragraphs: [
          "Call LLM APIs (OpenAI, Azure OpenAI, Anthropic).",
          "Build RAG so the bot answers from company docs — not imagination.",
          "Orchestrate agents that call internal APIs and merge results.",
          "Measure quality (evals), control cost, deploy behind FastAPI/Docker.",
        ],
      },
      {
        title: "Deep dive — why your multi-agent app fits here",
        paragraphs: [
          "Your flow: user question → orchestrator → specialist agents → API calls → combined response.",
          "That's AI engineering: orchestration + tools + grounding + production glue.",
          "The model is ~30% of the work. The other 70%: data pipelines, guardrails, latency, logging, evals.",
          "Forward Deployment Engineer (your long-term goal) = AI engineer who ships on customer sites, debugs live systems, and bridges eng + stakeholders. Same skills, more field ops.",
        ],
        isDeepDive: true,
      },
    ],
    interviewBite: {
      q: "AI engineer vs ML engineer?",
      a: "ML engineer focuses on training and model architecture. AI engineer focuses on application layer — prompts, RAG, agents, APIs, eval, production — usually with off-the-shelf models.",
    },
    checkpoint: "Explain your multi-agent app in one sentence: who calls whom, and where data comes from.",
    exercise: "Draw boxes: User → UI → API → Agent(s) → Tools/APIs → Response. Label each box with a technology you use today.",
  },
  {
    id: "02",
    slug: "setup-your-lab",
    number: 2,
    phase: 0,
    title: "Setup Your Lab",
    oneLiner: "Python, keys, Docker — the minimum toolbox.",
    analogy:
      "Like setting up a kitchen before cooking. Same ingredients (model APIs), you need knives (Python), a stove (server), and a lock on the pantry (secrets).",
    sections: [
      {
        title: "The essentials",
        paragraphs: [
          "Python 3.11+, VS Code or Cursor, Git, Docker (optional but standard in enterprise).",
          "API key in .env — never in code, never in the browser.",
          "Free local option: Ollama for practice without billing.",
        ],
      },
      {
        title: "Example — safe key loading",
        paragraphs: [
          "Enterprise apps use the same pattern: environment variables in dev, secret manager (Azure Key Vault, AWS Secrets Manager) in prod.",
        ],
      },
    ],
    codeExample: {
      title: "Check your key is loaded (never print the key)",
      code: `import os
from dotenv import load_dotenv

load_dotenv()
if os.getenv("OPENAI_API_KEY"):
    print("✓ API key loaded")
else:
    print("✗ Set OPENAI_API_KEY in .env")`,
    },
    interviewBite: {
      q: "Where do API keys live?",
      a: "Server-side env vars or secret managers. Never client-side, never git.",
    },
    checkpoint: "python --version, docker --version, and one successful API call (or Ollama run).",
    exercise: "Create a .env, .gitignore entry, and a 5-line script that validates the key exists.",
  },
  {
    id: "03",
    slug: "python-for-ai",
    number: 3,
    phase: 1,
    title: "Python for AI",
    oneLiner: "Lists, dicts, async, types — what you'll type every day.",
    analogy:
      "Python is the screwdriver of AI engineering. You don't need every attachment — just the ones that turn model screws.",
    sections: [
      {
        title: "Daily patterns",
        paragraphs: [
          "Dicts for config and API JSON. List comprehensions for batch text. pathlib for reading docs. httpx/async for calling APIs without blocking other users.",
          "Type hints + Pydantic = contracts at the door. Bad JSON fails before it wastes tokens.",
        ],
      },
      {
        title: "Enterprise example",
        paragraphs: [
          "Your agent returns tool results as dicts. You validate with Pydantic before passing back to the orchestrator. One bad field shouldn't crash the whole multi-agent loop.",
        ],
      },
    ],
    codeExample: {
      title: "Chunk text for RAG indexing",
      code: `def chunk_text(text: str, size: int = 500, overlap: int = 50) -> list[str]:
    chunks, start = [], 0
    while start < len(text):
        chunks.append(text[start : start + size])
        start += size - overlap
    return chunks`,
    },
    interviewBite: {
      q: "Why Pydantic in AI APIs?",
      a: "Validates requests at the boundary. Invalid payloads fail fast — saves money and prevents weird model behavior.",
    },
    checkpoint: "Write chunk_text and test on a 250-character string → 3 chunks.",
    exercise: "Write a function that takes a list of API responses and returns only successful ones (status 200).",
  },
  {
    id: "04",
    slug: "math-you-need",
    number: 4,
    phase: 1,
    title: "Math You Actually Need",
    oneLiner: "Vectors and similarity — that's most of it for app engineers.",
    analogy:
      "Embeddings are GPS coordinates for meaning. 'King' and 'queen' sit close. 'King' and 'banana' are far apart. Search = find nearest coordinates.",
    sections: [
      {
        title: "The four ideas",
        paragraphs: [
          "Vectors — embeddings are long lists of numbers.",
          "Dot product / cosine similarity — how alike two pieces of text are.",
          "Softmax — turns scores into probabilities (how models pick the next word).",
          "Gradients — intuition for training (which direction improves the model).",
        ],
      },
      {
        title: "Real example — semantic search",
        paragraphs: [
          "User asks: 'password reset'. Doc says: 'recover your login'. Keywords don't match — but vectors are close. RAG retrieves the right chunk anyway.",
        ],
      },
    ],
    codeExample: {
      title: "Cosine similarity with NumPy",
      code: `import numpy as np

def cosine(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Higher score = more similar (max ~1.0)`,
    },
    interviewBite: {
      q: "How does semantic search work mathematically?",
      a: "Embed query and documents into vectors. Rank by cosine similarity or dot product on normalized vectors. Return top-k.",
    },
    checkpoint: "Explain cosine similarity without saying 'machine learning'.",
    exercise: "Given 3 sentence embeddings, pick the best match for a query embedding using cosine.",
  },
  {
    id: "05",
    slug: "machine-learning-basics",
    number: 5,
    phase: 2,
    title: "Machine Learning Basics",
    oneLiner: "Show data → learn pattern → predict. Know train vs test.",
    analogy:
      "Like studying past exams to predict exam questions — but if you memorize only those exact questions, you fail on new ones (overfitting).",
    sections: [
      {
        title: "Core vocabulary",
        paragraphs: [
          "Features = inputs. Labels = correct answers. Loss = how wrong the model is.",
          "Train set = learn. Validation = tune. Test set = final exam (touch once).",
          "Overfit = memorizes. Underfit = too simple.",
        ],
      },
      {
        title: "When LLMs replaced classical ML",
        paragraphs: [
          "Old NLP: train a classifier per task. Now: one big model + prompts/RAG. Tabular ML (sales forecasts, fraud scores) still huge in enterprise.",
        ],
      },
    ],
    interviewBite: {
      q: "When not use an LLM?",
      a: "Small labeled data, strict latency/cost, need interpretability, or simple tabular classification — classical ML may win.",
    },
    checkpoint: "Define overfitting in one sentence with an example.",
    exercise: "Name one classification, one regression, one clustering problem from your work.",
  },
  {
    id: "06",
    slug: "deep-learning-pytorch",
    number: 6,
    phase: 2,
    title: "Deep Learning & PyTorch",
    oneLiner: "Stacks of simple math — you call transformers via API, but know what's inside.",
    analogy:
      "A neural network is a team of calculators in layers. Each layer refines the answer. Transformers let every word 'look at' every other word in one go.",
    sections: [
      {
        title: "What you need to know",
        paragraphs: [
          "Tensor = multi-dimensional array. GPU crunches these fast.",
          "Forward pass = prediction. Backward pass = training (gradients).",
          "You won't train GPT-4. You might fine-tune small models or debug why an embedding model behaves oddly.",
        ],
      },
      {
        title: "Transformer intuition",
        paragraphs: [
          "Self-attention: each token asks 'which other tokens matter for me?'",
          "Pretrain = predict next token on huge text. Inference = generate one token at a time (or stream).",
        ],
        isDeepDive: true,
      },
    ],
    codeExample: {
      title: "Tiny PyTorch tensor op",
      code: `import torch
x = torch.tensor([1.0, 2.0, 3.0])
y = x * 2 + 1
print(y)  # tensor([3., 5., 7.])`,
    },
    interviewBite: {
      q: "Forward vs backward pass?",
      a: "Forward: input → output. Backward: compute gradients for weight updates during training. Inference usually only forward.",
    },
    checkpoint: "What is a transformer in plain English?",
    exercise: "Install torch, multiply two random 3×4 tensors, print result shape.",
  },
  {
    id: "07",
    slug: "how-llms-work",
    number: 7,
    phase: 3,
    title: "How LLMs Work",
    oneLiner: "Super autocomplete — predicts the next piece of text, again and again.",
    analogy:
      "You type 'The capital of France is' and it guesses ' Paris'. Then it guesses what comes after Paris. That's the whole trick — scaled to billions of parameters.",
    sections: [
      {
        title: "The pipeline",
        paragraphs: [
          "Text → tokens → embeddings → transformer blocks → probability over next token → sample → repeat.",
          "Temperature: low = boring/reliable, high = creative/random.",
          "Pretrain (once, expensive) vs inference (per request, what you pay for).",
        ],
      },
      {
        title: "Your agent app connection",
        paragraphs: [
          "Each agent step is one or more LLM calls. Orchestrator decides next agent. Worker agents may each call the model again with different prompts and tools.",
          "Understanding token generation helps you debug slow chains and runaway costs.",
        ],
      },
    ],
    interviewBite: {
      q: "Why do LLMs hallucinate?",
      a: "They predict plausible text, not verified facts. Fix with RAG, tools, citations, evals — not hope.",
    },
    checkpoint: "Trace one user message through: UI → API → model → stream back.",
    exercise: "Use tiktokenizer.vercel.app — compare token count vs word count for a paragraph.",
  },
  {
    id: "08",
    slug: "tokens-and-context",
    number: 8,
    phase: 3,
    title: "Tokens & Context",
    oneLiner: "Models eat tokens, not words. Context window = max tokens per request.",
    analogy:
      "Like a desk size limit. You can only spread so many papers (tokens) before things fall off. Long PDFs must be summarized or retrieved in pieces.",
    sections: [
      {
        title: "Why it matters",
        paragraphs: [
          "Billing = per token. Long prompts = expensive.",
          "Context limit = input + output combined. Stuffing whole databases fails.",
          "Multi-agent apps multiply tokens: each agent hop adds prompt + tool results.",
        ],
      },
      {
        title: "Budget template",
        paragraphs: [
          "128k context − system prompt − tool schemas − retrieved chunks − reserved output = what fits.",
          "Don't dump 500-page PDFs. Chunk, embed, retrieve top-k only.",
        ],
        isDeepDive: true,
      },
    ],
    codeExample: {
      title: "Count tokens",
      code: `import tiktoken
enc = tiktoken.encoding_for_model("gpt-4o-mini")
text = "How many tokens is this sentence?"
print(len(enc.encode(text)))`,
    },
    interviewBite: {
      q: "User uploads 500-page PDF?",
      a: "Chunk, embed, index. On query retrieve top-k chunks. Never stuff full PDF in prompt.",
    },
    checkpoint: "Know your model's context limit and $ per 1M tokens.",
    exercise: "Estimate monthly cost: 1000 users × 10 questions × 2000 tokens each.",
  },
  {
    id: "09",
    slug: "prompt-engineering",
    number: 9,
    phase: 4,
    title: "Prompt Engineering",
    oneLiner: "Instructions + context + format = product behavior.",
    analogy:
      "Same as briefing a new teammate. Vague brief → vague work. Clear role, rules, and output format → consistent results.",
    sections: [
      {
        title: "Structure that works",
        paragraphs: [
          "System: who you are + rules. User: the task. Assistant: examples (few-shot) if needed.",
          "Techniques: few-shot, chain-of-thought ('think step by step'), JSON mode, delimiters for context.",
        ],
      },
      {
        title: "Multi-agent example",
        paragraphs: [
          "Orchestrator prompt: 'Pick the right specialist. Output JSON: {agent: ..., reason: ...}'.",
          "Worker prompt: 'You only handle billing APIs. Return structured JSON. Never guess.'",
          "Different prompts per agent = different behavior from the same base model.",
        ],
      },
    ],
    codeExample: {
      title: "System + user messages",
      code: `messages = [
    {"role": "system", "content": "You route questions. Output JSON only."},
    {"role": "user", "content": "Where is my invoice for March?"},
]`,
    },
    interviewBite: {
      q: "Prompting vs fine-tuning?",
      a: "Prompting: fast, no training. Fine-tuning: when behavior must be consistent at scale or won't fit in context.",
    },
    checkpoint: "Write a system prompt with role, 3 rules, and output format.",
    exercise: "Write prompts for orchestrator vs API-worker agent in your app style.",
  },
  {
    id: "10",
    slug: "embeddings-and-vectors",
    number: 10,
    phase: 4,
    title: "Embeddings & Vectors",
    oneLiner: "Turn text into numbers that capture meaning — search by similarity.",
    analogy:
      "Like sorting songs by mood instead of title. 'Happy' matches 'joyful' even though the words differ.",
    sections: [
      {
        title: "The flow",
        paragraphs: [
          "Offline: embed all docs → store in vector DB.",
          "Online: embed question → find nearest vectors → return those docs.",
          "Vector DBs: Chroma, Pinecone, pgvector, Azure AI Search.",
        ],
      },
      {
        title: "Enterprise tip",
        paragraphs: [
          "Hybrid search = vectors + keyword (BM25). SKUs, ticket IDs, exact names often need keywords. Semantic handles paraphrases.",
        ],
      },
    ],
    codeExample: {
      title: "OpenAI embedding call",
      code: `from openai import OpenAI
client = OpenAI()
r = client.embeddings.create(
    model="text-embedding-3-small",
    input="reset my password",
)
vector = r.data[0].embedding  # ~1536 floats`,
    },
    interviewBite: {
      q: "Why not keyword search only?",
      a: "Misses synonyms and paraphrases. Best systems blend keyword + vector.",
    },
    checkpoint: "Embed 5 sentences, find the pair most similar to a query.",
    exercise: "Explain when you'd use Azure AI Search vs a simple Chroma local index.",
  },
];
