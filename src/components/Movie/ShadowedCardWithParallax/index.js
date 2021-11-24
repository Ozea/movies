import React, { useEffect, useState } from 'react';
import ShadowedCard from 'components/Movie/ShadowedCard';

const ShadowedCardWithParallax = ({ height = 500, blurMax = 12, axisY = 30, ...cardProps }) => {
  const [imageParallax, setImageParallax] = useState({ blur: 0, axisY: 0 });

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < height) {
      return setImageParallax({ blur: scrollTop / height * blurMax, axisY: scrollTop / height * axisY });
    }
  };

  return (
    <ShadowedCard
      imageStyles={{
        transform: `scale(1.1) translateY(${imageParallax.axisY}px)`,
        filter: `blur(${imageParallax.blur}px)`
      }}
      {...cardProps}>
      {cardProps.children}
    </ShadowedCard>
  );
}

export default ShadowedCardWithParallax;
