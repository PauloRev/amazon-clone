import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://i.imgur.com/qL7q5XI.jpg"
            alt="banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.imgur.com/Fxg0wkV.jpg"
            alt="banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.imgur.com/049uz3B.jpg"
            alt="banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.imgur.com/nkit4A6.jpg"
            alt="banner"
          />
        </div>
      </Carousel>
    </div>
  );
}
