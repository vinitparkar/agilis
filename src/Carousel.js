import React, { useState, useEffect } from 'react';
import { CarouselContainer, CarouselItem, CarouselImage, LeftButton, RightButton } from './styles.js';

export default function Carousel(props) {
  let images = props.isLogged ? ['1','2','3'] : ['4', '5', '6', '7'];
  const [x, setX] = useState(0);

  const handleLeftClick = () => {
    if(x === 0) {
      setX(-100 * (images.length - 1));
    } else {
      setX(x + 100);
    }
  }

  const handleRightClick = () => {
    if(x === -100 * (images.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  }

  useEffect(() => {
    let intervalId = setInterval(() => handleRightClick(), 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <CarouselContainer>
      {
        images.map((image, i) => {
          return (
            <CarouselItem key={i} style={{transform: `translateX(${x}%)`}}>
              <CarouselImage alt='' src={`images/${image}.jpg`} />
            </CarouselItem>
          );
        })
      }
      <LeftButton onClick={handleLeftClick}>{'<'}</LeftButton>
      <RightButton onClick={handleRightClick}>{'>'}</RightButton>
    </CarouselContainer>
  )
}
