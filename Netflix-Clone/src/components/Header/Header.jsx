// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'
import Netflix_Logo from '../../assets/images/Icons/NetflixLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
<>
    <nav className='NavigationBar_Container'>
    <div className='Header-Container'>
        <div className='leftSide-Container'>
            <ul>
            <li className='logo'><img className='logoimage' src={Netflix_Logo} alt=""  /></li>
                <li>Home</li>
                <li>Tvshow</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse By Language</li>
            </ul>
        </div>
        <div className='RightSide-Container'>
            <ul >
                <li><SearchIcon/></li>
                <li><NotificationsNoneIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li>
            </ul>
        </div>
    </div>
    </nav>

</>
  )
}

export default Header