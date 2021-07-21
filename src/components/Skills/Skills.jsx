import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import SkillsImg from '../Image/SkillsImg';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12 } = skills;

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
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img1} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img2} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img3} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img4} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img5} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img6} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img7} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img8} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img9} />
              </div>
            </Fade>
          </Col>
          {/* <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img10} />
              </div>
            </Fade>
          </Col> */}
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img11} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__image">
                <SkillsImg alt="skills picture" filename={img12} />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
