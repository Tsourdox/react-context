import { CSSProperties, FC, useContext } from "react";
import { ImageContext } from "../contexts/imageContext";
import { ImageData } from "../data";
import heart from '../images/heart.png';

interface Props {
    image: ImageData;
}

const ImageCard: FC<Props> = ({ image }) => {
    const { likedImages, toggleLikedImage } = useContext(ImageContext);

    return (
        <div style={rootStyle}>
            <img
                style={imageStyle}
                key={image.id}
                src={image.url}
                alt=""
                onClick={() => toggleLikedImage(image.id)}
            />
            <img
                style={{
                    ...likeStyle,
                    opacity: likedImages.includes(image.id) ? 1 : 0.2 
                }}
                src={heart}
                alt=""
            />
        </div>
    );
}

const rootStyle: CSSProperties = {
    position: 'relative'
}

const imageStyle: CSSProperties = {
    width: '100%'
}

const likeStyle: CSSProperties = {
    width: '4rem',
    position: 'absolute',
    bottom: '1rem',
    right: '1rem'
}
 
export default ImageCard;