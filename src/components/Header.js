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
  StyledDropDownContent
} from "../styled/styles";
import { BsPerson } from "react-icons/bs";
import { MdLogout } from "react-icons/md"
import { IoMdArrowDropdown } from "react-icons/io"
import { CiSettings } from "react-icons/ci";
// 
const Header = () => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDetails())
  }, [])

  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledNavLink to='/'><StyledLogo src={Logo}/></StyledNavLink>
      </StyledLogoWrapper>

      <StyledNav>
        { userInfo ? (
          <>
            <StyledDropDown to='/user-profile'>
              <>
                {userInfo?.username} <IoMdArrowDropdown/>
                <StyledDropDownContent>
                  <StyledNavLink to='/user-profile'><BsPerson/>Profile</StyledNavLink>
                  <hr/>
                  <StyledNavLink to='/settings'>
                    <CiSettings/>Settings
                  </StyledNavLink>
                  <StyledNavLink onClick={() => dispatch(userLogout())}>
                    <MdLogout/>Logout
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
  )
}

export default Header
