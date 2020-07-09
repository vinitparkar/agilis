import React, { useState } from 'react';
import { Header, H1 } from './styles.js';
import Carousel from './Carousel.js';
import Login from './Login.js';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Header>
        <H1>Carousal App</H1>
        <Login isLogged={isLogged} setIsLogged={setIsLogged} />
      </Header>
      <Carousel isLogged={isLogged}/>
    </>
  );
}
