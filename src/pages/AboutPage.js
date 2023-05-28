import {
  PageLineSeparator,
  PageSection,
  PageSectionName,
} from '../styled/styles';

import '../styled/AboutPage.css';

import { AiFillGithub } from 'react-icons/ai';

function AboutPage() {
  return (
    <PageSection>
      <PageSectionName>About</PageSectionName>
      <PageLineSeparator />

      <div class="cards-container">
        <div class="col-lg-4">
          <div class="cards">
            <img
              src="https://avatars.githubusercontent.com/u/40918746?v=4"
              class="cards-img"
            ></img>
            <div class="cards-body text-center">
              <h4 class="cards-title">Bilanuk Roman</h4>
              <h5 class="cards-subtitle ">Team member</h5>
              <p class="cards-text">
                Implemented SPA behaviour into our website with AJAX and created
                a webpage layout for specific item.
              </p>
              <section class="row">
                <div class="col-4">
                  <a href="https://github.com/Bilanuk">
                    <AiFillGithub class="Icons"> </AiFillGithub>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="cards ">
            <img
              src="https://avatars.githubusercontent.com/u/110038755?v=4"
              class="card-img"
              alt="Vladyslav Knysh"
            ></img>
            <div class="cards-body text-center">
              <h4 class="cards-title">Vladyslav Knysh</h4>
              <h5 class="cards-subtitle mb-2 text-muted">Team lead</h5>
              <p class="cards-text">
                Implemented static header and footer which have adaptive layout.
                Also added user interaction part.
              </p>
              <section class="row">
                <div class="col-4">
                  <a href="https://github.com/vladknysh">
                  <AiFillGithub class="Icons"> </AiFillGithub>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="cards">
            <img
              src="https://avatars.githubusercontent.com/u/86800040?v=4"
              class="card-img"
            ></img>
            <div class=" text-center">
              <h4 class="cards-title">Kolintso Andriy</h4>
              <h5 class="cards-subtitle ">Team member</h5>
              <p class="cards-text">
                Implemented adaptive layout of main content into home page,
                category page and "About Us".
              </p>
              <section class="row">
                <div class="col-4">
                  <a href="https://github.com/HeWHopE">
                  <AiFillGithub class="Icons"> </AiFillGithub>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default AboutPage;
