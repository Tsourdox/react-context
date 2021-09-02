import React from 'react';
import ImageProvider from '../contexts/imageContext';
import Layout from './Layout';

function App() {
  return (
    <ImageProvider>
      <Layout/>
    </ImageProvider>
  );
}

export default App;
