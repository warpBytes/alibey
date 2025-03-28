'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { heroImages } from './hero.const';

const Hero = () => {
  return (
    <div className="relative flex h-[296px] w-full items-center justify-center bg-background md:h-[434px]">
      <div
        className="absolute left-0 right-0 top-1/2 h-16 w-full -translate-y-1/2 bg-[length:64px_64px] md:h-[100px] md:bg-[length:100px_100px]"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 flex items-center justify-center gap-10 lg:gap-24">
        {heroImages.map((image, index) => (
          <div
            key={image.alt}
            className={cn(
              'h-[136px] w-[136px] transform border border-foreground md:h-[216px] md:w-[216px]',
              image.className,
              index === heroImages.length - 1 && 'hidden md:block',
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="border-[6px] border-transparent object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
