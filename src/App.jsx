import Hero from './components/Hero';
import About from './components/About';
import Teaching from './components/Teaching';
import Publications from './components/Publications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Lecturer Portfolio</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-700">About</a>
            <a href="#teaching" className="hover:text-indigo-700">Teaching</a>
            <a href="#publications" className="hover:text-indigo-700">Publications</a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Teaching />
      <Publications />
      <Footer />
    </div>
  );
}

export default App;
