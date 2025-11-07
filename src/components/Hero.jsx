import { Mail, User } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.4),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.3),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="h-24 w-24 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center ring-1 ring-white/30">
            <User className="h-12 w-12" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Dr. Avery Thompson
            </h1>
            <p className="mt-3 text-lg md:text-xl text-indigo-50/90 max-w-2xl">
              Senior Lecturer in Computer Science • Human‑AI Interaction • Data Visualization
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#publications"
                className="inline-flex items-center rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold ring-1 ring-white/30 hover:bg-white/20 transition"
              >
                Explore Publications
              </a>
              <a
                href="mailto:avery.thompson@university.edu"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-indigo-700 px-4 py-2 text-sm font-semibold hover:bg-indigo-50 transition"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
