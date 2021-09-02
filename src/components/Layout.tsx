import { CSSProperties } from 'react';
import { images } from '../data';
import ImageCard from './ImageCard';

const Layout = () => {

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

export default Layout;