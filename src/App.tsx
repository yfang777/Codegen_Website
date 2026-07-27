import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Menu, Play, X } from "lucide-react";
import { tasks, type Task } from "./data/tasks";

function Nav() {
  const [open, setOpen] = useState(false);
  const items = [
    ["RoboTwin", "#robotwin"],
    ["Citation", "#citation"],
  ];

  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Codegen home">
          <span className="brand-mark">C</span>
          <span>CODEGEN</span>
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {items.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-github" href="https://github.com/yfang777/Codegen_Website" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="eyebrow"><span /> ROBOT LEARNING · 2026</div>
      <h1>Learning robot skills,<br /><em>one experience at a time.</em></h1>
      <p className="hero-copy">
        A research project exploring how data quantity shapes policy performance
        across diverse bimanual manipulation tasks.
      </p>
      <div className="hero-actions">
        <a className="button primary" href="#robotwin">Explore results <ArrowDown size={17} /></a>
        <a className="button secondary" href="https://github.com/yfang777/Codegen_Website" target="_blank" rel="noreferrer">
          <Github size={17} /> View code
        </a>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="coordinate">
          <span className="x-line" /><span className="y-line" /><i />
        </div>
        <div className="hero-label label-a">OBSERVATION</div>
        <div className="hero-label label-b">ACTION</div>
        <div className="hero-label label-c">FEEDBACK</div>
      </div>
    </section>
  );
}

function TaskCard({ task, index }: { task: Task; index: number }) {
  return (
    <article className="task-card" id={task.id}>
      <div className="task-meta">
        <span className="task-index">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <div className="result-numbers">
          <div className="success-number"><strong>{task.successRate}%</strong><span>SUCCESS</span></div>
          <div className="checkpoint"><span>CHECKPOINT</span>{task.checkpoint}</div>
        </div>
      </div>
      <div className={`media-grid ${task.figure ? "" : "video-only"}`}>
        <div className="video-wrap" style={{ "--accent": task.accent } as React.CSSProperties}>
          <video controls muted playsInline preload="metadata" src={task.video}>
            Your browser does not support embedded video.
          </video>
          <div className="video-tag"><Play size={12} fill="currentColor" /> SUCCESSFUL ROLLOUT</div>
        </div>
        {task.figure && (
          <a className="figure-wrap" href={task.figure} target="_blank" rel="noreferrer">
            <img loading="lazy" src={task.figure} alt={`${task.title} success rate by dataset size`} />
            <span>SUCCESS RATE CURVE <ArrowUpRight size={14} /></span>
          </a>
        )}
      </div>
    </article>
  );
}

function Results() {
  const [selected, setSelected] = useState("all");
  const visible = selected === "all" ? tasks : tasks.filter((task) => task.id === selected);

  return (
    <section className="results section shell" id="robotwin">
      <div className="section-number">01 / ROBOTWIN RESULTS</div>
      <div className="results-head">
        <h2>X tasks <em>(continued).</em><br />Real rollouts.</h2>
        <p>Selected successful evaluations from the latest available checkpoints. Open any curve for a closer look.</p>
      </div>
      <div className="filters" role="group" aria-label="Filter tasks">
        <button className={selected === "all" ? "active" : ""} onClick={() => setSelected("all")}>All tasks</button>
        {tasks.map((task) => (
          <button key={task.id} className={selected === task.id ? "active" : ""} onClick={() => setSelected(task.id)}>
            {task.shortTitle}
          </button>
        ))}
      </div>
      <div className="task-list">
        {visible.map((task) => <TaskCard key={task.id} task={task} index={tasks.indexOf(task)} />)}
      </div>
    </section>
  );
}

function Citation() {
  const citation = `@misc{codegen2026,\n  title  = {Codegen: Data Scaling for Robot Learning},\n  author = {Project Authors},\n  year   = {2026}\n}`;
  return (
    <section className="citation" id="citation">
      <div className="shell citation-grid">
        <div><div className="section-number light">02 / CITATION</div><h2>Build on<br />our work.</h2></div>
        <pre><code>{citation}</code></pre>
      </div>
    </section>
  );
}

export function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <>
      <Nav />
      <main><Hero /><Results /><Citation /></main>
      <footer className="footer shell">
        <div className="brand"><span className="brand-mark">C</span><span>CODEGEN</span></div>
        <p>Research project website · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
