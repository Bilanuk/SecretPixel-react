import {
  PageLineSeparator,
  PageSectionName,
  PageSection,
} from '../styled/styles';
import BmpEditor from '../components/BmpEditor/BmpEditor';
import RecentMessages from '../components/BmpEditor/RecentMessages';
import { BsInfoCircle } from 'react-icons/bs';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const StyledInfoIcon = styled(BsInfoCircle)`
  right: 0;
  position: absolute;
  width: 15%;
  height: 40px;
  color: #fff;
`;

function AppPage() {
  return (
    <PageSection>
      <PageSectionName>
        App page
        <NavLink to="/instr">
          <StyledInfoIcon />
        </NavLink>
      </PageSectionName>

      <PageLineSeparator />

      <BmpEditor />
      <RecentMessages />
    </PageSection>
  );
}

export default AppPage;
