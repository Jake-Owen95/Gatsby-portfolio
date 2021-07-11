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
                    "I am interested in sustainabilty and the enviromental crisis we face. Technology is an incredible tool and has the ability to help tackle many of the world's complex problems. This is what got me interested in programming and is the sort of thing I would like to use my skill set for. I want to make a difference."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I enjoy working across the full stack and have recently been focusing on web development. Lately I have been using lots of React and Gatsby and these are the techonologies I would like to keep working with. Gatsby is fast becoming one of my favourite web dev tools.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'I have a diploma in software engineering from HyperionDev (backed by tech giants such as Google and Facebook). The course focused heavily on backend development in Python and Java. However, since graduating I have spent the majority of my time working on the frontend. This has given me a good grasp on the full stack process.'}
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
