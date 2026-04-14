export default function LiamPortfolioSite() {
  const highlights = [
    {
      title: 'Instructional Design',
      description:
        'I create learning experiences, documentation, and support materials that help users adopt systems and workflows with clarity and confidence.',
    },
    {
      title: 'Training Delivery',
      description:
        'I facilitate structured training that turns complex processes into practical, engaging, and easy-to-apply learning experiences.',
    },
    {
      title: 'User Enablement',
      description:
        'My work supports onboarding, user adoption, and day-to-day performance through job aids, guided instruction, and process-based learning resources.',
    },
  ];

  const verdtekBullets = [
    'Design and deliver training materials that improve software adoption, process understanding, and user confidence.',
    'Create job aids, guides, walkthroughs, and learner support resources for end users and internal teams.',
    'Translate technical workflows into clear and practical training content that improves onboarding and retention.',
    'Partner with stakeholders to identify learning gaps and build solutions that support stronger day-to-day performance.',
    'Facilitate training sessions that blend structure, clarity, and real-world application for adult learners.',
  ];

  const teachingBullets = [
    'Delivered instruction to diverse learners while adapting communication style, pacing, and support strategies.',
    'Built lesson-based learning experiences that improved engagement, clarity, and learner participation.',
    'Developed a strong foundation in facilitation, learner-centered communication, and instructional structure.',
  ];

  const projectCards = [
    {
      title: 'Online EBT Training Plan',
      text: 'Comprehensive training plan outlining blended delivery, curriculum design, and user adoption strategy.',
      file: 'files/Online-EBT-Training-Plan.pdf',
      type: 'Training Plan',
    },
    {
      title: 'Clinic Services Module 1 Slide Deck',
      text: 'Facilitated training deck covering Online EBT fundamentals, workflows, and system navigation.',
      file: 'files/Clinic-Services-Module-1-Slides.pdf',
      type: 'Training Deck',
    },
    {
      title: 'Instructor Guide',
      text: 'Instructor-facing guide with facilitation flow, troubleshooting, and step-by-step system support.',
      file: 'files/Clinic-Services-Module-1-Instructor-Guide.pdf',
      type: 'Instructor Guide',
    },
  ];

  const skills = [
    'Instructional design',
    'Facilitator-led training',
    'User adoption support',
    'Technical documentation',
    'Job aids and guides',
    'Learner engagement',
    'Onboarding support',
    'Process-based learning',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Liam Andell
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Instructional Designer and Training Specialist
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I build learning experiences that help people understand systems,
              adopt new tools, and perform with confidence. My background combines
              instructional design, live facilitation, user support, and teaching.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Professional Focus
            </p>
            <div className="mt-6 space-y-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A learning professional focused on clarity, adoption, and performance
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              My work centers on helping people learn new systems and processes in
              a way that feels practical, supportive, and easy to apply. I bring a
              blend of instructional design, facilitation, and learner-focused
              communication to every project.
            </p>
            <p>
              At Verdtek, I focus on creating training materials and learning
              experiences that support user adoption, process understanding, and
              day-to-day performance. My teaching background strengthened my
              ability to engage learners, simplify complex ideas, and design
              instruction that meets people where they are.
            </p>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-white/10 bg-slate-900/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Experience
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg">
              <p className="text-sm font-medium text-slate-400">Current Role</p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Training Specialist / Instructional Design Work at Verdtek
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                {verdtekBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg">
              <p className="text-sm font-medium text-slate-400">
                Teaching Foundation
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Teaching and Facilitation Experience
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                {teachingBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured work and training materials
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Featured training materials drawn from my instructional design and
            facilitation work, including a full training plan, a learner-facing
            slide deck, and an instructor guide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectCards.map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg transition hover:-translate-y-1"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                  {project.type}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.text}
              </p>

              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href={import.meta.env.BASE_URL + project.file}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-105"
                >
                  View Project
                </a>

                <a
                  href={import.meta.env.BASE_URL + project.file}
                  download
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white transition hover:scale-105"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                What I Bring
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A mix of strategy, facilitation, and learner-centered design
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let’s connect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            I’m interested in opportunities in instructional design, training,
            enablement, and learning experience development.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200">
            <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">
              your.email@example.com
            </span>
            <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">
              LinkedIn profile
            </span>
            <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">
              Portfolio samples available on request
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}