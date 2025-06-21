"use client"

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  // Don't render Lottie during SSR
  if (!isClient) {
    return <div style={{ width: '95%', height: '200px' }} />;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;