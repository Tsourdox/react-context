import { CSSProperties } from 'react';
import ImageCard from '../components/ImageCard';
import { images } from '../data';

const HomePage = () => {

    return (
        <div style={rootStyle}>
            {images.map(image => <ImageCard key={image.id} image={image} />)}
        </div>
    );
};

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default HomePage;