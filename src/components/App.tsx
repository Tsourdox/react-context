import { BrowserRouter } from 'react-router-dom';
import ImageProvider from '../contexts/imageContext';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <ImageProvider>
        <Layout/>
      </ImageProvider>
    </BrowserRouter>
  );
}

export default App;
