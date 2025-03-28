import Image from 'next/image';

import BookNow from '../book-now';
import SectionHeading from '../section-heading';

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-[120px]">
      <div
        className="hidden h-[100px] w-full md:block"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="content-wrapper mt-20 md:mt-0">
        <div className="flex w-full flex-wrap-reverse justify-between gap-10 md:gap-4">
          <div className="flex max-w-[587px] flex-col gap-10 md:gap-6">
            <p className="text-center text-xl md:text-left md:text-2xl">
              Our restaurant offers an authentic Turkish Mediterranean dining
              experience, blending traditional flavours with modern culinary
              techniques. Join us for an unforgettable meal!
            </p>
            <BookNow className="mx-auto md:mx-0" />
          </div>
          <SectionHeading title="About us" className="mx-auto md:mx-0" />
        </div>
        <div className="mt-[120px] flex flex-wrap justify-between gap-[120px] md:mt-[240px] md:gap-4">
          <div className="mx-auto flex flex-col items-center justify-between gap-8 md:mx-0 md:items-start md:gap-4">
            <span className="text-neutral600">Working hours</span>
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:gap-8 md:text-left">
              <span className="text-2xl uppercase md:text-heading-sm">
                Monday to Sunday
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-xl">12 pm - 1 am</span>
                <span className="text-base text-neutral600">
                  *Kitchen closes at 11 pm
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-[361px] w-full md:h-[480px] md:w-[587px]">
            <Image
              src="/images/bar.png"
              alt="Bar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="hidden h-[100px] w-full md:block"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default AboutUs;
