import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Play } from "lucide-react";
import { tasks, type Task } from "./data/tasks";

const navigationItems = [
  ["Overview", "#overview"],
  ["RoboTwin Results", "#robotwin"],
  ["Citation", "#citation"],
];

function PageChrome({ progress, activeSection }: { progress: number; activeSection: string }) {
  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <aside className="section-tracker" aria-label="Page sections">
        <nav>
          {navigationItems.map(([label, href]) => (
            <a
              className={activeSection === href.slice(1) ? "active" : ""}
              href={href}
              key={href}
              aria-current={activeSection === href.slice(1) ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>
      <nav className="compact-nav" aria-label="Page sections">
        {navigationItems.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="hero shell" id="overview">
      <h1 className="project-title">
        <span className="title-mainline">
          <span className="title-gradient">SDK:</span>{" "}
          Simulation-in-the-loop Dataset Aggregation with Keypoints
        </span>
        <span className="title-tagline">for Robust Imitation Learning</span>
      </h1>
      <div className="authors" aria-label="Authors">
        <span>Yuan Fang<sup>1</sup></span>
        <span>Second Author<sup>1</sup></span>
        <span>Third Author<sup>1</sup></span>
      </div>
      <p className="affiliation"><sup>1</sup> Columbia University</p>
      <p className="venue">Robot Learning · 2026</p>
      <p className="hero-copy">
        A data aggregation framework that uses simulation feedback and keypoints
        to build effective robot-learning datasets.
      </p>
      <div className="hero-actions">
        <a className="button primary" href="#robotwin">Explore results <ArrowDown size={17} /></a>
        <a className="button secondary" href="https://github.com/yfang777/Codegen_Website" target="_blank" rel="noreferrer">
          <Github size={17} /> View code
        </a>
      </div>
    </section>
  );
}

function ProjectHighlight() {
  return (
    <section className="project-highlight shell" aria-label="Project summary">
      <p>
        SDK uses <strong>purely corrective data</strong> with <strong>relational keypoint</strong>
        to build more robust imitation policy in both sim and real.
      </p>
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
      <div className="results-head">
        <p className="section-kicker">RoboTwin benchmark</p>
        <h2>RoboTwin Results</h2>
        <p>
          Explore {tasks.length} robot-manipulation tasks through real rollouts and
          success-rate curves. Each headline reports the highest v19 success rate
          and its corresponding checkpoint.
        </p>
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
  const citation = `@misc{sdk2026,
  title        = {SDK: Simulation-in-the-loop Dataset Aggregation with Keypoints for Robust Imitation Learning},
  author       = {Fang, Yuan and Second Author and Third Author},
  institution  = {Columbia University},
  year         = {2026}
}`;

  return (
    <section className="citation section" id="citation">
      <div className="shell">
        <div className="citation-head">
          <p className="section-kicker">Citation</p>
          <h2>Build on our work</h2>
          <p>If you use SDK in your research, please cite the project.</p>
        </div>
        <pre><code>{citation}</code></pre>
      </div>
    </section>
  );
}

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const updatePageChrome = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight === 0 ? 0 : (window.scrollY / scrollableHeight) * 100);

      const sectionIds = navigationItems.map(([, href]) => href.slice(1));
      const currentSection = [...sectionIds]
        .reverse()
        .find((id) => document.getElementById(id)!.getBoundingClientRect().top <= window.innerHeight * 0.35);
      setActiveSection(currentSection ?? sectionIds[0]);
    };

    updatePageChrome();
    window.addEventListener("scroll", updatePageChrome, { passive: true });
    window.addEventListener("resize", updatePageChrome);

    return () => {
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("scroll", updatePageChrome);
      window.removeEventListener("resize", updatePageChrome);
    };
  }, []);

  return (
    <>
      <PageChrome progress={scrollProgress} activeSection={activeSection} />
      <main><Hero /><ProjectHighlight /><Results /><Citation /></main>
      <footer className="footer shell">
        <p>SDK · Columbia University · 2026</p>
        <div>
          <a href="https://github.com/yfang777/Codegen_Website" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#overview">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
