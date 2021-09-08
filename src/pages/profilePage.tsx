import { CSSProperties, useContext } from 'react';
import ImageCard from '../components/ImageCard';
import { ImageContext } from '../contexts/imageContext';
import { images } from '../data';

const ProfilePage = () => {
    const { likedImages } = useContext(ImageContext);
    
    // Link-ish way of doing an intersection
    const likedImageList = images.filter(image =>
        likedImages.includes(image.id));

    // Classic way of doing an intersection
    // const newList: ImageData[] = [];
    // for (const image of images) {
    //     if (likedImages.includes(image.id)) {
    //         newList.push(image);
    //     }
    // }

    return (
        <div style={rootStyle}>
            {likedImageList.map(image => <ImageCard key={image.id} image={image} />)}
        </div>
    );
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
};

export default ProfilePage;