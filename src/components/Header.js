import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Header = () => {
  return (
    <header className='flex justify-between items-center mx-32 p-10'>
        <Link to="/welcome"><img src="https://kypj4u.com/wp-content/uploads/2021/07/kypj-logo.png" alt="" className='w-40'/></Link>

        <nav>
            <ul className='flex justify-end items-center gap-10'>
                <li className='font-medium'><Link to="about">About Us</Link></li>
                <li className='font-medium'><Link to="recentOrder">Recent Order</Link></li>
                <li className='font-medium'><Link to="profile">Profile</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header