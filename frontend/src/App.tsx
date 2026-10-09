import { useEffect, useState } from "react";
import { BookOpen, BrainCircuit, FileText, Github, Search, ShieldCheck } from "lucide-react";

type Health = { status: string; app: string; environment: string };

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => { if (!r.ok) throw new Error("API unavailable"); return r.json() as Promise<Health>; })
      .then(setHealth)
      .catch(() => setApiError(true));
  }, []);

  return (
    <main className="page-shell">
      <nav className="topbar">
        <a className="brand" href="/"><span className="brand-mark"><BrainCircuit size={23}/></span><span>LocalSearch<span className="brand-accent">AI</span></span></a>
        <span className="status-pill"><span className={`status-dot ${health ? "online" : ""}`}/>{health ? "API connected" : apiError ? "API offline" : "Connecting"}</span>
      </nav>
      <section className="hero">
        <div className="eyebrow"><span className="eyebrow-line"/> OPEN SOURCE · SELF-HOSTED</div>
        <h1>Your documents.<br/><span>Your knowledge. Your AI.</span></h1>
        <p className="hero-copy">Search and chat with your own documents using AI. Keep control of your knowledge base and choose the model that works for you.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#roadmap"><Search size={17}/> Explore the roadmap</a>
          <a className="secondary-button" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
        </div>
        <div className="notice"><ShieldCheck size={18}/><span>This is an early development scaffold. Document upload and AI chat are coming in the next milestones.</span></div>
      </section>
      <section className="feature-grid" id="roadmap">
        <article className="feature-card"><div className="feature-icon"><FileText size={21}/></div><h2>Bring your documents</h2><p>Build a searchable knowledge base from PDFs, runbooks, notes and Markdown files.</p><span className="feature-state">PLANNED</span></article>
        <article className="feature-card"><div className="feature-icon"><BrainCircuit size={21}/></div><h2>Choose your AI</h2><p>Configure a supported cloud provider or a local model instead of being locked in.</p><span className="feature-state">PLANNED</span></article>
        <article className="feature-card"><div className="feature-icon"><BookOpen size={21}/></div><h2>Answers with sources</h2><p>Retrieve relevant passages and show users which documents support each answer.</p><span className="feature-state">PLANNED</span></article>
      </section>
      <footer className="footer"><span>LocalSearchAI · Built in the open.</span><span>{health ? `Backend v0.1 · ${health.environment}` : "Waiting for backend"}</span></footer>
    </main>
  );
}
