import { StyledButton } from "./StyledButtons";
import { StyledHeader, StyledNav, StyledLogoWrapper, HeaderWrapper, StyledLogo, StyledDropDown, StyledDropDownContent} from "./StyledHeader";
import { StyledNavLink } from "./StyledLinks";
import Logo from "../shared/SecretPixel.svg";

import styled from "styled-components";

const PageContainer = styled.main`
  position: relative;
  display: flex;
  height: 80vh;
  max-width: 70%;
  min-width: 500px;
  padding: 10px;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
`;

const PageSection = styled.div`
  width: 100%;
`;

const PageSectionName = styled.h2`
  color: white;
  margin: 10px;
`;

const PageLineSeparator = styled.hr`
  margin: 10px;
  background: white;
  height: 2px;
  border: 0px;
`;

export {StyledButton, StyledLogo, StyledNav, HeaderWrapper, StyledLogoWrapper, StyledHeader, StyledNavLink,
  Logo, StyledDropDown, StyledDropDownContent, PageContainer, PageSection, PageSectionName, PageLineSeparator }
