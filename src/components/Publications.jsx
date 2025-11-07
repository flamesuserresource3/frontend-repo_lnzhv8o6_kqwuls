export default function Publications() {
  const pubs = [
    {
      title: "Guiding Attention in Human-AI Collaboration",
      venue: "CHI 2024",
      link: "#",
      authors: "A. Thompson, M. Lee",
    },
    {
      title: "Narrative Dashboards for Civic Engagement",
      venue: "VIS 2023",
      link: "#",
      authors: "A. Thompson, J. Patel, R. Gomez",
    },
    {
      title: "Teaching Full-Stack Systems with Live Feedback",
      venue: "SIGCSE 2023",
      link: "#",
      authors: "A. Thompson",
    },
  ];

  return (
    <section id="publications" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Selected Publications</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {pubs.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-indigo-600 font-semibold">{p.venue}</p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-indigo-700">
                {p.title}
              </h3>
              <p className="mt-1 text-gray-600 text-sm">{p.authors}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
