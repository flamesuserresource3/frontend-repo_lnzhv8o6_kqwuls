export default function Teaching() {
  const courses = [
    {
      code: "CS 410",
      name: "Human-Computer Interaction",
      term: "Fall 2024",
      desc: "Designing, prototyping, and evaluating interactive systems with a focus on accessibility.",
      site: "#",
    },
    {
      code: "CS 434",
      name: "Data Visualization",
      term: "Spring 2025",
      desc: "Visual encoding, perception, storytelling, and dashboards with modern web tools.",
      site: "#",
    },
    {
      code: "CS 499",
      name: "Capstone: Full‑Stack Systems",
      term: "Spring 2025",
      desc: "Team-based projects building end-to-end applications with iterative feedback.",
      site: "#",
    },
  ];

  return (
    <section id="teaching" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Teaching</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-semibold text-indigo-600">{c.term}</span>
              <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                {c.code}
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{c.name}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            <a
              href={c.site}
              className="mt-4 inline-block text-sm font-semibold text-indigo-700 hover:underline"
            >
              Course Site
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
