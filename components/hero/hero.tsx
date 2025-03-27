'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

const Hero = () => {
  const heroImages = [
    {
      src: '/images/hero-image-1.png',
      alt: 'Turkish dessert with pistachios',
      className: 'rotate-[5deg]',
    },
    {
      src: '/images/hero-image-2.png',
      alt: 'Restaurant interior',
      className: 'rotate-[-2deg]',
    },
    {
      src: '/images/hero-image-3.png',
      alt: 'Main course dish',
      className: 'rotate-[3deg]',
    },
  ];

  return (
    <div className="relative flex h-[434px] w-full items-center justify-center bg-background">
      <div
        className="absolute left-0 right-0 top-1/2 h-[100px] w-full -translate-y-1/2"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 flex items-center justify-center gap-24">
        {heroImages.map((image) => (
          <div
            key={image.alt}
            className={cn(
              'h-[216px] w-[216px] transform border border-foreground',
              image.className,
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="border-[6px] border-white object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
