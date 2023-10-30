import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ imageArray }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageArray != null) {
      setIsLoading(false);
    }
  }, [imageArray]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Carousel autoPlay={true} controls={false} indicators={false}>
          <Carousel.Item interval={1000}>
            <img
              src={imageArray[0].img1}
              alt=""
              className='d-block mx-auto'
              style={{ height: '80px', width: 'auto' }}
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              src={imageArray[1].img2}
              alt=""
              className='d-block mx-auto'
              style={{ height: '80px', width: 'auto' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imageArray[2].img3}
              alt=""
              className='d-block mx-auto'
              style={{ height: '80px', width: 'auto' }}
            />
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};

export default ImageCarousel;
