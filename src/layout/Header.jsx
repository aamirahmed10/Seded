import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useBrSeDecContext } from '../context/BrSeDecProvider'
import Logo from '../components/Logo'

const Header = ({type='home-header'}) => {
  const { menuItems } = useBrSeDecContext()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isSubMenuActive = (item) => {
    if (!item.subMenu) return false
    return item.subMenu.some(sub => sub.link === location.pathname)
  }

  if(type === 'home-header'){
    return (
      <nav className={`fixed-top z-10 ${isScrolled ? 'header-sticky' : 'main-header'}${isMobileMenuOpen ? ' active-header-menu' : ''}`}>
        <div className='container d-flex align-items-center justify-content-between p-2'>
          <div className='header-logo'>
            <Logo logo={isScrolled || isMobileMenuOpen ? 'black' : 'white'} />
          </div>

          {/* Hamburger Icon for mobile */}
          <div
            id="nav-icon2"
            className={isMobileMenuOpen ? "open d-lg-none" : "d-lg-none"}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            style={{cursor: 'pointer'}}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* Desktop Menu */}
          <div className='nav-menu d-none d-lg-block'>
            <ul className='d-flex align-items-center justify-content-center m-0 p-0'>
              {menuItems.map((item) => {
                const parentActive = (item.link && item.link === location.pathname) || isSubMenuActive(item);
                return (
                  <li
                    key={item.id}
                    className={`nav-item position-relative d-flex align-items-center justify-content-center gap-3${parentActive ? ' active' : ''}`}
                  >
                    <NavLink
                      to={item.link || (item.subMenu && item.subMenu[0]?.link) || '#'}
                      className={({ isActive }) =>
                        (isActive || parentActive) ? 'active' : ''
                      }
                    >
                      {item.name}
                    </NavLink>
                    {item.subMenu && <i className="bi bi-chevron-down chevron-icon text-white"></i>}
                    {item.subMenu && (
                      <ul className='sub-menu '>
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.id}>
                            <NavLink
                              to={subItem.link}
                              className={({ isActive }) => (isActive ? 'active' : '')}
                              style={{ fontSize: 'var(--small-text)' }}
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
            <div className="mobile-nav-menu d-lg-none">
              <ul className='d-flex flex-column align-items-start justify-content-start m-0 p-4'>
                {menuItems.map((item) => {
                  const parentActive = (item.link && item.link === location.pathname) || isSubMenuActive(item);
                  const isSubMenuOpen = openMobileSubMenu === item.id;
                  return (
                    <li
                      key={item.id}
                      className={`nav-item menu-text-bold position-relative w-100${parentActive ? ' active' : ''}`}
                      style={{marginBottom: '1rem'}}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          cursor: item.subMenu ? 'pointer' : 'default'
                        }}
                        onClick={() => {
                          if (item.subMenu) {
                            setOpenMobileSubMenu(isSubMenuOpen ? null : item.id);
                          }
                        }}
                      >
                        <NavLink
                          to={item.link || (item.subMenu && item.subMenu[0]?.link) || '#'}
                          className={({ isActive }) =>
                            (isActive || parentActive) ? 'active' : ''
                          }
                          style={{display: 'block', width: '100%'}}
                          onClick={e => {
                            if (item.subMenu) e.preventDefault();
                          }}
                        >
                          {item.name}
                        </NavLink>
                        {item.subMenu && (
                          <i
                            className="bi bi-chevron-down chevron-icon text-black"
                            style={{
                              marginLeft: 8,
                              transition: 'transform 0.2s',
                              transform: isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                          ></i>
                        )}
                      </div>
                      {item.subMenu && isSubMenuOpen && (
                        <ul className='sub-menu ps-4 d-flex flex-column align-items-start justify-content-start gap-2' style={{paddingTop: 8}}>
                          {item.subMenu.map((subItem) => (
                            <li key={subItem.id}>
                              <NavLink
                                to={subItem.link}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                style={{ fontSize: 'var(--small-text)' }}
                              >
                                {subItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    )
  }else if(type === 'common-header'){
    return (
      <nav className={`relative z-10 ${isScrolled ? 'common-header-sticky' : 'common-head'}`}>
        <div className='container d-flex align-items-center justify-content-between p-2'>
          <div className='header-logo'>
            <Logo logo='black' />
          </div>
          {/* Hamburger Icon for mobile */}
          <div
            id="nav-icon2"
            className={isMobileMenuOpen ? "open d-lg-none" : "d-lg-none"}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            style={{cursor: 'pointer'}}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* Desktop Menu */}
          <div className='nav-menu d-none d-lg-block'>
            <ul className='d-flex align-items-center justify-content-center m-0 p-0'>
              {menuItems.map((item) => {
                const parentActive = (item.link && item.link === location.pathname) || isSubMenuActive(item);
                return (
                  <li
                    key={item.id}
                    className={`nav-item common-nav-item position-relative text-black d-flex align-items-center justify-content-center gap-3${parentActive ? ' active' : ''}`}
                  >
                    <NavLink
                      to={item.link || (item.subMenu && item.subMenu[0]?.link) || '#'}
                      className={({ isActive }) =>
                        (isActive || parentActive) ? 'active' : ''
                      }
                    >
                      {item.name}
                    </NavLink>
                    {item.subMenu && <i className="bi bi-chevron-down chevron-icon text-white"></i>}
                    {item.subMenu && (
                      <ul className='sub-menu '>
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.id}>
                            <NavLink
                              to={subItem.link}
                              className={({ isActive }) => (isActive ? 'active' : '')}
                              style={{ fontSize: 'var(--small-text)' }}
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-nav-menu d-lg-none">
              <ul className='d-flex flex-column align-items-start justify-content-start m-0 p-4'>
                {menuItems.map((item) => {
                  const parentActive = (item.link && item.link === location.pathname) || isSubMenuActive(item);
                  const isSubMenuOpen = openMobileSubMenu === item.id;
                  return (
                    <li
                      key={item.id}
                      className={`nav-item menu-text-bold position-relative w-100${parentActive ? ' active' : ''}`}
                      style={{marginBottom: '1rem'}}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          cursor: item.subMenu ? 'pointer' : 'default'
                        }}
                        onClick={() => {
                          if (item.subMenu) {
                            setOpenMobileSubMenu(isSubMenuOpen ? null : item.id);
                          }
                        }}
                      >
                        <NavLink
                          to={item.link || (item.subMenu && item.subMenu[0]?.link) || '#'}
                          className={({ isActive }) =>
                            (isActive || parentActive) ? 'active' : ''
                          }
                          style={{display: 'block', width: '100%'}}
                          onClick={e => {
                            if (item.subMenu) e.preventDefault();
                          }}
                        >
                          {item.name}
                        </NavLink>
                        {item.subMenu && (
                          <i
                            className="bi bi-chevron-down chevron-icon text-black"
                            style={{
                              marginLeft: 8,
                              transition: 'transform 0.2s',
                              transform: isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                          ></i>
                        )}
                      </div>
                      {item.subMenu && isSubMenuOpen && (
                        <ul className='sub-menu ps-4 d-flex flex-column align-items-start justify-content-start gap-2' style={{paddingTop: 8}}>
                          {item.subMenu.map((subItem) => (
                            <li key={subItem.id}>
                              <NavLink
                                to={subItem.link}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                style={{ fontSize: 'var(--small-text)' }}
                              >
                                {subItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    )
  }

}

export default Header;