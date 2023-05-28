import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, userLogout } from "../redux/user/userActions";
import {
  Logo,
  StyledNav,
  StyledLogoWrapper,
  StyledLogo,
  StyledHeader,
  StyledNavLink,
  StyledDropDown,
  StyledDropDownContent,
  HeaderWrapper,
} from "../styled/styles";
import { BsPerson } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { IoMdApps } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";

const Header = () => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDetails())
  }, [])

  return (
    <HeaderWrapper>
      <StyledHeader>
        <StyledLogoWrapper>
          <StyledNavLink to='/'><StyledLogo src={Logo} /></StyledNavLink>
        </StyledLogoWrapper>

        <StyledNav>
          {userInfo ? (
            <>
              <StyledDropDown to='/user-profile'>
                <>
                  {userInfo?.username} <IoMdArrowDropdown />
                  <StyledDropDownContent>
                    <StyledNavLink to='/user-profile'><BsPerson />Profile</StyledNavLink>
                    <StyledNavLink to='/app'><IoMdApps />App</StyledNavLink>
                    <hr/>
                    <StyledNavLink to='/about'>
                      <BsInfoCircle />About
                    </StyledNavLink>

                    <StyledNavLink to='/settings'>
                      <CiSettings />Settings
                    </StyledNavLink>
                    <StyledNavLink onClick={() => dispatch(userLogout())}>
                      <MdLogout />Logout
                    </StyledNavLink>
                  </StyledDropDownContent>
                </>
              </StyledDropDown>
            </>
          ) : (
            <>
              <StyledNavLink to='/register'>Register</StyledNavLink>
              <StyledNavLink to='/login'>Login</StyledNavLink>
            </>
          )}
        </StyledNav>
      </StyledHeader>
    </HeaderWrapper>
  )
}

export default Header
