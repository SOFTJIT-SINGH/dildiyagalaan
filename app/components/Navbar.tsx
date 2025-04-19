import Link from 'next/link'
import { BsChatRightHeartFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
      <nav className='flex flex-row space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'>
          <BsChatRightHeartFill />
        </Link>
        <div>logo</div>
        <div>Dashboard</div>
        <div>Galaan</div>
      </nav>
    </>
  )
}
export default Navbar
