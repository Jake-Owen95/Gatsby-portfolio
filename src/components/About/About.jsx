import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I studied at Hyperion Dev and completed a 6 month course in software engineering. I then worked for 6 months as an intern for a startup called Sapphire Gem Tech who specialize in creating web applications. I spent lots of my time learning. Using that knowledge I built features for the companies portfolio websites. We worked mostly in Ruby on Rails.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'As a software engineer I think my skill set is more on the back end. But I have come to find I really enjoy working on the front end and learning about design priniciples. I love the problem solving nature of programming and find the rewards of solving a problem incredibly satisfying.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'My most recent project has been the not-uberEats restuarant directory that I have brought to South Africa. This website lists all restaurants in cape town with independent delivery, saving restuarants and users money with the exlcusion of extra fees. I will be adding more areas to the website as it grows in popularity.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
