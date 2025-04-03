import React from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, IconButton, useTheme } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Navbar() {
  const theme = useTheme();

  return (
    <nav className="navbar navbar-expand-lg background-primary fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left Section - Logo */}
        <div className="d-flex align-items-center">
          <i className="fa-brands fa-pied-piper-alt fs-1 mx-2 text-primary d-none d-md-inline"></i>
          <NavLink className="navbar-brand fs-2 text-primary" to="#">Job Portal</NavLink>
        </div>

        {/* Center Section - Icons (Centered on Mobile) */}
        <div className="d-flex align-items-center d-lg-none mx-auto">
          {/* Profile Image */}
          <div className='d-flex align-items-center mx-2'>
            <p className='text-secondary d-none d-md-inline m-0'>Abhi</p>
            <img className="profile-img mx-2" src="/images/profile.png" alt="Profile" />
          </div>

          {/* Settings Icon */}
          <div className='mx-2 rounded-circle background-secondary'>
            <i className="fa-solid fa-gear text-light p-2"></i>
          </div>

          {/* Notification Icon with Badge */}
          <div className="mx-2 rounded-circle background-secondary">
            <Badge
              variant="dot"
              invisible={false}
              sx={{
                '.MuiBadge-dot': { backgroundColor: theme.palette.brightSun.main },
              }}
            >
              <IconButton>
                <NotificationsIcon sx={{ color: 'white', fontSize: 17 }} />
              </IconButton>
            </Badge>
          </div>
        </div>

        {/* Toggle Button (Rightmost) */}
        <button className="navbar-toggler border-0 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <i className="fa-solid fa-bars  text-primary"></i>
        </button>

        {/* Navbar NavLinks (Center on Large Screens) */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-3 d-flex  align-items-center justify-content-center">
            <li className="nav-item"><NavLink className="nav-Navlink text-light" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-Navlink text-light" to="/findjobs">Find Jobs</NavLink></li>
            <li className="nav-item"><NavLink className="nav-Navlink text-light" to="/findtalent">Find Talent</NavLink></li>
            <li className="nav-item"><NavLink className="nav-Navlink text-light" to="/uploadjobs">Upload Jobs</NavLink></li>
            <li className="nav-item"><NavLink className="nav-Navlink text-light" to="/aboutus">About us</NavLink></li>
          </ul>
        </div>

        {/* Right Section - Icons (Only Visible on Larger Screens) */}
        <div className="d-none d-lg-flex align-items-center">
          {/* Profile Image */}
          <div className='d-flex align-items-center mx-2'>
            <p className='text-secondary d-none d-md-inline m-0'>Abhi</p>
            <img className="profile-img mx-2" src="/images/profile.png" alt="Profile" />
          </div>

          {/* Settings Icon */}
          <div className='mx-2 rounded-circle background-secondary'>
            <i className="fa-solid fa-gear text-light p-2"></i>
          </div>

          {/* Notification Icon with Badge */}
          <div className="mx-2 rounded-circle background-secondary">
            <Badge
              variant="dot"
              invisible={false}
              sx={{
                '.MuiBadge-dot': { backgroundColor: theme.palette.brightSun.main },
              }}
            >
              <IconButton>
                <NotificationsIcon sx={{ color: 'white', fontSize: 17 }} />
              </IconButton>
            </Badge>
          </div>
        </div>

      </div>
    </nav>
  );
}
