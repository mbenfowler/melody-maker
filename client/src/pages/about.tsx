import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RouteComponentProps } from '@reach/router';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

/***************************************************************
  Below are some examples of using styled-components with the
  theme and framer-motion.
/***************************************************************

/*
  1. A basic styled component using the theme.
*/
const StyledComponent1 = styled.p`
  color: ${(props: { theme: { colors: { orange: any } } }) =>
    props.theme.colors.orange};
  font-size: 1.2rem;
`;

/*
  2. A styled component that changes color based on the screen size
  using the theme.
*/
const StyledComponent2 = styled.p`
  color: ${({ theme }) =>
    theme.screens.sm ? theme.colors.blue : theme.colors.orange};
  font-size: 1.2rem;
`;

/*
  3. A styled component that extends a framer-motion component.
  (animation props applied in the component instance)
*/

const OrangeBlock = styled(motion.div)`
  background: ${(props: { theme: { colors: { orange: any } } }) =>
    props.theme.colors.orange};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

/*
  4. A styled component that extends a framer-motion component.
  (animation props applied in the styled-component definition
  via the attrs method)
*/
const BlueBlock = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 2 },
  whileHover: { scale: 0.8 },
}))`
  background: ${(props: { theme: { colors: { blue: any } } }) =>
    props.theme.colors.blue};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
`;

const BlocksWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AboutPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <SEO
        title="About"
        description="Examples using the gatsby-starter-template-deluxe."
      />
      <h3>
        {' '}
        Melody Maker is an open source music education/creative tool that will
        generate and play you a unique melody!
      </h3>
      <StyledComponent1>Project details:</StyledComponent1>
      <StyledComponent2>
        The app is made with React + Node(Express) and hosted on Netlify Playing
        of the tones uses the standard Web Audio API audio context that can be
        played in any modern browser. (sorry IE) A lot of the theory logic was
        inspired by and borrowed from tonaljs
      </StyledComponent2>

      <BlocksWrapper>
        <OrangeBlock
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          whileHover={{ rotate: 1.1 }}
        />
        <BlueBlock />
      </BlocksWrapper>
    </Layout>
  );
};

export default AboutPage;
