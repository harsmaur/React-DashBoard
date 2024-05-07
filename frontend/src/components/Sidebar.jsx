import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs'


const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                     <BsCart3 className='icon_header'/>
                </div>

                <span className="icon close-icon">X</span>
            </div>

            <ul className='sidebar-list'>
                
                <li className="sidebar-list-item">
                    <a href="/">
                    <BsGrid1X2Fill className='icon_header'/> DashBoard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="/">
                    <BsFillArchiveFill className='icon_header'/> DashBoard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="/">
                    <BsFillGrid3X3GapFill className='icon_header'/> DashBoard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="/">
                    <BsPeopleFill className='icon_header'/> DashBoard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="/">
                    <BsListCheck className='icon_header'/> DashBoard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="/">
                    <BsMenuButtonWideFill className='icon_header'/> DashBoard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="/">
                    <BsFillGearFill className='icon_header'/> DashBoard
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar