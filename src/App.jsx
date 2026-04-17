export default function LiamPortfolioSite() {
  const highlights = [
    {
      title: 'Software Development',
      description:
        'I built this portfolio from the ground up using React, JavaScript, and TypeScript, applying modern development practices to create a clean and user focused experience. My foundation in full stack development comes from my certification at Rice University, where I gained experience across both front end and back end technologies. As an AP Computer Science teacher, I also developed a strong ability to break down programming concepts and teach software development in a clear and structured way. This combination of hands on development and teaching shapes how I approach building and communicating technical solutions today.',
    },
    {
      title: 'Training Delivery',
      description:
        'I lead both in-person and virtual training sessions using Microsoft Teams, helping diverse audiences feel confident navigating new systems. I create clear, engaging materials such as PowerPoint presentations and walkthrough videos with Camtasia and Snagit, and build LMS modules that support flexible, self-paced learning. My focus is on making complex workflows feel simple, practical, and easy to apply in day-to-day work.',
    },
    {
      title: 'Instructional Design',
      description:
        'My approach to instructional design is rooted in education and strengthened by applying structured learning models like ADDIE. In my work on the Online EBT project across Texas, I designed and delivered training using Azure DevOps and CRM systems, helping clinic service staff navigate Microsoft-based tools more efficiently. I focus on creating clear, practical learning experiences that improve confidence and performance in real workflows.',
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
    'Full Stack Software Development',
    'Instructional Design',
    'User adoption support',
    'Technical documentation',
    'Job aids and guides',
    'Learner engagement',
    'Onboarding support',
    'Software Process-based learning',
  ];

  function Projects() {
    const githubProjects = [
      {
        title: 'Employee Tracker',
        description:
          'A backend project built with Node.js and SQL that manages employees, roles, and departments through a command-line interface, demonstrating my ability to work with relational databases and real-world business logic.',
        tech: ['Node.js', 'SQL', 'Inquirer'],
        link: 'https://github.com/liamandell/Terry-Employee_Tracker',
      },
      {
        title: 'Portfolio Website',
        description:
          'A frontend project built with React, JavaScript, and TypeScript to showcase my work in training, instructional design, and web development, highlighting my foundation in building clean, user-focused applications.',
        tech: ['React', 'JavaScript', 'TypeScript'],
        link: 'https://github.com/liamandell/Portfolio/tree/main',
      },
    ];

    return (
      <div className="grid gap-6 md:grid-cols-2">
        {githubProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg transition hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.description}
            </p>
            <p className="mt-4 text-sm text-sky-300">
              {project.tech.join(' • ')}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-xl bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-105"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    );
  }

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
              I had the opportunity early on to pursue a master's in instructional design, but I chose a different path. I wanted real experience building learning from the ground up, so I became an AP Computer Science teacher, designed curriculum, taught complex technical concepts, and learned how to make ideas click for students with different learning styles. That experience became the foundation for everything I do today. It led me into corporate training, where I worked on the Online EBT project for the state of Texas, creating instructional materials and training clinic staff to confidently navigate Microsoft and CRM systems. Along the way, I’ve also developed a strong technical skill set, building websites using modern frameworks, designing visual learning materials through PowerPoint and video tools, and creating structured content within LMS platforms. My background at the University of Houston, combined with hands-on experience in software development during my senior year, gave me an early understanding of how technology, communication, and user experience come together. Now, I’m looking to bring that full combination of teaching, training, and technical skills into a role where I can continue building meaningful learning experiences and make a broader impact.
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
              system efficiency. My teaching background in AP Computer Science strengthened my
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
            facilitation work in my recent project, Online EBT. This includes a full training plan, a learner-facing
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

      <section id="github-projects" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              GitHub Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Software development projects
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            A selection of projects that highlight my foundation in backend and frontend development.
          </p>
        </div>

        <div className="mt-10">
          <Projects />
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
            <a
              href="mailto:liamandell14@gmail.com"
              className="rounded-full bg-white/10 px-5 py-2.5 hover:bg-white/20 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/liamandell/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 px-5 py-2.5 hover:bg-white/20 transition"
            >
              LinkedIn
            </a>

            <span className="rounded-full bg-white/10 px-5 py-2.5">
              Portfolio samples available on request
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}