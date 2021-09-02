import { createContext, FC, useEffect, useState } from "react";

interface ContextValue {
    likedImages: number[];
    toggleLikedImage: (id: number) => void;
}

export const ImageContext = createContext<ContextValue>({
    likedImages: [],
    toggleLikedImage: () => {}
});

const ImageProvider: FC = (props) => {
    const [likedImages, setLikedImages] = useState<number[]>([]);

    const toggleLikedImage = (id: number) => {
        if (likedImages.includes(id)) {
            const updatedImageList = likedImages.filter(imageId => imageId !== id);
            setLikedImages(updatedImageList);
        } else {
            setLikedImages([...likedImages, id]);
        }
    }
    
    useEffect(() => {
        localStorage.setItem('likedImages', JSON.stringify(likedImages));
    }, [likedImages])

    return (
        <ImageContext.Provider
            value={{
                likedImages,
                toggleLikedImage
            }}
        >
            {props.children}
        </ImageContext.Provider>
    );
}

export default ImageProvider;