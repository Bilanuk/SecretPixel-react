import {
  PageLineSeparator,
  PageSectionName,
  PageSection,
} from '../styled/styles';

import '../styled/HomePage.css';
import { BsPen } from 'react-icons/bs';
import { BsEmojiSmile } from 'react-icons/bs';
import { BsChatDots } from 'react-icons/bs';

function HomePage() {
  return (
    <PageSection>
   
      <div class="intro">
        <tittle> Sicret Pixel Art</tittle>
        <p>we are a web developers and we love to create websites.</p>
      </div>

      <div class="HomePageContainer">
        <div class="row text-center">
          <div class=" block">
            <BsPen class="Icon"></BsPen>
            <h3>Only contracts</h3>
            <p>
              No corruption or just oral promises. Everything is certified
              together with a notary.
            </p>
          </div>

          <div class="block">
            <BsEmojiSmile class="Icon"></BsEmojiSmile>
            <h3>Thousands of satisfied clients</h3>
            <p>
              Every day we receive a lot of good reviews from our customers, it
              really drives us to be better.
            </p>
          </div>

          <div class=" block">
            <BsChatDots class="Icon"></BsChatDots>
            <h3>Always open for communication</h3>
            <p>
              You can write to us directly if you have any problems, or you want
              to add your plot of land.
            </p>
          </div>
        </div>
      </div>

      
     


    </PageSection>
  );
}

export default HomePage;
