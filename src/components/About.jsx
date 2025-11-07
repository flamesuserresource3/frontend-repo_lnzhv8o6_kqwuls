export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I am a lecturer passionate about teaching modern software engineering, data visualization,
            and human-computer interaction. I design project-based courses that bridge theory and
            practice, helping students build real-world systems with strong fundamentals. My current
            work explores ethical AI systems and accessible interfaces.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="font-semibold text-gray-900">Teaching Focus</p>
              <p className="mt-1 text-gray-600">HCI, Web Systems, Data Viz</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="font-semibold text-gray-900">Research Areas</p>
              <p className="mt-1 text-gray-600">Human‑AI, Visualization, CS Ed</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="font-semibold text-gray-900">Office</p>
              <p className="mt-1 text-gray-600">Engineering Building, Room 402</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="font-semibold text-gray-900">Availability</p>
              <p className="mt-1 text-gray-600">Tue & Thu 2–4 PM or by appointment</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Teaching Philosophy</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            I believe learning accelerates when students solve meaningful problems in communities.
            I emphasize clarity, feedback loops, and reflective practice—prioritizing inclusive
            design and career readiness. In my classes, students build, critique, iterate, and share.
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
            <li>Project-based learning with real datasets</li>
            <li>Open-source and reproducible workflows</li>
            <li>Accessibility and ethics integrated throughout</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
