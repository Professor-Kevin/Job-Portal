import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../Data/Data'

export default function Footer() {
  return (
    <div className="container-fluid py-4 background-secondary text-light">
      <div className="row justify-content-between">

        {/* Left Section - About & Address */}
        <div className="col-lg-5 col-md-12 col-sm-12 mb-4 px-lg-5 px-md-3 px-2">
          <div className="d-flex align-items-center mb-2">
            <i className="fa-brands fa-pied-piper-alt fs-1 mx-2 text-primary d-none d-md-inline"></i>
            <Link className="navbar-brand fs-2 text-primary" to="#">Job Portal</Link>
          </div>
          <p className="text-secondary">
            A platform connecting job seekers with top employers. Manage your profile, certifications, work experience, and stay updated with the latest job postings.
          </p>

          {/* Address */}
          <h6 className="text-primary fw-bold">Address</h6>
          <p className="text-secondary mb-0">Kathua, Jammu And Kashmir, 184101</p>
        </div>

        {/* Right Section - Links & Contact */}
        <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
          <div className="row">
            {footerLinks.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-3">
                <h5 className="text-primary">{item.title}</h5>
                {item.links.map((link, i) => (
                  <Link to="#" key={i} className="text-secondary nav-link">{link}</Link>
                ))}
              </div>
            ))}
          </div>

          {/* Reach Us Section */}
          <div className="mt-4 d-flex flex-column flex-md-row justify-content-between align-items-start pe-5">

            {/* Contact Info */}
            <div className="mt-3 mt-md-0">
              <h6 className="text-primary fw-bold">Contact</h6>
              <p className="text-secondary mb-1">Email: <a href="mailto:support@jobportal.com" className="text-primary">support@jobportal.com</a></p>
              <p className="text-secondary">Phone: <a href="tel:+911234567890" className="text-primary">+91 12345 67890</a></p>
            </div>

            {/* Follow Us */}
            <div>
              <h6 className="text-primary fw-bold">Follow Us</h6>
              <div className="d-flex gap-3 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f text-primary fs-4"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram text-primary fs-4"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter text-primary fs-4"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fa-brands fa-youtube text-primary fs-4"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in text-primary fs-4"></i>
                </a>
              </div>
            </div>



          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-4 border-top pt-3">
        <p className="text-secondary mb-0">© {new Date().getFullYear()} Job Portal. All rights reserved.</p>
      </div>
    </div>
  )
}
