import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'Shop by Occasion', path: '/by-occasion' },
    { name: 'Collections', path: '/collections' },
    { name: 'Mother-Daughter Sets', path: '/mother-daughter-showcase' },
    { name: 'Style Quiz', path: '/style-quiz' },
  ];

  const aboutLinks = [
    { name: 'Design Journey', path: '/design-journey' },
    { name: 'Behind the Scenes', path: '/behind-the-scenes' },
    { name: 'Fabric Stories', path: '/fabric-stories' },
    { name: 'Client Stories', path: '/client-stories' },
    { name: 'Book Consultation', path: '/book-discussion' },
  ];

  return (
    <footer className="bg-[#1C1C1C] border-t border-[#C8A96A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-light tracking-[0.3em] mb-4 text-[#FAF9F7]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              ADHYA
            </h3>
            <p className="text-sm text-[#E8C2C2] font-light leading-relaxed mb-4">
              Crafting elegance for women & children through timeless design and exquisite craftsmanship.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-[#C8A96A]/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#C8A96A]/30 transition-colors cursor-pointer border border-[#C8A96A]/30">
                <span className="text-[#FAF9F7] text-sm">📷</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#C8A96A]/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#C8A96A]/30 transition-colors cursor-pointer border border-[#C8A96A]/30">
                <span className="text-[#FAF9F7] text-sm">📘</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#C8A96A]/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#C8A96A]/30 transition-colors cursor-pointer border border-[#C8A96A]/30">
                <span className="text-[#FAF9F7] text-sm">💬</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest mb-4 text-[#C8A96A] uppercase">Shop</h4>
            <div className="flex flex-col space-y-2">
              {shopLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm text-[#E8C2C2] hover:text-[#C8A96A] font-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest mb-4 text-[#C8A96A] uppercase">Discover</h4>
            <div className="flex flex-col space-y-2">
              {aboutLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm text-[#E8C2C2] hover:text-[#C8A96A] font-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium tracking-widest mb-4 text-[#C8A96A] uppercase">Connect With Us</h4>
            <div className="flex flex-col space-y-3 text-sm text-[#E8C2C2] font-light">
              <div className="flex items-start gap-2">
                <span className="text-[#C8A96A]">📍</span>
                <span>123 Fashion Street<br />Design District, City</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8A96A]">📞</span>
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8A96A]">📧</span>
                <span>info@adhyastudio.com</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#C8A96A]">🕒</span>
                <span>Mon - Sat<br />10:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#C8A96A]/30 text-center">
          <p className="text-sm text-[#E8C2C2] font-light tracking-wide">
            © {currentYear} ADHYA Designer Studio. Crafted with love for women & children.
          </p>
        </div>
      </div>
    </footer>
  );
}
