import { CSSProperties, useContext } from 'react';
import { ImageContext } from '../contexts/imageContext';
import { images } from '../data';

const Layout = () => {
    const { likedImages, toggleLikedImage } = useContext(ImageContext);

    return (
        <div style={rootStyle}>
            {images.map(image => (
                <img
                    style={{ opacity: likedImages.includes(image.id) ? 1 : 0.5 }}
                    key={image.id}
                    src={image.url}
                    alt=""
                    onClick={() => toggleLikedImage(image.id)}
                />
            ))}
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default Layout;