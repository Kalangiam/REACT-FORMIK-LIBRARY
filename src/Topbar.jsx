import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'


function Topbar() {
    const user = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <div className="text-white bg-danger">Library management system</div>


            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>


            

            <ul className="navbar-nav ml-auto">

               

                <div className="topbar-divider d-none d-sm-block"></div>
                <Link to="/" className='btn btn-danger'>Logout</Link>
                <li className="nav-item dropdown no-arrow">
                    {/* <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.Username}</span>
                        
                    </a> */}

                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in btn btn-danger">
                        {/* <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>class
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a> */}
                        {/* <div className="dropdown-divider"></div> */}
                        <Link className="dropdown-item" to="/" data-toggle="modal" data-target="#logoutModal">
                            Logout
                        </Link>
                        
                     
                     
                    </div>
                </li>

            </ul>

        </nav>
    )
}

export default Topbar