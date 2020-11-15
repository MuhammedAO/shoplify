import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavElements'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'



function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              SHOPLIFY
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/cart' onClick={closeMobileMenu}>
                  <i className="fas fa-shopping-cart"></i>Cart
                </NavLinks>
              </NavItem>
              {userInfo ?
                <React.Fragment>
                  <NavItem>
                    <NavLinks to='/profile' onClick={closeMobileMenu}>
                      Profile
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to=''>
                      {userInfo.name}
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='' onClick={logoutHandler}>
                      Log out
                    </NavLinks>
                  </NavItem>
                </React.Fragment>
                : <NavItem>
                  <NavLinks to='/login' onClick={closeMobileMenu}>
                    Sign in
              </NavLinks>
                </NavItem>
              }
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </React.Fragment>
  )
}

export default Navbar