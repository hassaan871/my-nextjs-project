import { useRouter } from 'next/router';
import React from 'react';

const PlaceHolder = () => {
    const router = useRouter();

    console.log( router.pathname );
    console.log( router.query );
    
  return (
    <div>
      <h1>This is a Portfolio Page</h1>
    </div>
  )
}

export default PlaceHolder
