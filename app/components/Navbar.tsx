'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsChatRightHeartFill } from 'react-icons/bs'

const Navbar = () => {
  const currentPath = usePathname()
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Galaan', href: '/galaan' },
  ]

  return (
    <>
      <nav className='flex flex-row space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'>
          <BsChatRightHeartFill />
        </Link>
        <ul className='flex space-x-6'>
          {links.map((link) => (
            <Link
              key={link.href}
              className={`${
                link.href === currentPath ? 'text-teal-900' : 'text-zinc-500'
              } hover:text-teal-900 transition-colors duration-300`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  )
}
export default Navbar
