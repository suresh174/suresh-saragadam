import type { RoadmapTopic } from "./types";

export const roadmapTopicsPart2: RoadmapTopic[] = [
  {
    id: "11",
    slug: "rag",
    number: 11,
    phase: 4,
    title: "RAG — Retrieval Augmented Generation",
    oneLiner: "Fetch the right docs first, then let the model answer from them.",
    analogy:
      "Like a lawyer who reads the case file before answering — instead of guessing from memory.",
    sections: [
      {
        title: "4-step pipeline",
        paragraphs: [
          "Index: docs → chunk → embed → store.",
          "Query: question → embed → retrieve top-k → build prompt → generate.",
          "Always tell the model: 'Answer ONLY from context. Say I don't know if missing.'",
        ],
      },
      {
        title: "Multi-agent + RAG",
        paragraphs: [
          "One agent can specialize in retrieval only. Another synthesizes. Orchestrator routes: factual questions → RAG agent; action requests → API agent.",
          "This mirrors enterprise patterns you already build — naming the layers helps you debug retrieval vs generation failures.",
        ],
      },
      {
        title: "Deep dive — common failures",
        paragraphs: [
          "Wrong chunk retrieved → tune chunk size, hybrid search, reranking.",
          "Model ignores context → stronger prompt, cite sources.",
          "Stale index → re-ingest pipeline on doc updates.",
        ],
        isDeepDive: true,
      },
    ],
    codeExample: {
      title: "RAG prompt skeleton",
      code: `prompt = f"""
Use ONLY this context. If unsure, say "I don't know."

Context:
{retrieved_chunks}

Question: {user_question}
"""`,
    },
    interviewBite: {
      q: "RAG vs fine-tuning for company knowledge?",
      a: "RAG for dynamic facts and citations. Fine-tune for style/behavior. Often both.",
    },
    checkpoint: "Explain RAG in 4 steps without notes.",
    exercise: "List 3 failure modes you've seen and one fix for each.",
  },
  {
    id: "12",
    slug: "function-calling-tools",
    number: 12,
    phase: 4,
    title: "Function Calling & Tools",
    oneLiner: "Model picks a function name + args — your code actually runs it.",
    analogy:
      "The model is the manager who writes 'call IT about ticket #4521'. Your server is IT — it executes and reports back.",
    sections: [
      {
        title: "The loop",
        paragraphs: [
          "User asks → model returns tool_call JSON → your code runs API → result goes back to model → final answer.",
          "This is the core of your enterprise app: agents don't 'fetch data' magically — they emit structured calls you execute.",
        ],
      },
      {
        title: "Tool design rules",
        paragraphs: [
          "Clear names and descriptions. Validate all args. Timeouts on external APIs. Return errors as text so model can recover.",
          "Least privilege: read-only tools first. Confirm before destructive writes.",
        ],
      },
    ],
    codeExample: {
      title: "Tool schema (OpenAI style)",
      code: `tools = [{
  "type": "function",
  "function": {
    "name": "get_order_status",
    "description": "Fetch order status by order ID",
    "parameters": {
      "type": "object",
      "properties": {"order_id": {"type": "string"}},
      "required": ["order_id"]
    }
  }
}]`,
    },
    interviewBite: {
      q: "How do agents use tools?",
      a: "Loop: model plans → tool call → runtime executes → result as message → repeat until done.",
    },
    checkpoint: "Trace tool call: model output → your handler → API → back to model.",
    exercise: "Define 2 tools for your domain. Write the JSON schemas.",
  },
  {
    id: "13",
    slug: "ai-agents",
    number: 13,
    phase: 5,
    title: "AI Agents",
    oneLiner: "Plan → act → observe → repeat until the job is done.",
    analogy:
      "A project manager who delegates: research agent, API agent, writer agent — checks results, assigns next step, doesn't do everything alone.",
    sections: [
      {
        title: "Agent loop",
        paragraphs: [
          "Observe state → LLM decides next step → tool call or final answer → update state → loop (max steps cap).",
          "Your multi-agent enterprise app is this pattern at production scale.",
        ],
      },
      {
        title: "Agent vs workflow",
        paragraphs: [
          "Workflow = fixed steps (reliable, cheap). Agent = dynamic planning (flexible, costly).",
          "Use workflows where you can. Agents where the path varies per user request.",
        ],
      },
      {
        title: "Deep dive — failure modes",
        paragraphs: [
          "Infinite loops → max steps + stop conditions.",
          "Wrong tool → fewer tools, better descriptions.",
          "Cost explosion → smaller model for routing, cache frequent paths.",
          "Unsafe actions → human approval for high-risk tools.",
        ],
        isDeepDive: true,
      },
    ],
    interviewBite: {
      q: "RAG vs agent?",
      a: "RAG: retrieve once, generate once. Agent: multi-step loop with tools and multiple LLM calls.",
    },
    checkpoint: "Name the 4 steps of an agent loop.",
    exercise: "Map your app's agents to: role, tools, max steps, failure handling.",
  },
  {
    id: "14",
    slug: "fine-tuning",
    number: 14,
    phase: 5,
    title: "Fine-Tuning",
    oneLiner: "Extra training on your examples so the model behaves your way.",
    analogy:
      "Prompting is giving instructions each morning. Fine-tuning is training someone until they remember the process.",
    sections: [
      {
        title: "When to use",
        paragraphs: [
          "Use: fixed output format at scale, domain jargon, consistent tone.",
          "Skip: facts that change daily (use RAG), few examples (use prompts), tight budget.",
          "LoRA = cheap default — small adapter layers, not full model retrain.",
        ],
      },
      {
        title: "Enterprise angle",
        paragraphs: [
          "Sometimes you fine-tune a small router model to pick agents cheaply, while keeping big model for hard synthesis.",
        ],
      },
    ],
    interviewBite: {
      q: "Fine-tune vs RAG?",
      a: "RAG for facts and citations. Fine-tune for behavior and format. Combine when needed.",
    },
    checkpoint: "List 3 reasons to fine-tune and 3 reasons not to.",
    exercise: "Write 5 instruction examples for a ticket-classification fine-tune.",
  },
  {
    id: "15",
    slug: "evaluation-testing",
    number: 15,
    phase: 5,
    title: "Evaluation & Testing",
    oneLiner: "Score answers before users suffer — don't ship vibes.",
    analogy:
      "Unit tests for code, golden datasets for AI. 'Does this answer still work after we changed the prompt?'",
    sections: [
      {
        title: "Layers",
        paragraphs: [
          "Retrieval: right doc in top-k?",
          "Generation: correct given context?",
          "End-to-end: did the user task succeed?",
          "Safety: injection, PII leaks?",
        ],
      },
      {
        title: "Practical harness",
        paragraphs: [
          "Start with 10–50 real questions from logs. expected_contains or LLM-as-judge. Run in CI on prompt changes.",
          "Multi-agent: eval each agent output + final merged response.",
        ],
      },
    ],
    codeExample: {
      title: "Simple eval loop",
      code: `cases = [
  {"q": "Reset password?", "want": "settings"},
  {"q": "CEO salary?", "want": "don't know"},
]
for c in cases:
    ans = pipeline(c["q"])
    ok = c["want"] in ans.lower()
    print(c["q"], "PASS" if ok else "FAIL")`,
    },
    interviewBite: {
      q: "How eval an LLM app?",
      a: "Layered metrics: retrieval hit rate, faithfulness, task success, safety suite, plus human review samples.",
    },
    checkpoint: "Define one retrieval metric and one generation metric.",
    exercise: "Write 10 golden Q&A cases for your app's FAQ path.",
  },
  {
    id: "16",
    slug: "production-deployment",
    number: 16,
    phase: 6,
    title: "Production & Deployment",
    oneLiner: "FastAPI + Docker + logs + health checks — demo ≠ prod.",
    analogy:
      "Demo is a food truck. Production is a restaurant chain — same recipe, but hygiene, staffing, and alarms matter.",
    sections: [
      {
        title: "Reference stack",
        paragraphs: [
          "Client → load balancer → FastAPI → cache/vector DB → model API.",
          "Streaming (SSE) for chat UX. /health for k8s. Rate limits per user.",
        ],
      },
      {
        title: "FDE connection",
        paragraphs: [
          "Forward deployment = you ship this stack on customer VPC, debug live traffic, tune prompts with real data. Same architecture, customer-specific config.",
        ],
      },
    ],
    codeExample: {
      title: "Minimal FastAPI chat",
      code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ChatRequest(BaseModel):
    message: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/chat")
async def chat(req: ChatRequest):
    return {"reply": "..."}`,
    },
    interviewBite: {
      q: "Deploy LLM feature safely?",
      a: "Feature flags, offline eval gate, canary, monitor latency/cost/errors, rollback plan.",
    },
    checkpoint: "Sketch your prod architecture in 5 boxes.",
    exercise: "Add /health and /chat to a FastAPI stub.",
  },
  {
    id: "17",
    slug: "cost-performance",
    number: 17,
    phase: 6,
    title: "Cost & Performance",
    oneLiner: "Tokens cost money. Agents multiply calls. Optimize deliberately.",
    analogy:
      "Every agent hop is another cab fare. Route simple questions on the bus (small model / cache).",
    sections: [
      {
        title: "Cost levers",
        paragraphs: [
          "Smaller models for routing. Shorter prompts. Cache repeated questions. Batch embeddings. Cap agent steps.",
        ],
      },
      {
        title: "Performance levers",
        paragraphs: [
          "Stream tokens to UI. Parallel retrieve + prep. ANN indexes at scale. Right Azure region next to model.",
        ],
      },
    ],
    interviewBite: {
      q: "App too slow — debug?",
      a: "Profile each stage. Stream UI. Shrink context. Smaller model. Cache. Parallelize retrieval.",
    },
    checkpoint: "Name 3 ways to cut cost without killing quality.",
    exercise: "Estimate cost with vs without 30% cache hit rate.",
  },
  {
    id: "18",
    slug: "safety-guardrails",
    number: 18,
    phase: 6,
    title: "Safety & Guardrails",
    oneLiner: "Treat user text as hostile. Limit what tools can do.",
    analogy:
      "Bouncer at the door (input filter), rules on the dance floor (prompt), and no keys to the vault (tool permissions).",
    sections: [
      {
        title: "Threats",
        paragraphs: [
          "Prompt injection in uploaded docs. Jailbreaks. PII in logs. Agent calling delete API.",
        ],
      },
      {
        title: "Defenses",
        paragraphs: [
          "Isolate user content in tags. Output filters. Least-privilege tools. Human approval for risky ops. Red-team regularly.",
          "Enterprise: data residency, audit logs, content safety APIs.",
        ],
        isDeepDive: true,
      },
    ],
    interviewBite: {
      q: "Can you fully prevent prompt injection?",
      a: "No perfect fix. Layer defenses: treat untrusted text as data, limit tools, monitor anomalies.",
    },
    checkpoint: "Give one injection example and three defenses.",
    exercise: "Write a malicious user message and your API defenses.",
  },
  {
    id: "19",
    slug: "interview-prep",
    number: 19,
    phase: 7,
    title: "Interview Prep",
    oneLiner: "Short answer → tiny example → tradeoff.",
    analogy:
      "Interviewers want to see you think in systems, not recite papers. Practice out loud.",
    sections: [
      {
        title: "System design template",
        paragraphs: [
          "Requirements → data → architecture → retrieval → generation → eval → safety → cost → rollout.",
          "Draw boxes while talking. Mention tradeoffs.",
        ],
      },
      {
        title: "Must rehearse",
        paragraphs: [
          "Explain your multi-agent app end-to-end in 2 minutes.",
          "RAG vs fine-tune. Hallucination fixes. Eval strategy. When not to use LLM.",
          "Design: Q&A bot over 10k PDFs.",
        ],
        isDeepDive: true,
      },
    ],
    interviewBite: {
      q: "Design doc Q&A for 10k PDFs?",
      a: "Parse/chunk/embed/index async. Query: embed, retrieve, rerank, prompt with citations, stream. Eval golden set. Monitor cost/latency.",
    },
    checkpoint: "Answer 5 roadmap questions out loud in 60 sec each.",
    exercise: "Record 2-min explanation of your enterprise agent architecture.",
  },
  {
    id: "20",
    slug: "capstone-project",
    number: 20,
    phase: 7,
    title: "Capstone Project",
    oneLiner: "One shipped project proves more than twenty tutorials.",
    analogy:
      "This learn site is one piece. Your capstone: Company Brain — RAG + optional agents + eval + Docker.",
    sections: [
      {
        title: "MVP checklist",
        paragraphs: [
          "Upload docs → chunk → embed → chat with citations.",
          "Stream responses. .env keys. /health endpoint.",
        ],
      },
      {
        title: "Pro tier",
        paragraphs: [
          "Eval script (10+ golden questions). Docker Compose. Token logging. Agent with search + summarize tools.",
          "README with architecture diagram, setup, cost estimate, demo GIF.",
        ],
      },
      {
        title: "Maps to your goals",
        paragraphs: [
          "AI engineer: build and explain this repo.",
          "Forward deployment engineer: deploy it to a customer-like environment, document runbooks, handle edge cases.",
        ],
      },
    ],
    interviewBite: {
      q: "Best project for AI engineer resume?",
      a: "End-to-end: ingest, RAG or agents, eval metrics, deployed API, README with tradeoffs — like production, not a notebook.",
    },
    checkpoint: "GitHub repo live with README and demo.",
    exercise: "Start Company Brain this week — ingest + chat MVP first.",
  },
];
