'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/insert-task', label: 'Add' },
  { href: '/chat', label: 'Chat' },
  { href: '/profile', label: 'Profile' },
]

export default function BottomNav() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <ul className="flex justify-around">
        {tabs.map(tab => (
          <li key={tab.href}>
            <Link
              href={tab.href}
              className={`block p-4 ${pathname === tab.href ? 'text-blue-600' : 'text-gray-600'}`}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
