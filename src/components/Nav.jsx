import headerLogo from '../assets/images/header-logo.svg'
import {navLinks} from '../constants/index.js'
import hamburger from '../assets/icons/hamburger.svg'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between item-center max-container'>
    <a href="/">
        <img
        src={headerLogo}
        alt='Logo'
        width={130}
        height={29}
        />
    </a>

    <ul className='flex-1 flex justify-center 
    items-center gap-16 max-lg:hidden'>
    {
        navLinks.map((el) =>(
            <li key={el.label}>
            <a href={el.href} className='font-montserrat 
            leading-normal text-slate-gray'>
             {el.label}
            </a>
            </li>
        ))
    }
    </ul>

    <div className="hidden max-lg:block">
        <img
        src={hamburger}
        alt='Humburger'
        width={25}
        height={25}
        
        
        />
    </div>
  </nav>
    </header>
  )
}

export default Nav