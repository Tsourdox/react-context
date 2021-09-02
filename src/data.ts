import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';

export interface ImageData {
    id: number;
    url: string;
}

// The actual image data
export const images: ImageData[] = [{
    id: 1,
    url: image1
}, {
    id: 2,
    url: image2
}, {
    id: 3,
    url: image3
}, {
    id: 4,
    url: image4
}, {
    id: 5,
    url: image5
}, {
    id: 6,
    url: image6
}, {
    id: 7,
    url: image7
}, {
    id: 8,
    url: image8
}];