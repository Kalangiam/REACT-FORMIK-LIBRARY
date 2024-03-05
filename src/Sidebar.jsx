import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'


function Sidebar() {
    const {Username} = useContext(UserContext)
    return (
        <ul className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3"><Link className='text-light' to="/">{Username}</Link></div>
            </a>


            <hr className="sidebar-divider my-0" />


            <li className="nav-item active">
                <Link to="/portal/dashboard" className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>DASHBOARD</span></Link>
            </li>


            <li className="nav-item">
                <Link to="/portal/blogs" className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>List</span></Link>
            </li>



            <hr className="sidebar-divider d-none d-md-block" />

            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration" src="https://th.bing.com/th/id/OIP.NEbonvdI-dx2E8TiiU-wPQAAAA?rs=1&pid=ImgDetMain" alt="..." />
               
            </div>

        </ul>
    )
}

export default Sidebar
