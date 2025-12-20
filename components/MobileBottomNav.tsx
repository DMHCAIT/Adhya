'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Search, MessageCircle, Heart } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
    },
    {
      name: 'Events',
      href: '/by-occasion',
      icon: Calendar,
    },
    {
      name: 'Explore',
      href: '/collections',
      icon: Search,
    },
    {
      name: 'Whatsapp',
      href: 'https://wa.me/918220952369',
      icon: MessageCircle,
      external: true,
    },
    {
      name: 'Wedding',
      href: '/by-occasion/wedding',
      icon: Heart,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 transition-colors"
              >
                <Icon 
                  className="w-6 h-6" 
                  style={{ color: '#25D366' }}
                />
                <span className="text-[10px] font-medium" style={{ color: '#25D366' }}>
                  {item.name}
                </span>
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive 
                  ? 'text-[#C8A96A]' 
                  : 'text-gray-600 hover:text-[#C8A96A]'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
