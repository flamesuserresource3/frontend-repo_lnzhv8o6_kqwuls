import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Dr. Avery Thompson</p>
          <div className="flex items-center gap-3 text-gray-600">
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin className="h-5 w-5"/></a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-900"><Github className="h-5 w-5"/></a>
            <a href="mailto:avery.thompson@university.edu" aria-label="Email" className="hover:text-gray-900"><Mail className="h-5 w-5"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
