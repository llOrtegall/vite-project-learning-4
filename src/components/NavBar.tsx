import { NavLink } from 'react-router-dom'
import { useContextProduct } from '../hooks/useContextProduct'
import { ShopBagIcon } from './icons/ShopBagIcon'

const activeStyles = 'underline underline-offset-2'

const RoutesPrimarys = [
  { name: 'All', path: '/' },
  { name: 'Clothes', path: '/clothes' },
  { name: 'Electronics', path: '/electronics' },
  { name: 'Furnitures', path: '/furnitures' },
  { name: 'Toys', path: '/toys' },
  { name: 'Others', path: '/others' },
  { name: 'My Orders', path: '/my-orders' },
  { name: 'My Account', path: '/my-account' }
]

function NavBar () {
  const { count } = useContextProduct()

  return(
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-base font-light'>

      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        {RoutesPrimarys.map((route, index) => (
          <li key={index}>
            <NavLink to={route.path} className={({ isActive }) => isActive ? activeStyles : undefined }>{route.name}</NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          example@example.com
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyles : undefined }>My Orders</NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyles : undefined }>My Account</NavLink>
        </li>
        <li className='flex items-center gap-1'>
         <ShopBagIcon />
          <span className='font-semibold pt-0.5'>{count}</span>
        </li>
      </ul>

    </nav>
  )
}

export { NavBar }