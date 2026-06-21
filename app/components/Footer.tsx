import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-md bg-[#C0501A] flex items-center justify-center text-white text-xs font-bold">
              ✝
            </span>
            <span className="font-medium text-sm">Rydalvale Church Assembly</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            A welcoming community of faith, hope, and love in Christ.
          </p>
          <blockquote className="mt-4 text-xs text-[#C0501A] italic border-l-2 border-[#D4773A] pl-3">
            "For where two or three gather in my name, there am I with them." — Matt 18:20
          </blockquote>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Visit us</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>12 Rydalvale Road</li>
            <li>Sunday: 9 AM &amp; 11 AM</li>
            <li>Wednesday: 7 PM</li>
            <li>Friday: 6:30 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Quick links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/services", label: "Services" },
              { href: "/events", label: "Events" },
              { href: "/prayer", label: "Prayer requests" },
              { href: "/about", label: "About us" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-500 hover:text-[#C0501A] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Connect</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-[#C0501A] transition-colors">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C0501A] transition-colors">YouTube</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C0501A] transition-colors">Instagram</a>
            </li>
            <li>
              <a href="mailto:info@rcachurch.org" className="hover:text-[#C0501A] transition-colors">
                info@rcachurch.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Rydalvale Church Assembly · Built with faith and purpose
      </div>
    </footer>
  );
}
