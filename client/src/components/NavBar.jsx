import React from 'react'
import Wrapper from '../assets/wrappers/NavBar'
import LogoutContainer from './LogoutContainer';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import ThemeToggle from './ThemeToggle';
function NavBar() {
    const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
     <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <ThemeToggle/>
        <LogoutContainer />
           </div>
    </Wrapper>
  )
}

export default NavBar
