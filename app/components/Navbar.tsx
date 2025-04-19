import Link from 'next/link'
import { BsChatRightHeartFill } from 'react-icons/bs'

const Navbar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Galaan', href: '/' },
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
              className='text-zinc-800 hover:text-emerald-500 transition-colors duration-300'
              href='/'
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
