import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Link } from '../components/link';
import { MelodyPlayer } from '../melodyPlayer';

const App = () => (
  <Layout>
    <SEO />
    <Link to="/about">About</Link>
    <MelodyPlayer />
  </Layout>
);

export default App;
