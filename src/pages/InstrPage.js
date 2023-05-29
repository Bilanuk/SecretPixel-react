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

function InstrPage() {
  return (
    <PageSection>
      <PageLineSeparator />

      <tittle class="InstrTittle">Інструкція користувача</tittle>

      <ul class="InstrText">
        <li>Реєстряція (авторизація) обов'язкова</li>
        <li>Завантажте bmp-файл з котрим будете працювати</li>
        <li>
          Виберіть один із 3-х запропонованих способів заповнення бітової карти
        </li>
        <li>Можете покексперементувати з кольорами, їх також три комбінації</li>
        <li>
          Напишіть коротке повідомленян в текстовому полі, та натисніть
          EncodeMessage щоб закодувати його в bmp-файл
        </li>
      </ul>
    </PageSection>
  );
}

export default InstrPage;
