import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../styles';
// Components
import { Link } from '../link';
import { Footer } from '../footer';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: ${(props: any) => (props.theme.screens.sm ? '1.8rem' : '2.2rem')};
  margin: 20px 0px;
  color: white;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <GlobalStyles />
        <Link to="/">
          <Title>Melody Maker</Title>
        </Link>
        <br />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
