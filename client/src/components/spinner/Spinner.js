import React from 'react';
import { Image } from './spinner.styles';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <>
      <Image src={spinner} alt='Loading' />
    </>
  );
};

export default Spinner;
