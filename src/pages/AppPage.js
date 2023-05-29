import {
  PageLineSeparator,
  PageSectionName,
  PageSection,
} from '../styled/styles';
import BmpEditor from '../components/BmpEditor/BmpEditor';
import Modal from 'react-modal';
import { BsInfoCircle } from 'react-icons/bs';
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
} from '../styled/styles';

import { Link } from 'react-router-dom';

const handleClick = () => {};

function AppPage() {
  return (
    <PageSection>
      <PageSectionName>
        App page
        <a href="/instr" onClick={handleClick}>
          <BsInfoCircle className="IconApp" />
        </a>
      </PageSectionName>

      <PageLineSeparator />

      <BmpEditor />
    </PageSection>
  );
}

export default AppPage;
