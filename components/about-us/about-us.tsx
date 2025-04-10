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
          <div className="flex max-w-[708px] flex-col mx-auto gap-6 ">
          <SectionHeading title="About us" className="mx-auto md:mx-0 md:mb-4" />
            <p className="text-center text-xl  md:text-2xl">
              Our restaurant offers an authentic Turkish Mediterranean dining
              experience, blending traditional flavours with modern culinary
              techniques. Join us for an unforgettable meal!
            </p>
            <BookNow className="mx-auto " />
          </div>
        </div>
        <div className="mt-[120px] md:mt-[80px] flex flex-col justify-center gap-[120px] md:gap-[80px]">
          <div className="mx-auto flex flex-col items-center justify-between gap-6 md:mx-0">
            <span className="max-md:text-neutral600 md:text-2xl">Working hours:</span>
            <div className="flex flex-col items-center gap-8 text-center">
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
          <div className="relative h-[361px] w-full md:h-[570px]">
            <img
              src="/images/bar.png"
              alt="Bar"
              className="object-cover"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
