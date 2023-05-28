import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { StyledNavLink } from "./StyledLinks";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 100%;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 55px;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  border-radius: 5px;
  z-index: 100;
  position: fixed;
  margin-top: 10px;
  min-width: 500px;
  max-width: 70%;
  width: 100%;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const StyledLogoWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

export const StyledLogo = styled.img`
  display: inline-block;
  width: 8rem;
  height: 100%;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const StyledDropDownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  border: 1px solid white;
  border-radius: 5px;
  top: 25px;
  left: 0;
  background-color: transparent;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transition: .1s ease-in-out;
  padding: 12px 12px;
  backdrop-filter: blur(6px);

  &:hover {
    display: block;
  }
`;

export const StyledDropDown = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16pt;
  color: white;
  position: relative;
  justify-content: center;
  gap: 0;
  cursor: pointer;

  &:hover ${StyledDropDownContent} {
    display: block;
  }
`;
