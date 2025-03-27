import Image from 'next/image';

import BookNow from '../book-now';
import SectionHeading from '../section-heading';

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-[120px]">
      <div
        className="h-[100px] w-full"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="content-wrapper">
        <div className="flex w-full flex-wrap-reverse justify-between gap-4">
          <div className="flex max-w-[587px] flex-col gap-6">
            <p className="text-2xl">
              Our restaurant offers an authentic Turkish Mediterranean dining
              experience, blending traditional flavours with modern culinary
              techniques. Join us for an unforgettable meal!
            </p>
            <BookNow />
          </div>
          <SectionHeading title="About us" />
        </div>
        <div className="mt-[240px] flex flex-wrap-reverse justify-between gap-4">
          <div className="flex flex-col justify-between gap-4">
            <span className="text-neutral600">Working hours</span>
            <div className="flex flex-col gap-8">
              <span className="text-heading-sm uppercase">
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

          <div className="relative h-[480px] w-full md:w-[587px]">
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
        className="h-[100px] w-full"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default AboutUs;
